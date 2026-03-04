"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const steps = [
    {
        number: "01",
        title: "Plan & Architect",
        description:
            "Before writing a single line of code, I dive deep into understanding the project goals, user needs, and technical constraints.",
    },
    {
        number: "02",
        title: "Build & Develop",
        description:
            "Build pixel-perfect user interfaces and robust backend systems in parallel. I ensure that every component—UI or API—is maintainable.",
    },
    {
        number: "03",
        title: "Launch & Support",
        description:
            "I also provide post-launch monitoring, performance optimization, and ongoing iteration support to keep your product growing.",
    },
];

// ─── Animated divider line ────────────────────────────────────────────────────

function AnimatedLine() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div ref={ref} className="relative w-full flex items-center gap-2 my-8 md:my-10">
            <span className="font-mono font-bold shrink-0 text-sm" style={{ color: "#7af298" }}>
                {"</"}
            </span>
            <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-px"
                    style={{ background: "#7af298" }}
                    initial={{ width: "0%" }}
                    animate={inView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>
            <span className="font-mono font-bold shrink-0 text-sm" style={{ color: "#7af298" }}>
                {">"}
            </span>
        </div>
    );
}

// ─── Step Card ────────────────────────────────────────────────────────────────

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            className="flex flex-col justify-between pt-6 pb-10"
            style={{
                borderLeft: index === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                paddingLeft: index === 0 ? 0 : "clamp(20px, 3vw, 40px)",
            }}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
            {/* Big number — clipped by overflow hidden, max 158px */}
            <div className="overflow-hidden">
                <div
                    className="overflow-hidden"
                    style={{ height: "calc(clamp(80px, 12vw, 158px) / 1.5)" }}
                >
                    <motion.span
                        className="block font-black select-none"
                        style={{
                            fontSize: "clamp(80px, 12vw, 158px)",
                            color: "#7af298",
                            fontFamily: "var(--font-space)",
                            lineHeight: 0.9,
                        }}
                        initial={{ y: "100%" }}
                        animate={inView ? { y: "0%" } : {}}
                        transition={{ duration: 0.7, delay: index * 0.15 + 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {step.number}
                    </motion.span>
                </div>
            </div>

            {/* Title + description — sits at bottom */}
            <div className="flex flex-col gap-3 mt-12">
                <h3
                    className="text-white font-bold"
                    style={{ fontSize: "clamp(16px, 1.6vw, 22px)", fontFamily: "var(--font-space)" }}
                >
                    {step.title}
                </h3>
                <p
                    className="text-white/50 leading-relaxed"
                    style={{ fontSize: "clamp(13px, 1.1vw, 15px)", fontFamily: "var(--font-space)" }}
                >
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Process() {
    const labelRef = useRef(null);
    const titleRef = useRef(null);

    const labelInView = useInView(labelRef, { once: true });
    const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

    return (
        <section className="w-full bg-black text-white">
            <div className="max-w-[1400px] mx-auto px-5 py-20 lg:py-28">

                {/* ── Top row: label left, heading right ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <motion.p
                        ref={labelRef}
                        className="font-semibold shrink-0"
                        style={{ fontSize: 16, color: "#7af298", fontFamily: "var(--font-space)" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={labelInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
            // Process
                    </motion.p>

                    <motion.h2
                        ref={titleRef}
                        className="text-white font-bold md:text-right"
                        style={{
                            fontSize: "clamp(28px, 4vw, 48px)",
                            lineHeight: 1.15,
                            fontFamily: "var(--font-space)",
                            maxWidth: 560,
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        My Development work<br />Process
                    </motion.h2>
                </div>

                {/* ── Animated divider ── */}
                <AnimatedLine />

                {/* ── 3-column step grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-3">
                    {steps.map((step, i) => (
                        <StepCard key={step.number} step={step} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}