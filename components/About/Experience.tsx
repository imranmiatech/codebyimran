// "use client";

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const experiences = [
//   { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Sr. Full Stack Developer" },
//   { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Jr. Full Stack Developer" },
//   { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Full Stack Developer" },
//   { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Frontend Developer" },
//   { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Intern Frontend Developer" },
// ];

// // ─── Variants ─────────────────────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   show:   { opacity: 1, y: 0  },
// };

// const staggerContainer = (delay = 0) => ({
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
// });

// // ─── ExperienceRow ────────────────────────────────────────────────────────────

// function ExperienceRow({
//   company,
//   period,
//   role,
//   index,
//   isLast,
// }: {
//   company: string;
//   period: string;
//   role: string;
//   index: number;
//   isLast: boolean;
// }) {
//   const ref    = useRef(null);
//   const inView = useInView(ref, { once: true, margin: "-60px" });

//   return (
//     <motion.div
//       ref={ref}
//       variants={fadeUp}
//       initial="hidden"
//       animate={inView ? "show" : "hidden"}
//       transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <div className="flex items-start justify-between py-6">
//         {/* Left: company + period */}
//         <div>
//           <p
//             className="font-bold text-white"
//             style={{ fontSize: 16, fontFamily: "var(--font-space)" }}
//           >
//             {company}
//           </p>
//           <p
//             className="font-mono mt-1"
//             style={{ fontSize: 13, color: "#4afe8a" }}
//           >
//             {period}
//           </p>
//         </div>

//         {/* Right: role */}
//         <p
//           className="font-light text-right"
//           style={{
//             fontSize: 15,
//             color: "#a0a0a0",
//             fontFamily: "var(--font-space)",
//             minWidth: 200,
//           }}
//         >
//           {role}
//         </p>
//       </div>

//       {!isLast && <div className="border-b border-white/[0.08]" />}
//     </motion.div>
//   );
// }


// function AnimatedLine() {
//     const ref = useRef(null);
//     const inView = useInView(ref, { once: true, margin: "-60px" });

//     return (
//         <div
//             ref={ref}
//             className="relative w-full flex items-center gap-2 my-8"
//             style={{ color: "#7af298" }}
//         >
//             {/* left bracket */}
//             <span
//                 className="font-mono font-bold shrink-0 text-sm"
//                 style={{ color: "#7af298" }}
//             >
//                 {"</"}
//             </span>

//             {/* line track */}
//             <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
//                 <motion.div
//                     className="absolute top-0 left-0 h-px"
//                     style={{ background: "#7af298" }}
//                     initial={{ width: "0%" }}
//                     animate={inView ? { width: "100%" } : { width: "0%" }}
//                     transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
//                 />
//             </div>

//             {/* right bracket */}
//             <span
//                 className="font-mono font-bold shrink-0 text-sm"
//                 style={{ color: "#7af298" }}
//             >
//                 {">"}
//             </span>
//         </div>
//     );
// }
// // ─── Main ─────────────────────────────────────────────────────────────────────

// export default function Experience() {
//   const labelRef   = useRef(null);
//   const headingRef = useRef(null);
//   const imageRef   = useRef(null);
//   const listRef    = useRef(null);

//   const labelInView   = useInView(labelRef,   { once: true });
//   const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
//   const imageInView   = useInView(imageRef,   { once: true, margin: "-60px" });
//   const listInView    = useInView(listRef,    { once: true, margin: "-60px" });

//   return (
//     <section className="w-full bg-[#181a18] text-white">
//       <div className="max-w-[1400px] mx-auto px-5 py-20 lg:py-28">

//         {/* ── Top row: label left, heading right ── */}
//         <div className="flex items-start justify-between mb-8">
//           <motion.p
//             ref={labelRef}
//             className="font-semibold"
//             style={{ fontSize: 16, color: "#4afe8a", fontFamily: "var(--font-space)" }}
//             initial={{ opacity: 0, y: 10 }}
//             animate={labelInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.45, ease: "easeOut" }}
//           >
//             // Experience
//           </motion.p>

//           <motion.h2
//             ref={headingRef}
//             className="text-white text-left font-bold md:text-right"
//             style={{ fontSize: "clamp(28px, 4vw, 48px)", maxWidth: 520 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={headingInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//           >
//             Professional<br />Working Experience
//           </motion.h2>
//         </div>

//         {/* ── Divider: </  ————————  > ── */}
        
//     <AnimatedLine />



//         {/* ── Main content: photo left, list right ── */}
//         <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">

//           {/* Photo */}
//           <motion.div
//             ref={imageRef}
//             className="flex-shrink-0"
//             initial={{ opacity: 0, y: 32 }}
//             animate={imageInView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//           >
//             <div
//               className="rounded-2xl overflow-hidden"
//               style={{ width: 370, height: 480 }}
//             >
//               <img
//                 src="https://picsum.photos/seed/developer2/740/960"
//                 alt="Developer"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   objectPosition: "center top",
//                 }}
//               />
//             </div>
//           </motion.div>

//           {/* Experience list */}
//           <motion.div
//             ref={listRef}
//             className="flex-1"
//             variants={staggerContainer(0.05)}
//             initial="hidden"
//             animate={listInView ? "show" : "hidden"}
//           >
//             {experiences.map((exp, i) => (
//               <ExperienceRow
//                 key={i}
//                 index={i}
//                 isLast={i === experiences.length - 1}
//                 {...exp}
//               />
//             ))}
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Sr. Full Stack Developer" },
  { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Jr. Full Stack Developer" },
  { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Full Stack Developer" },
  { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Frontend Developer" },
  { company: "CodeCraft Inc.", period: "Aug 2021 — Jun 2022", role: "Intern Frontend Developer" },
];

// ─── Variants ─────────────────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const staggerContainer = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: delay } },
});

// ─── ExperienceRow ────────────────────────────────────────────────────────────
function ExperienceRow({
  company,
  period,
  role,
  index,
  isLast,
}: {
  company: string;
  period: string;
  role: string;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between py-6">
        <div>
          <p className="font-sans font-semibold text-white text-[16px] leading-[26px]">{company}</p>
          <p className="font-mono mt-1 text-[13px] text-[#4afe8a]">{period}</p>
        </div>
        <p className="font-sans font-light text-right text-[15px] text-gray-400 min-w-[200px]">{role}</p>
      </div>
      {!isLast && <div className="border-b border-white/10" />}
    </motion.div>
  );
}

// ─── Animated Line ────────────────────────────────────────────────────────────
function AnimatedLine() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="relative w-full flex items-center gap-2 my-8" style={{ color: "#7af298" }}>
      <span className="font-mono font-bold shrink-0 text-sm">{`</`}</span>
      <div className="relative flex-1 h-px bg-white/10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-px"
          style={{ background: "#7af298" }}
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="font-mono font-bold shrink-0 text-sm">{">"}</span>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const listRef = useRef(null);

  const labelInView = useInView(labelRef, { once: true });
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-60px" });

  return (
    <section className="w-full bg-[#181a18] text-white">
      <div className="max-w-[1250px] mx-auto px-5 py-20 lg:py-28">
        {/* Top row */}
        <div className="flex items-start justify-between mb-8">
          <motion.p
            ref={labelRef}
            className="font-sans font-semibold text-[16px] text-[#4afe8a]"
            initial={{ opacity: 0, y: 10 }}
            animate={labelInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            // Experience
          </motion.p>

          <motion.h2
            ref={headingRef}
            className="text-white text-left font-bold md:text-right"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", maxWidth: 520 }}
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Professional<br />Working Experience
          </motion.h2>
        </div>

        <AnimatedLine />

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            ref={imageRef}
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 32 }}
            animate={imageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl overflow-hidden w-[370px] h-[480px]">
              <img
                src="https://picsum.photos/seed/developer2/740/960"
                alt="Developer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

          {/* Experience list */}
          <motion.div
  ref={listRef}
  className="flex-1"
  variants={staggerContainer(0.05)}
  initial="hidden"
  animate={listInView ? "show" : "hidden"}
>
  {experiences.map((exp, index) => (
    <motion.div
      key={index}
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between py-6">
        {/* Left: company + period */}
        <div>
          <p className=" font-semibold text-white text-[16px] leading-[26px]">
            {exp.company}
          </p>
          <p className=" mt-1 text-[13px] text-[#4afe8a]">
            {exp.period}
          </p>
        </div>

        {/* Right: role */}
        <p className=" font-light text-right text-[15px] text-gray-400 min-w-[200px]">
          {exp.role}
        </p>
      </div>

      {/* Divider except for last item */}
      {index !== experiences.length - 1 && (
        <div className="border-b border-white/10" />
      )}
    </motion.div>
  ))}
</motion.div>
        </div>
      </div>
    </section>
  );
}