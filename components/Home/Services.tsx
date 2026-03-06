"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Service {
  number: string;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Custom Web Development",
    description:
      "Build complete web applications from scratch — frontend to backend — optimized for speed, security, and scalability.",
    image: "/imran.jpg",
    link: "#",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, performant UIs built with React and Next.js — responsive, accessible, and smooth.",
    image: "/imrans.png",
    link: "#",
  },
  {
    number: "03",
    title: "Server Logic & API Development",
    description:
      "Robust REST and GraphQL APIs, database design, authentication, and server-side architecture with Node.js.",
    image: "/imran.jpg",
    link: "#",
  },
  {
    number: "04",
    title: "Full Stack Application Development",
    description:
      "End-to-end product development from concept to deployment — covering both client and server sides.",
    image: "/imrans.png",
    link: "#",
  },
];

// ─── Animated divider line ────────────────────────────────────────────────────

function AnimatedLine() {
  const ref    = useRef(null);
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

// ─── Service Row ──────────────────────────────────────────────────────────────

function ServiceRow({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: Service;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/10"
    >
      {/* Row header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
        style={{ background: "none", border: "none" }}
      >
        <span
          className="font-bold text-white transition-colors duration-300 group-hover:text-[#7af298]"
          style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            fontFamily: "var(--font-space)",
          }}
        >
          {service.title}
        </span>
        <span
          className="font-mono text-white/30 shrink-0 ml-4"
          style={{ fontSize: "clamp(12px, 1.2vw, 15px)", fontFamily: "var(--font-space)" }}
        >
          ({service.number})
        </span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pb-6 flex flex-col gap-5">
              <p
                className="text-white/60 leading-relaxed"
                style={{ fontSize: "clamp(13px, 1.3vw, 15px)", fontFamily: "var(--font-space)" }}
              >
                {service.description}
              </p>

              <a
                href={service.link ?? "#"}
                className="group/link relative overflow-hidden w-fit flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="flex items-center gap-1 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover/link:-translate-y-full"
                  style={{ color: "#7af298", fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  Hire Me <ArrowUpRight size={14} />
                </div>
                <div
                  className="absolute top-full left-0 flex items-center gap-1 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover/link:-translate-y-full"
                  style={{ color: "#b7fecb", fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  Hire Me <ArrowUpRight size={14} />
                </div>
                <div className="mt-1 h-px w-full bg-[#7af298]/40" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef   = useRef(null);

  const labelInView = useInView(labelRef, { once: true });
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const imgInView   = useInView(imgRef,   { once: true, margin: "-60px" });

  return (
    <section className="w-full  text-white">
      <div className="max-w-[1250px] mx-auto px-5 py-20 lg:py-28">

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
            // Service
          </motion.p>

          <motion.h2
            ref={titleRef}
            className="text-white font-bold md:text-right"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              fontFamily: "var(--font-space)",
              maxWidth: 680,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            End-to-End Web<br />Development Services
          </motion.h2>
        </div>

        {/* ── Animated divider ── */}
        <AnimatedLine />

        {/* ── Two-column: image left, services right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 md:items-start">

          {/* Left — animated image swap */}
          <motion.div
            ref={imgRef}
            className="w-full overflow-hidden relative md:sticky md:top-[10vh]"
            style={{
              borderRadius: 4,
              height: "clamp(280px, 45vw, 480px)",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={services[openIndex].image}
                src={services[openIndex].image}
                alt={services[openIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center" }}
                draggable={false}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Right — service rows */}
          <div className="flex flex-col">
            {services.map((s, i) => (
              <ServiceRow
                key={s.number}
                service={s}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}