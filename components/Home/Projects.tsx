"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
}

const projects: Project[] = [
    {
        title: "Techzo",
        description:
            "Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online",
        image: "/imran.jpg",
        tags: ["HTML5 & CSS", "Framer Motion", "Vite"],
        link: "#",
    },
    {
        title: "Lumin Studio",
        description:
            "LuminStudio blends elegance and clarity — a modern design agency template crafted to highlight creative work and impress potential clients",
        image: "/imrans.png",
        tags: ["HTML5 & Tailwind CSS", "React", "Vite"],
        link: "#",
    },
    {
        title: "Techz",
        description:
            "Techzo is a cutting-edge design agency template built to showcase innovation, digital expertise, and a bold creative presence online",
        image: "/imran.jpg",
        tags: ["HTML5 & CSS", "Framer Motion", "Vite"],
        link: "#",
    },
    {
        title: "Lumin Studi",
        description:
            "LuminStudio blends elegance and clarity — a modern design agency template crafted to highlight creative work and impress potential clients",
        image: "/imrans.png",
        tags: ["HTML5 & Tailwind CSS", "React", "Vite"],
        link: "#",
    },
];

// ─── Animated divider line ────────────────────────────────────────────────────

function AnimatedLine() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div
            ref={ref}
            className="relative w-full flex items-center gap-2 my-8"
            style={{ color: "#7af298" }}
        >
            {/* left bracket */}
            <span
                className="font-mono font-bold shrink-0 text-sm"
                style={{ color: "#7af298" }}
            >
                {"</"}
            </span>

            {/* line track */}
            <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 h-px"
                    style={{ background: "#7af298" }}
                    initial={{ width: "0%" }}
                    animate={inView ? { width: "100%" } : { width: "0%" }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            {/* right bracket */}
            <span
                className="font-mono font-bold shrink-0 text-sm"
                style={{ color: "#7af298" }}
            >
                {">"}
            </span>
        </div>
    );
}

// ─── Tag pill ─────────────────────────────────────────────────────────────────

function Tag({ label }: { label: string }) {
    return (
        <span
            className="border border-white/20 text-white/70 rounded-full px-4 py-1 text-xs font-medium"
            style={{ fontFamily: "var(--font-space)" }}
        >
            {label}
        </span>
    );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4"
        >
            {/* Image */}
            <a
                href={project.link ?? "#"}
                className="block w-full overflow-hidden group"
                style={{ borderRadius: 4 }}
            >
                <div
                    className="w-full bg-white/5 overflow-hidden"
                    style={{ aspectRatio: "16/10" }}
                > <div className="w-full overflow-hidden flex items-center justify-center"
                    style={{
                        aspectRatio: "16/10",
                        background: "#1a1a1a",   /* bg shows through when image scales down */
                        borderRadius: 4,
                    }}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                            draggable={false}
                        />
                    </div>

                </div>
            </a>

            {/* Title */}
            <h3
                className="text-white font-bold"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontFamily: "var(--font-space)" }}
            >
                {project.title}
            </h3>

            {/* Description */}
            <p
                className="text-white/60 leading-relaxed"
                style={{ fontSize: 15, fontFamily: "var(--font-space)" }}
            >
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                ))}
            </div>
        </motion.div>
    );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Projects() {
    const labelRef = useRef(null);
    const titleRef = useRef(null);

    const labelInView = useInView(labelRef, { once: true });
    const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

    return (
        <section className="w-full bg-black text-white">
            
            <div className="max-w-[1300px] mx-auto px-5 py-20 lg:py-28">

                {/* ── Top row: label left, title right ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                    {/* Label */}
                    <motion.p
                        ref={labelRef}
                        className="font-semibold shrink-0"
                        style={{ fontSize: 16, color: "#7af298", fontFamily: "var(--font-space)" }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={labelInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                    >
            // Explore Work
                    </motion.p>

                    {/* Big heading */}
                    <motion.h2
                        ref={titleRef}
                        className="text-white font-bold text-left md:text-right"
                        style={{
                            fontSize: "clamp(32px, 4vw, 48px)",
                            lineHeight: 1.1,
                            fontFamily: "var(--font-space)",
                            maxWidth: 640,
                        }}
                        initial={{ opacity: 0, y: 24 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        A Showcase of My<br />Latest Projects
                    </motion.h2>
                </div>

                {/* ── Animated divider ── */}
                <AnimatedLine />

                {/* ── Projects grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mt-4">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
                
            </div>
           <div className="w-full flex justify-center pb-10">
             <a
                    href="#"
                    className="group relative overflow-hidden cursor-pointer py-1 w-fit flex items-center gap-2"
                    style={{ fontFamily: "var(--font-space)", fontSize: 16, textDecoration: "none" }}
                >
                    {/* Default state */}
                    <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full flex items-center gap-2">

                        <span className="text-white font-semibold">My Resume</span>
                        <ArrowUpRight size={16} className="text-white" />
                    </div>
                    {/* Hover state — slides up from below */}
                    <div className="absolute left-0 top-full transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap flex items-center gap-2">

                        <span style={{ color: "#b7fecb" }} className="font-semibold">More Project</span>
                        <ArrowRight size={16} style={{ color: "#b7fecb" }} />
                    </div>
                </a>
           </div>
        </section>
    );
}