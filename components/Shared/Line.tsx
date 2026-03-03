"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Line() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="w-full flex items-center px-5 max-w-[1400px] mx-auto">

      {/* Left bracket */}
      <motion.span
        className="font-mono text-[rgb(122,242,152)] text-[13px] leading-none select-none flex-shrink-0"
        initial={{ opacity: 0, x: -10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        &lt;/
      </motion.span>

      {/* Line */}
      <div className="flex-1 mx-2 h-px overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[rgb(122,242,152)]/60 via-white/10 to-[rgb(122,242,152)]/40"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Right bracket */}
      <motion.span
        className="font-mono text-[rgb(122,242,152)] text-[13px] leading-none select-none flex-shrink-0"
        initial={{ opacity: 0, x: 10 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
      >
        &gt;
      </motion.span>

    </div>
  );
}