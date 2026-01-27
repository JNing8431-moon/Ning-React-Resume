"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Star } from "lucide-react";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // Initially false, show on first move

    // Motion values for the cursor position
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth springs for the trailing ring
    const springConfig = { damping: 20, stiffness: 200 };
    const ringX = useSpring(cursorX, springConfig);
    const ringY = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Handle window scroll
        const handleScroll = () => {
            // No action needed for cursor movement, but useful for context
        };

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;

            const isInteractive =
                target.closest('a') ||
                target.closest('button') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.getAttribute('role') === 'button';

            setIsHovered(!!isInteractive);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999]" style={{ opacity: isVisible ? 1 : 0 }}>
            {/* Main Icon Cursor */}
            <motion.div
                className="fixed top-0 left-0 text-teal-400 flex items-center justify-center pointer-events-none"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: 24,
                    height: 24,
                }}
            >
                <Star
                    size={24}
                    fill="currentColor"
                    strokeWidth={2}
                    className="drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"
                />
            </motion.div>
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-teal-400 rounded-full flex items-center justify-center pointer-events-none"
                animate={{
                    scale: isHovered ? 2 : 1,
                    backgroundColor: isHovered ? "rgba(45, 212, 191, 0.2)" : "transparent",
                    borderColor: isHovered ? "rgba(45, 212, 191, 0.6)" : "rgba(45, 212, 191, 0.8)",
                }}
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
