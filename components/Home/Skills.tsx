// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import { ArrowBigDown, ArrowRight, ArrowUpRight } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const skills = [
//     {
//         title: "Frontend",
//         tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Typescript", "Next"],
//     },
//     {
//         title: "Backend development",
//         tags: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
//     },
//     {
//         title: "Tools",
//         tags: ["Git", "Github", "AWS Basics", "Linux"],
//     },
// ];

// const stats = [
//     { number: 6, label: "Years in Experience" },
//     { number: 16, label: "Clients Worldwide" },
//     { number: 97, label: "Completed Projects" },
// ];

// // ─── Variants ─────────────────────────────────────────────────────────────────

// const fadeUp = {
//     hidden: { opacity: 0, y: 24 },
//     show: { opacity: 1, y: 0 },
// };

// const staggerContainer = (delay = 0) => ({
//     hidden: {},
//     show: {
//         transition: { staggerChildren: 0.11, delayChildren: delay },
//     },
// });

// // ─── AnimatedNumber ───────────────────────────────────────────────────────────

// function AnimatedNumber({ target }: { target: number, className?: string; }) {
//     const ref = useRef<HTMLSpanElement>(null);
//     const spanRef = useRef<HTMLSpanElement>(null);
//     const inView = useInView(ref, { once: true, margin: "-80px" });

//     return (
//         <span ref={ref} className="block text-5xl md:text-6xl font-extrabold text-white leading-none tracking-tight mb-2">
//             <motion.span
//                 aria-hidden
//                 initial={{ innerText: 0 } as never}
//                 animate={inView ? { innerText: target } as never : {}}
//                 transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
//                 onUpdate={(latest: Record<string, number>) => {
//                     if (spanRef.current) {
//                         spanRef.current.textContent = `${Math.floor(latest.innerText ?? 0)}+`;
//                     }
//                 }}
//             />
//             <span ref={spanRef}>0+</span>
//         </span>
//     );
// }

// // ─── SkillRow ─────────────────────────────────────────────────────────────────

// function SkillRow({ title, tags, index }: { title: string; tags: string[]; index: number }) {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-60px" });

//     return (
//         <motion.div
//             ref={ref}
//             className="border-b border-white/[0.08] py-5 font-sans text-[14px] leading-[20px] font-normal text-white"
//             variants={fadeUp}
//             initial="hidden"
//             animate={inView ? "show" : "hidden"}
//             transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
//         >
//             {/* Header */}
//             <div className="flex items-center justify-between mb-3">
//                 <span className="text-white font-sans text-[16px] leading-6.5 font-semibold tracking-tight">
//                     {title}
//                 </span>

//             </div>

//             {/* Tags */}
//             <motion.div
//                 className="flex flex-wrap gap-x-4 gap-y-2"
//                 variants={staggerContainer(0.08)}
//                 initial="hidden"
//                 animate={inView ? "show" : "hidden"}
//             >
//                 {tags.map((tag) => (
//                     <motion.span
//                         key={tag}
//                         className="font-sans text-[14px] leading-[20px] font-normal text-white"
//                         variants={fadeUp}
//                         transition={{ duration: 0.3 }}
//                         whileHover={{ color: "#4afe8a", y: -1 }}
//                     >
//                         {tag}
//                     </motion.span>
//                 ))}
//             </motion.div>
//         </motion.div>
//     );
// }

// // ─── Main ─────────────────────────────────────────────────────────────────────

// export default function Skills() {
//     const labelRef = useRef(null);
//     const bioRef = useRef(null);
//     const statsRef = useRef(null);

//     const labelInView = useInView(labelRef, { once: true });
//     const bioInView = useInView(bioRef, { once: true, margin: "-60px" });
//     const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

//     return (
//         <section className="w-full  text-white">
//             <div className="max-w-[1400px] mx-auto px-5   py-20 lg:py-28">

//                 {/* ── Label ── */}
//                 <motion.p
//                     ref={labelRef}
//                     className="text-[16px] font-sans  leading-[26px] font-normal text-[rgb(122,242,152)] mb-8 sm:mb-10"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={labelInView ? { opacity: 1, y: 0 } : {}}
//                     transition={{ duration: 0.45, ease: "easeOut" }}
//                 >
//           // Skills
//                 </motion.p>

//                 {/* ── Two-column grid ── */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

//                     {/* Left — skill rows */}
//                     <div>
//                         {skills.map((s, i) => (
//                             <SkillRow key={s.title} index={i} {...s} />
//                         ))}
//                     </div>

//                     {/* Right — bio + button */}
//                     <motion.div
//                         ref={bioRef}
//                         className="flex flex-col gap-7 md:pt-2"
//                         initial={{ opacity: 0, y: 28 }}
//                         animate={bioInView ? { opacity: 1, y: 0 } : {}}
//                         transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//                     >
//                         <p className="text-white font-sans text-[16px] leading-6.5 font-normal">
//                             I thrive on solving real-world problems, turning ideas into clean,
//                             maintainable code, and learning through experimentation. You&apos;ll find
//                             me building side projects, diving into new tech stacks, or simply
//                             exploring what&apos;s next in the world of web development.
//                         </p>

//                         <motion.a className="group relative overflow-hidden px-4 w-fit h-fit  cursor-pointer py-1">
//                             <div className="transition-transform text-[rgb(122,242,152)] duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full font-sans text-[16px] leading-6.5 flex gap-x-2 font-normal">
//                                 My resume <ArrowUpRight />
//                             </div>
//                             <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] flex gap-x-2 group-hover:translate-y-[-100%] px-4 whitespace-nowrap">

