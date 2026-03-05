"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Mail, Pen } from "lucide-react";

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

const staggerContainer = (delay = 0) => ({
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

// ─── Social links ─────────────────────────────────────────────────────────────

const socials = [
    { label: "Twitter (X)", href: "#", },
    { label: "LinkedIn", href: "#", },
    { label: "GitHub", href: "#", },
    { label: "CodePen", href: "#", Icon: Pen },
];

// ─── Input / Textarea shared styles ───────────────────────────────────────────

const inputBase: React.CSSProperties = {
    width: "100%",
    background: "#1a1c1a",
    border: "1px solid #2a2e2a",
    borderRadius: 8,
    color: "#fff",
    fontSize: 15,
    fontFamily: "var(--font-space)",
    outline: "none",
    padding: "14px 16px",
    transition: "border-color 0.2s",
};

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function page() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    const sectionInView = useInView(sectionRef, { once: true });
    const leftInView = useInView(leftRef, { once: true, margin: "-60px" });
    const rightInView = useInView(rightRef, { once: true, margin: "-60px" });

    const [focused, setFocused] = useState<string | null>(null);

    const borderStyle = (field: string) => ({
        ...inputBase,
        borderColor: focused === field ? "#4afe8a" : "#2a2e2a",
    });

    return (
        <section className="w-full bg-[#0f110f] text-white">
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-20 lg:py-28">

                {/* ── Label ── */}
                <motion.p
                    ref={sectionRef}
                    className="font-semibold mb-8"
                    style={{ fontSize: 15, color: "#4afe8a", fontFamily: "var(--font-space)" }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
          // Get In Touch
                </motion.p>

                {/* ── Two-column grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* ── LEFT ── */}
                    <motion.div
                        ref={leftRef}
                        variants={staggerContainer(0.05)}
                        initial="hidden"
                        animate={leftInView ? "show" : "hidden"}
                        className="flex flex-col gap-8"
                    >
                        {/* Heading */}
                        <motion.h2
                            variants={fadeUp}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="font-black uppercase leading-[1.05]"
                            style={{ fontSize: "clamp(36px, 5vw, 48px)" }}
                        >
                            LET'S CONNECT &<br />COLLABORATE
                        </motion.h2>

                        {/* Sub-text */}
                        <motion.p
                            variants={fadeUp}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="leading-relaxed"
                            style={{ fontSize: 15, color: "#a0a0a0", fontFamily: "var(--font-space)", maxWidth: 420 }}
                        >
                            Have a project in mind? Let's make it happen! Drop us a message, and
                            we'll connect with you soon.
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-wrap gap-x-5 gap-y-2"
                        >
                            <li className="group relative overflow-hidden cursor-pointer py-1">
                                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                                    <span className="text-[#7af298]">/</span> Twitter (x)
                                </div>
                                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                                    <span className="text-[#7af298]">/</span>{" "}
                                    <span className="text-[#b7fecb]">Twitter (x)</span>
                                </div>
                            </li>

                            <li className="group relative overflow-hidden cursor-pointer py-1">
                                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                                    <span className="text-[#7af298]">/</span> LinkedIn
                                </div>
                                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                                    <span className="text-[#7af298]">/</span>{" "}
                                    <span className="text-[#b7fecb]">LinkedIn</span>
                                </div>
                            </li>

                            <li className="group relative overflow-hidden cursor-pointer py-1">
                                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                                    <span className="text-[#7af298]">/</span> Github
                                </div>
                                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                                    <span className="text-[#7af298]">/</span>{" "}
                                    <span className="text-[#b7fecb]">Github</span>
                                </div>
                            </li>

                            <li className="group relative overflow-hidden cursor-pointer py-1">
                                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                                    <span className="text-[#7af298]">/</span> Facebook
                                </div>
                                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                                    <span className="text-[#7af298]">/</span>{" "}
                                    <span className="text-[#b7fecb]">Facebook</span>
                                </div>
                            </li>
                        </motion.div>

                        {/* Book a Meeting + Email */}
                        <motion.div
                            variants={fadeUp}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-4 mt-2"
                        >
                            <a
                                href="#"
                                className="group flex items-center gap-3 w-fit"
                                style={{ textDecoration: "none" }}
                            >
                                <span
                                    className="flex items-center justify-center rounded-lg border border-white/20 group-hover:border-white/50 transition-colors duration-200"
                                    style={{ width: 36, height: 36 }}
                                >
                                    <Calendar size={16} color="#fff" />
                                </span>
                                <span
                                    className="font-semibold group-hover:text-white/70 transition-colors duration-200"
                                    style={{ fontSize: 15, fontFamily: "var(--font-space)" }}
                                >
                                    Book a Meeting
                                </span>
                            </a>

                            <a
                                href="mailto:info@brunosimon.com"
                                className="group flex items-center gap-3 w-fit"
                                style={{ textDecoration: "none" }}
                            >
                                <span
                                    className="flex items-center justify-center rounded-lg border border-white/20 group-hover:border-white/50 transition-colors duration-200"
                                    style={{ width: 36, height: 36 }}
                                >
                                    <Mail size={16} color="#fff" />
                                </span>
                                <span
                                    className="font-semibold group-hover:text-white/70 transition-colors duration-200"
                                    style={{ fontSize: 15, fontFamily: "var(--font-space)" }}
                                >
                                    info@brunosimon.com
                                </span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* ── RIGHT: Form ── */}
                    <motion.form
                        action="https://formspree.io/f/mzdjpezo"
                        method="POST"
                        ref={rightRef}
                        initial={{ opacity: 0, y: 32 }}
                        animate={rightInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-6"
                    >
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label style={{ fontSize: 14, fontFamily: "var(--font-space)", color: "#e0e0e0" }}>
                                Name<span style={{ color: "#4afe8a" }}>*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                style={borderStyle("name")}
                                onFocus={() => setFocused("name")}
                                onBlur={() => setFocused(null)}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label style={{ fontSize: 14, fontFamily: "var(--font-space)", color: "#e0e0e0" }}>
                                Email<span style={{ color: "#4afe8a" }}>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                style={borderStyle("email")}
                                onFocus={() => setFocused("email")}
                                onBlur={() => setFocused(null)}
                                required
                            />
                        </div>

                        {/* Project Description */}
                        <div className="flex flex-col gap-2">
                            <label style={{ fontSize: 14, fontFamily: "var(--font-space)", color: "#e0e0e0" }}>
                                Project Description<span style={{ color: "#4afe8a" }}>*</span>
                            </label>
                            <textarea
                                name="message"
                                placeholder="Write your project details"
                                rows={6}
                                style={{
                                    ...borderStyle("desc"),
                                    resize: "vertical",
                                    minHeight: 130,
                                }}
                                onFocus={() => setFocused("desc")}
                                onBlur={() => setFocused(null)}
                                required
                            />
                        </div>

                        <button className="group relative overflow-hidden cursor-pointer py-1">
                                <div className="transition-transform duration-300 text-left  ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                                    Send a Message
                                </div>
                                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                                   
                                    <span className="text-[#b7fecb]">Send a Message</span>
                                </div>
                            </button>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}