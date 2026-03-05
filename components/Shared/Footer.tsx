"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const quickLinks = ["HOME", "ABOUT", "WORKS", "BLOGS", "CONTACT"];
const portfolio = ["CONTRA", "GITHUB", "CODEPEN"];
const social = ["INSTAGRAM", "LINKEDIN", "TWITTER \"X\""];

// ─── Animated divider ─────────────────────────────────────────────────────────

function AnimatedLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative w-full flex items-center gap-2 my-0">
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

export default function Footer() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  /* Track mouse inside the CTA hero area */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <footer className="w-full bg-black text-white overflow-hidden">

      {/* ── CTA hero ── */}
      <div
        ref={heroRef}
        className="relative w-full flex items-center justify-center overflow-hidden cursor-none"
        style={{ minHeight: "45vh", paddingTop: "6vh", paddingBottom: "6vh" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {/* Green radial glow — always centered */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 55%, rgba(40,180,80,0.28) 0%, rgba(20,100,50,0.12) 50%, transparent 75%)",
          }}
        />

        {/* Cursor-following "Start Project" ball */}
        <motion.div
          className="absolute pointer-events-none flex items-center justify-center rounded-full z-20"
          style={{
            width: 130,
            height: 130,
            background: "#7af298",
            top: 0,
            left: 0,
            x: pos.x - 65,
            y: pos.y - 65,
          }}
          animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
          transition={{ type: "spring", stiffness: 180, damping: 22, opacity: { duration: 0.2 } }}
        >
          <span
            className="text-black font-bold text-center leading-tight"
            style={{ fontSize: 14, fontFamily: "var(--font-space)", pointerEvents: "none" }}
          >
            Start<br />Project
          </span>
        </motion.div>

        {/* Big CTA text */}
        <div className="relative z-10 text-center px-5 select-none">
          <h2
            className="font-black uppercase leading-none text-white"
            style={{
              fontSize: "clamp(42px, 9vw, 130px)",
              fontFamily: "var(--font-space)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            READY TO TAKE YOUR<br />
            IDEA TO{" "}
            {/* Spacer where the ball hovers */}
            <span style={{ display: "inline-block", width: "clamp(100px, 12vw, 160px)" }} /><br />
            THE NEXT LEVEL?
          </h2>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="max-w-[1400px] mx-auto px-5 pb-6">
        <AnimatedLine />
      </div>

      {/* ── Footer links ── */}
      <div className="max-w-[1400px] mx-auto px-5 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 items-start justify-items-stretch gap-10">

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <span
              className="font-semibold mb-1"
              style={{ color: "#7af298", fontSize: 14, fontFamily: "var(--font-space)" }}
            >
              Quick links
            </span>
            {quickLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="group relative overflow-hidden w-fit flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-white font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full block"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
                <span
                  className="absolute top-full left-0 text-[#b7fecb] font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
              </Link>
            ))}
          </div>

          {/* Portfolio */}
          <div className="flex flex-col gap-4">
            <span
              className="font-semibold mb-1"
              style={{ color: "#7af298", fontSize: 14, fontFamily: "var(--font-space)" }}
            >
              Portfolio
            </span>
            {portfolio.map((link) => (
              <Link
                key={link}
                href="#"
                className="group relative overflow-hidden w-fit flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-white font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full block"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
                <span
                  className="absolute top-full left-0 text-[#b7fecb] font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span
              className="font-semibold mb-1"
              style={{ color: "#7af298", fontSize: 14, fontFamily: "var(--font-space)" }}
            >
              Social Link
            </span>
            {social.map((link) => (
              <Link
                key={link}
                href="#"
                className="group relative overflow-hidden w-fit flex flex-col"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-white font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full block"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
                <span
                  className="absolute top-full left-0 text-[#b7fecb] font-semibold transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full"
                  style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
                >
                  {link}
                </span>
              </Link>
            ))}
          </div>
          <div className=" flex  flex-col items-start gap-2">
             <span
              className="font-semibold mb-1"
              style={{ color: "#7af298", fontSize: 14, fontFamily: "var(--font-space)" }}
            >
              Contact
            </span>
            <a
              href="mailto:imranmiatech@gmail.com"
              className="text-white font-semibold hover:text-[#7af298] transition-colors duration-300"
              style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontFamily: "var(--font-space)" }}
            >
              imranmiatech@gmail.com
            </a>
            <a
              href="tel:+8801943747529"
              className="text-white font-semibold hover:text-[#7af298] transition-colors duration-300"
              style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontFamily: "var(--font-space)" }}
            >
              +880 1943 747 529
            </a>
          </div>
        </div>

        {/* ── Bottom contact ── */}
        {/* <div className="mt-14 hidden md:flex flex-col gap-2">
          <a
            href="mailto:imranmiatech@gmail.com"
            className="text-white font-semibold hover:text-[#7af298] transition-colors duration-300"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontFamily: "var(--font-space)" }}
          >
            imranmiatech@gmail.com
          </a>
          <a
            href="tel:+8801943747529"
            className="text-white font-semibold hover:text-[#7af298] transition-colors duration-300"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontFamily: "var(--font-space)" }}
          >
            +880 1943 747 529
          </a>
        </div> */}
      </div>

    </footer>
  );
}