"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "Imran immediately understood our product goals and translated them into a beautifully optimized web experience. His technical expertise and collaborative spirit made a complex project feel effortless.",
    name: "Carlos Méndez",
    role: "Co-Founder of LaunchI",
  },
  {
    quote:
      "Working with Imran was a game changer. He delivered a fast, scalable full-stack app on time with clean code and great communication throughout the entire process.",
    name: "Sarah Johnson",
    role: "CEO of TechFlow",
  },
  {
    quote:
      "Imran's attention to detail and deep understanding of both frontend and backend made our platform feel polished and professional. Highly recommended.",
    name: "Ahmed Al-Rashid",
    role: "Product Manager at DevSync",
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

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Testimonials() {
  const [index, setIndex]   = useState(0);
  const [direction, setDir] = useState(1);

  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const labelInView = useInView(labelRef, { once: true });
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  const go = (dir: 1 | -1) => {
    setDir(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter:  (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit:   (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section className="w-full  text-white">
      <div className="max-w-[1250px] mx-auto px-5 py-20 lg:py-28">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <motion.p
            ref={labelRef}
            className="font-semibold shrink-0"
            style={{ fontSize: 16, color: "#7af298", fontFamily: "var(--font-space)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            // Testimonials
          </motion.p>

          <motion.h2
            ref={titleRef}
            className="text-white font-bold md:text-right"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.15,
              fontFamily: "var(--font-space)",
              maxWidth: 500,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            What Clients Say<br />About Me
          </motion.h2>
        </div>

        {/* ── Animated divider ── */}
        <AnimatedLine />

        {/* ── Testimonial content ── */}
        <div className="mt-8 md:mt-14 min-h-[260px] relative">

          {/* Big quote mark */}
          <div
            className="absolute top-0 left-0 leading-none select-none pointer-events-none"
            style={{
              fontSize: "clamp(80px, 10vw, 140px)",
              color: "#7af298",
              opacity: 0.18,
              fontFamily: "var(--font-space)",
              lineHeight: 1,
            }}
          >
            "
          </div>

          {/* Quote + author */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pt-14"
            >
              {/* Quote text */}
              <blockquote
                className="text-white font-bold leading-snug max-w-3xl"
                style={{
                  fontSize: "clamp(18px, 2.5vw, 30px)",
                  fontFamily: "var(--font-space)",
                }}
              >
                {testimonials[index].quote}
              </blockquote>

              {/* Author — no image */}
              <div className="shrink-0 flex flex-col gap-1 md:text-right">
                <span
                  className="text-white font-bold"
                  style={{ fontSize: "clamp(14px, 1.2vw, 17px)", fontFamily: "var(--font-space)" }}
                >
                  {testimonials[index].name}
                </span>
                <span
                  className="text-white/40"
                  style={{ fontSize: "clamp(12px, 1vw, 14px)", fontFamily: "var(--font-space)" }}
                >
                  {testimonials[index].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Prev / Next buttons ── */}
        <div className="flex gap-3 mt-10">
          {(["prev", "next"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => go(dir === "prev" ? -1 : 1)}
              className="w-12 h-12 flex items-center justify-center font-bold transition-colors duration-200"
              style={{
                background: "#7af298",
                color: "#000",
                border: "none",
                cursor: "pointer",
                fontSize: 20,
                borderRadius: 2,
              }}
              aria-label={dir}
            >
              {dir === "prev" ? "‹" : "›"}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}