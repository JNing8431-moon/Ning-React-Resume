"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { MousePointer2 } from "lucide-react";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Motion values for the cursor position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth springs for the trailing ring
    const springConfig = { damping: 20, stiffness: 200 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.getAttribute('role') === 'button';

            setIsHovered(!!isInteractive);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null; // Disable on touch devices
    }

    return (
        <>
            {/* Main Icon Cursor */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] text-teal-400"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-20%", // Offset to center the tip of the pointer icon roughly
                    translateY: "-20%",
                    opacity: isVisible ? 1 : 0,
                }}
            >
                <MousePointer2
                    size={24}
                    fill="currentColor"
                    className="drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                />
            </motion.div>
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-teal-400 rounded-full pointer-events-none z-[9998]"
                animate={{
                    scale: isHovered ? 2 : 1,
                    backgroundColor: isHovered ? "rgba(45, 212, 191, 0.2)" : "transparent",
                    borderColor: isHovered ? "rgba(45, 212, 191, 0.5)" : "rgba(45, 212, 191, 0.8)",
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
}
