"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, Youtube, MonitorPlay, MapPin, MessageCircle, Download } from "lucide-react";

const birthYear = 2004;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

export default function Resume() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 100
            }
        }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4 // Wait for reveal animation
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-100 p-8 font-sans selection:bg-teal-500 selection:text-white overflow-hidden">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-teal-500 origin-left z-[101]"
                style={{ scaleX }}
            />
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-teal-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Entrance Reveal Overlay */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                style={{ originY: 0 }}
                className="fixed inset-0 bg-teal-500 z-[100] pointer-events-none"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
                style={{ originY: 0 }}
                className="fixed inset-0 bg-slate-950 z-[99] pointer-events-none"
            />

            <div className="relative max-w-4xl mx-auto space-y-24 z-10">

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="flex flex-col md:flex-row gap-8 items-start md:items-center"
                >
                    {/* Profile Image */}
                    <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-full border-[2px] border-white shadow-2xl bg-white p-[5px]">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                            <Image
                                src="/Ning-React-Resume/photo.webp"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div>
                            <h1 className="text-5xl font-bold tracking-tight text-teal-400">Ning</h1>
                            <p className="text-xl text-slate-400 mt-2">Software Engineering Intern | Backend & VR Development</p>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full">
                                <MapPin className="w-4 h-4 text-teal-400" />
                                <span>Kuala Lumpur Setapak, Malaysia</span>
                            </div>
                            <a
                                href="https://wa.link/zvjw1o"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full hover:bg-slate-800 transition-colors group"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-4 h-4 text-teal-400 fill-teal-400 group-hover:scale-110 transition-transform"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.801.983 3.826 1.504 5.888 1.505h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>+60 11-5500 5497</span>
                            </a>
                            <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full">
                                <span className="text-teal-400 font-medium">Age</span>
                                <span>{age}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full">
                                <span className="w-4 h-4 flex items-center justify-center text-teal-400 font-bold text-xs">文</span>
                                <span>English, Mandarin, Malay</span>
                            </div>
                        </div>

                        <p className="max-w-xl text-slate-300 leading-relaxed">
                            Computer Science undergraduate with hands-on experience in backend development,
                            ERP system implementation, and interactive software projects. Passionate about
                            building efficient systems, APIs, and immersive applications using modern tools
                            and frameworks.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2 items-center">
                            <motion.a whileHover={{ scale: 1.1 }} href="https://github.com/JNing8431-moon" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                                <Github className="w-6 h-6 text-teal-400" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} href="https://www.linkedin.com/in/jning-tan-b7225a286/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                                <Linkedin className="w-6 h-6 text-teal-400" />
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} href="mailto:jning8431@gmail.com" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
                                <Mail className="w-6 h-6 text-teal-400" />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                href="/Ning-React-Resume/RESUME_TAN JIA NING.pdf"
                                download="RESUME_TAN JIA NING.pdf"
                                className="flex items-center gap-2 px-6 py-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors shadow-lg active:scale-95 no-print ml-auto md:ml-0"
                            >
                                <Download className="w-5 h-5" />
                                <span className="font-medium text-sm">Download PDF</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.header>

                {/* Experience Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <Briefcase className="w-6 h-6 text-teal-400" />
                        <h2 className="text-2xl font-semibold text-slate-200">Experience</h2>
                    </div>

                    {[
                        {
                            role: "Software Engineer Intern",
                            company: "CodeX Studio",
                            period: "Jan 2026 – Jul 2026",
                            description:
                                "Currently involved in the development of an ERP system, contributing to backend logic, database-related features, and system modules. Collaborate with team members to implement business workflows and enhance system functionality."
                        },
                        {
                            role: "Backend Developer Intern",
                            company: "Aspert Innovations Sdn. Bhd.",
                            period: "Nov 2023 – Jan 2024",
                            description:
                                "Participated in backend system enhancement and migration projects. Gained hands-on experience using Python and SQL, migrated Django serializer files to FastAPI controllers, designed RESTful APIs, and collaborated with senior developers on production-level backend systems."
                        }
                    ].map((job, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group p-6 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-all border border-transparent hover:border-teal-500/30"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-medium text-slate-100 group-hover:text-teal-400 transition-colors">{job.role}</h3>
                                <span className="text-sm font-mono text-slate-500">{job.period}</span>
                            </div>
                            <p className="text-lg text-slate-400 mb-2">{job.company}</p>
                            <p className="text-slate-400 leading-relaxed">{job.description}</p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Skills Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <Code className="w-6 h-6 text-teal-400" />
                        <h2 className="text-2xl font-semibold text-slate-200">Skills</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                category: "Programming Languages",
                                skills: ["Python", "SQL", "Java", "C", "C++", "C#", "HTML", "CSS", "Flutter"]
                            },
                            {
                                category: "Frameworks & Technologies",
                                skills: ["FastAPI", "Django", "RESTful API", "Unity", "Virtual Reality (VR)"]
                            },
                            {
                                category: "Tools & Software",
                                skills: ["Visual Studio", "VS Code", "Unity Editor", "Git", "Microsoft Office", "Adobe Photoshop", "Canva"]
                            },
                            {
                                category: "Core Concepts",
                                skills: ["OOP", "Data Structures & Algorithms", "Web Development", "GUI Programming", "Game Dev"]
                            }
                        ].map((section, idx) => (
                            <div key={idx}>
                                <h3 className="text-lg font-medium text-slate-300 mb-3">{section.category}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {section.skills.map((skill, index) => (
                                        <motion.span
                                            key={index}
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-teal-400/10 text-teal-300 rounded-full text-sm font-medium border border-teal-400/20"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <GraduationCap className="w-6 h-6 text-teal-400" />
                        <h2 className="text-2xl font-semibold text-slate-200">Education</h2>
                    </div>
                    <div className="space-y-6">
                        {[
                            {
                                degree: "Bachelor of CS (Honours) in Interactive Software Technology",
                                institution: "Tunku Abdul Rahman University of Management and Technology (KL Branch)",
                                period: "July 2024 – June 2026",
                                highlights: [
                                    "Specialized in game programming, VR, and real-time interactive systems.",
                                    "Developed performance-focused applications using Unity and 3D assets.",
                                    "Coursework: Graphic Programming, Mobile App Dev, Data Structures & Algorithms."
                                ]
                            },
                            {
                                degree: "Diploma in Computer Science",
                                institution: "Tunku Abdul Rahman University of Management and Technology (KL Branch)",
                                period: "July 2022 – June 2024",
                                grade: "CGPA: 3.30",
                                highlights: [
                                    "Strong foundation in OOP, Web Application, and GUI Programming.",
                                    "Hands-on experience with Python, Java, C++, C#, HTML/CSS, and SQL.",
                                    "Completed multiple full-stack academic projects."
                                ]
                            },
                            {
                                degree: "Malaysia Certificate of Education (SPM)",
                                institution: "Sekolah Menengah Kebangsaan Perlis",
                                period: "2021",
                                highlights: [
                                    "Pure Science Stream: Achieved 5 As and 4 Bs.",
                                    "Leadership: Assistant Chief Prefect (Form 5)."
                                ]
                            }
                        ].map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-6 bg-slate-800/50 rounded-lg border border-transparent hover:border-teal-500/30 transition-all"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-1">
                                    <h3 className="text-xl font-medium text-slate-100 group-hover:text-teal-400 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <span className="text-sm font-mono text-slate-500 whitespace-nowrap">{edu.period}</span>
                                </div>
                                <p className="text-lg text-teal-400/80 mb-1">{edu.institution}</p>
                                {edu.grade && <p className="text-sm text-slate-400 mb-3 font-mono">{edu.grade}</p>}
                                <ul className="list-disc list-inside space-y-1 mt-3">
                                    {edu.highlights.map((item, i) => (
                                        <li key={i} className="text-slate-400 text-sm leading-relaxed">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Project Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <MonitorPlay className="w-6 h-6 text-teal-400" />
                        <h2 className="text-2xl font-semibold text-slate-200">Projects</h2>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            variants={fadeInUp}
                            className="p-6 bg-slate-800/50 rounded-lg border border-transparent hover:border-teal-500/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-1">
                                <h3 className="text-xl font-medium text-slate-100 group-hover:text-teal-400 transition-colors">
                                    VR Eco-Friendly Simulator
                                </h3>
                                <span className="text-sm font-mono text-slate-500">Final Year Project (2025)</span>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-4">
                                Developed an immersive virtual reality (VR) simulator showcasing sustainable, eco-friendly home designs and energy-efficient living solutions.
                            </p>

                            <ul className="list-disc list-inside space-y-1 mb-6 text-slate-400 text-sm">
                                <li>Implemented interactive features to educate users on renewable energy, smart home systems, and environmentally responsible material choices.</li>
                                <li>Built using Unity and VR frameworks, integrating optimized 3D models, intuitive UI/UX, and real-time environmental feedback.</li>
                                <li>Conducted user testing and performance optimization to ensure smooth VR interaction and high engagement.</li>
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://youtu.be/irZUjjkPpNE?si=mwyVvuwPSk0yyey_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-400 hover:bg-red-600/20 rounded-md transition-colors text-sm font-medium"
                                >
                                    <Youtube className="w-4 h-4" />
                                    Watch Demo
                                </a>
                                <a
                                    href="https://www.canva.com/design/DAG6_EWuU-M/f_FqodBdZhVbs72dbRHOgw/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-teal-400/10 text-teal-400 hover:bg-teal-400/20 rounded-md transition-colors text-sm font-medium"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Presentation Slides
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="p-6 bg-slate-800/50 rounded-lg border border-transparent hover:border-teal-500/30 transition-all"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start mb-2 gap-1">
                                <h3 className="text-xl font-medium text-slate-100 group-hover:text-teal-400 transition-colors">
                                    Job Management System (Logistics)
                                </h3>
                                <span className="text-sm font-mono text-slate-500">Flutter Mobile Application — University Assignment</span>
                            </div>

                            <p className="text-slate-400 leading-relaxed mb-4">
                                Developed a Flutter-based mobile application to streamline job management and delivery workflows for part delivery personnel in a workshop environment.
                            </p>

                            <ul className="list-disc list-inside space-y-1 mb-6 text-slate-400 text-sm">
                                <li>Designed a real-time delivery schedule interface for tracking order status (Picked Up, En Route, Delivered).</li>
                                <li>Implemented detailed part request views allowing personnel to verify specifications and quantities before dispatch.</li>
                                <li>Integrated digital delivery confirmation features, including photo capture and signature submission for verified completion.</li>
                            </ul>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/TanJeeSchuan/mobile_assignment.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-300 hover:bg-slate-700 rounded-md transition-colors text-sm font-medium border border-slate-600"
                                >
                                    <Github className="w-4 h-4" />
                                    View Repository
                                </a>
                                <a
                                    href="https://www.canva.com/design/DAGupFRpA-I/dK2vyVOM61P3mUGB-961PA/edit?utm_content=DAGupFRpA-I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-teal-400/10 text-teal-400 hover:bg-teal-400/20 rounded-md transition-colors text-sm font-medium"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Presentation Slides
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>


                {/* GitHub Status Section */}
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <div className="flex items-center gap-2 mb-6">
                        <Github className="w-6 h-6 text-teal-400" />
                        <h2 className="text-2xl font-semibold text-slate-200">GitHub Overview</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <motion.div
                            variants={fadeInUp}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-medium text-slate-100">Development Activity</h3>
                            <p className="text-slate-400 leading-relaxed">
                                I'm actively contributing to open-source projects and working on personal projects. Check out my GitHub profile to see my coding habits and progress.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 flex-1">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Focus</p>
                                    <p className="text-teal-400 font-mono font-bold">Backend & VR</p>
                                </div>
                                <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 flex-1">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Main Language</p>
                                    <p className="text-teal-400 font-mono font-bold">C#</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="bg-slate-800/20 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm overflow-hidden flex items-center justify-center no-print"
                        >
                            {/* Using GitHub Readme Stats for dynamic visualization */}
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=JNing8431-moon&show_icons=true&theme=transparent&title_color=2dd4bf&text_color=94a3b8&icon_color=2dd4bf&border_color=334155&hide_border=true&bg_color=00000000"
                                alt="GitHub Stats"
                                className="w-full max-w-sm"
                            />
                        </motion.div>
                    </div>
                </motion.section>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="pt-24 pb-8 text-center text-slate-500 text-sm"
                >
                    <p>Built with Next.js & Framer Motion</p>
                </motion.footer>

            </div>
        </div>
    );
}