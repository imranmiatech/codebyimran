"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Blog {
  slug: string;
  image: string;
  tag: string;
  tagColor: string;
  date: string;
  title: string;
}

// ─── Props (pass blogs from CMS/parent) ──────────────────────────────────────

interface BlogsProps {
  blogs: Blog[];
}

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

// ─── Blog Card ────────────────────────────────────────────────────────────────

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/${blog.slug}`}
        className="flex flex-col gap-4 group cursor-pointer"
        style={{ textDecoration: "none" }}
      >
        {/* Image */}
        <div
          className="w-full overflow-hidden"
          style={{ borderRadius: 4, aspectRatio: "4/3" }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Tag + date */}
        <div className="flex items-center gap-3">
          <span
            className="px-3 py-1 rounded-full border text-xs font-semibold"
            style={{
              borderColor: blog.tagColor === "#7af298" ? "#7af298" : "rgba(255,255,255,0.25)",
              color: blog.tagColor,
              fontFamily: "var(--font-space)",
            }}
          >
            {blog.tag}
          </span>
          <span className="text-white/30 text-xs">|</span>
          <span className="text-white/40 text-xs" style={{ fontFamily: "var(--font-space)" }}>
            {blog.date}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white font-bold leading-snug group-hover:text-white/80 transition-colors duration-300"
          style={{ fontSize: "clamp(15px, 1.4vw, 20px)", fontFamily: "var(--font-space)" }}
        >
          {blog.title}
        </h3>
      </Link>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Blogs({ blogs }: BlogsProps) {
  const labelRef = useRef(null);
  const titleRef = useRef(null);
  const btnRef   = useRef(null);

  const labelInView = useInView(labelRef, { once: true });
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const btnInView   = useInView(btnRef,   { once: true, margin: "-40px" });

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
            // Blogs
          </motion.p>

          <motion.h2
            ref={titleRef}
            className="text-white font-bold md:text-right"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.15,
              fontFamily: "var(--font-space)",
              maxWidth: 520,
            }}
            initial={{ opacity: 0, y: 24 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            Developer Insights<br />& Ideas
          </motion.h2>
        </div>

        {/* ── Animated divider ── */}
        <AnimatedLine />

        {/* ── Blog grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs?.map((blog, i) => (
            <BlogCard key={blog.slug} blog={blog} index={i} />
          ))}
        </div>

        {/* ── View More button ── */}
        <motion.div
          ref={btnRef}
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={btnInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          
             <a
                    href="#"
                    className="group relative overflow-hidden cursor-pointer py-1 w-fit flex items-center gap-2"
                    style={{ fontFamily: "var(--font-space)", fontSize: 16, textDecoration: "none" }}
                >
                    {/* Default state */}
                    <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full flex items-center gap-2">

                        <span className="text-white font-semibold">More Blogs</span>
                        <ArrowUpRight size={16} className="text-white" />
                    </div>
                    {/* Hover state — slides up from below */}
                    <div className="absolute left-0 top-full transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap flex items-center gap-2">

                        <span style={{ color: "#b7fecb" }} className="font-semibold">More Blogs</span>
                        <ArrowRight size={16} style={{ color: "#b7fecb" }} />
                    </div>
                </a>
          </motion.div>
    

      </div>
    </section>
  );
}