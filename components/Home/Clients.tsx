"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const clients = [
  { name: "Boltshift",  icon: "⚡" },
  { name: "Nietzsche",  icon: "✳" },
  { name: "Capsule",    icon: "◎" },
  { name: "Catalog",    icon: "Ↄ" },
 
];

// ─── Animated divider line ────────────────────────────────────────────────────

function AnimatedLine() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative w-full flex  items-center gap-2 my-8 md:my-10">
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

export default function Clients() {
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const gridRef  = useRef(null);

  const labelInView = useInView(labelRef, { once: true });
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const gridInView  = useInView(gridRef,  { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-[#191818]  text-white">
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
            // My Client
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
            Worked With<br />Amazing Clients
          </motion.h2>
        </div>

        {/* ── Animated divider ── */}
        <AnimatedLine />

        {/* ── Client grid ── */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              className="flex items-center gap-3 px-6 py-7 group cursor-default"
              style={{
                borderRight:  (i + 1) % 4 === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                borderBottom: i < 4             ? "1px solid rgba(255,255,255,0.08)" : "none",
                /* mobile: 2 cols — adjust borders */
                ...(typeof window !== "undefined" ? {} : {}),
              }}
              initial={{ opacity: 0 }}
              animate={gridInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              {/* Icon placeholder — replace with actual <img> or SVG */}
              <span
                className="text-white/40 shrink-0 font-bold"
                style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
              >
                {client.icon}
              </span>
              <span
                className="text-white/60 font-semibold group-hover:text-white/90 transition-colors duration-300"
                style={{ fontSize: "clamp(14px, 1.3vw, 18px)", fontFamily: "var(--font-space)" }}
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}