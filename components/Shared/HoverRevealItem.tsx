// components/HoverRevealItem.tsx
"use client"; // Required for hover effects and animations

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverRevealItemProps {
  slash?: string;
  text?: string;
  className?: string;
}

export default function HoverRevealItem({
  slash = "/",
  text = "Twitter (x)",
  className = "",
}: HoverRevealItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className={`relative flex items-center gap-2 text-3xl font-medium text-[#eef3fe] w-fit px-4 py-2 rounded-full cursor-default overflow-hidden ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        backgroundColor: "rgba(122, 242, 152, 0.08)",
        transition: { duration: 0.2 },
      }}
    >
      {/* Main content that moves up on hover */}
      <motion.span
        className="text-[#7af298] text-4xl inline-block"
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1.1] }}
      >
        {slash}
      </motion.span>

      <motion.span
        className="inline-block"
        animate={{ y: isHovered ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1.1] }}
      >
        {text}
      </motion.span>

      {/* Bottom sliding text (same content) */}
      <motion.div
        className="absolute left-0 flex items-center gap-2 pointer-events-none"
        style={{ paddingLeft: "1rem" }} // Match li padding
        animate={{ y: isHovered ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: [0.2, 0.9, 0.3, 1.1] }}
      >
        <span className="text-[#7af298] text-4xl opacity-0"> {/* Invisible slash for spacing */}
          {slash}
        </span>
        <span className="text-[#b7fecb] text-3xl font-medium">{text}</span>
      </motion.div>
    </motion.li>
  );
}