//                                 <span className="text-[#b7fecb] text-white font-sans text-[16px] leading-6.5 font-normal"> My resume</span> <ArrowRight />
//                             </div>
//                         </motion.a>
//                     </motion.div>
//                 </div>

//                 {/* ── Stats bar ── */}
//                 <motion.div
//                     ref={statsRef}
//                     className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-white/[0.08]"
//                     variants={staggerContainer(0.05)}
//                     initial="hidden"
//                     animate={statsInView ? "show" : "hidden"}
//                 >
//                     {stats.map((s, i) => (
//                         <motion.div
//                             key={s.label}
//                             className={`
//       flex flex-col items-center sm:items-start
//       py-8 px-4 sm:px-6
//       border-b border-white/10
//       ${i !== stats.length - 1 ? "sm:border-r sm:border-white/10" : ""}
//     `}
//                             variants={fadeUp}
//                             transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
//                         >
//                             <AnimatedNumber
//                                 className="font-space font-bold text-[clamp(28px,6vw,48px)] leading-tight text-white"
//                                 target={s.number}
//                             />

//                             <span className="mt-2 font-normal font-sans text-[#4afe8a] text-xs tracking-widest uppercase">
//                                 {s.label}
//                             </span>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//             </div>
//         </section>
//     );
// }

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const skills = [
  {
    title: "Frontend",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Typescript", "Next"],
  },
  {
    title: "Backend development",
    tags: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "Tools",
    tags: ["Git", "Github", "AWS Basics", "Linux"],
  },
];

const stats = [
  { number: 6,  label: "Years in Experience" },
  { number: 16, label: "Clients Worldwide" },
  { number: 97, label: "Completed Projects" },
];

// ─── Variants ─────────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0  },
};

const staggerContainer = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: delay } },
});

// ─── AnimatedNumber ───────────────────────────────────────────────────────────

function AnimatedNumber({ target }: { target: number }) {
  const ref     = useRef<HTMLSpanElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView  = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span
      ref={ref}
      className="block font-bold text-white leading-none tracking-tight mb-2"
      style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
    >
      <motion.span
        aria-hidden
        initial={{ innerText: 0 } as never}
        animate={inView ? ({ innerText: target } as never) : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        onUpdate={(latest: Record<string, number>) => {
          if (spanRef.current) {
            spanRef.current.textContent = `${Math.floor(latest.innerText ?? 0)}+`;
          }
        }}
      />
      <span ref={spanRef}>0+</span>
    </span>
  );
}

// ─── SkillRow ─────────────────────────────────────────────────────────────────

function SkillRow({ title, tags, index }: { title: string; tags: string[]; index: number }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="border-b border-white/[0.08] py-5"
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Header row: title left, </> right */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-white font-semibold"
          style={{ fontSize: 16, fontFamily: "var(--font-space)" }}
        >
          {title}
        </span>
        <span
          className="text-white/40 font-mono text-sm select-none"
        >
          {"</>"}
        </span>
      </div>

      {/* Tags */}
      <motion.div
        className="flex flex-wrap gap-x-4 gap-y-2"
        variants={staggerContainer(0.08)}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            className="text-white/70 font-normal"
            style={{ fontSize: 14, fontFamily: "var(--font-space)" }}
            variants={fadeUp}
            transition={{ duration: 0.3 }}
            whileHover={{ color: "#4afe8a", y: -1 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function Skills() {
  const labelRef = useRef(null);
  const bioRef   = useRef(null);
  const statsRef = useRef(null);

  const labelInView = useInView(labelRef, { once: true });
  const bioInView   = useInView(bioRef,   { once: true, margin: "-60px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-5 py-20 lg:py-28">

        {/* ── Label ── */}
        <motion.p
          ref={labelRef}
          className="mb-8 sm:mb-10 font-semibold"
          style={{ fontSize: 16, color: "#7af298", fontFamily: "var(--font-space)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={labelInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          // Skills
        </motion.p>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — skill rows */}
          <div>
            {skills.map((s, i) => (
              <SkillRow key={s.title} index={i} {...s} />
            ))}
          </div>

          {/* Right — bio + pill button */}
          <motion.div
            ref={bioRef}
            className="flex flex-col gap-8 md:pt-2"
            initial={{ opacity: 0, y: 28 }}
            animate={bioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              className="text-white leading-relaxed"
              style={{ fontSize: 16, fontFamily: "var(--font-space)" }}
            >
              I thrive on solving real-world problems, turning ideas into clean,
              maintainable code, and learning through experimentation. You&apos;ll find
              me building side projects, diving into new tech stacks, or simply
              exploring what&apos;s next in the world of web development.
            </p>

            {/* Slide-up text animation button */}
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
                
                <span style={{ color: "#b7fecb" }} className="font-semibold">My Resume</span>
                <ArrowRight size={16} style={{ color: "#b7fecb" }} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* ── Stats bar ── */}
        <motion.div
          ref={statsRef}
          className="mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-3 border-t border-white/[0.08]"
          variants={staggerContainer(0.05)}
          initial="hidden"
          animate={statsInView ? "show" : "hidden"}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className={[
                "flex flex-col items-center sm:items-start py-8 px-4 sm:px-6",
                "border-b border-white/10",
                i !== stats.length - 1 ? "sm:border-r sm:border-white/10" : "",
              ].join(" ")}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatedNumber target={s.number} />
              <span
                className="mt-1 font-normal uppercase tracking-widest"
                style={{ fontSize: 12, color: "#4afe8a", fontFamily: "var(--font-space)" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}