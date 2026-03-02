"use client";

import { motion, Variants } from "framer-motion";
import React, { ElementType, ReactNode, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export interface TypingTextProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  duration?: number;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  letterSpacing?: string;
  align?: "left" | "center" | "right";
  animate?: boolean; // trigger typing animation
}

export const TypingText = ({
  children,
  as: Component = "div",
  className = "",
  delay = 0,
  duration = 0.5,
  fontSize = "text-[16px]",
  fontWeight = "font-bold",
  color = "text-slate-800",
  letterSpacing = "tracking-wide",
  align = "left",
  animate = false,
}: TypingTextProps) => {
  const [textContent, setTextContent] = useState<string>("");

  useEffect(() => {
    const extractText = (node: ReactNode): string => {
      if (typeof node === "string" || typeof node === "number") return node.toString();
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (React.isValidElement<{ children?: ReactNode }>(node)) {
        return node.props.children ? extractText(node.props.children) : "";
      }
      return "";
    };
    setTextContent(extractText(children));
  }, [children]);

  const characters = textContent.split("").map((char) => (char === " " ? "\u00A0" : char));

  const characterVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + i * (duration / characters.length),
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <Component
      className={cn(
        "inline-flex",
        className,
        fontSize,
        fontWeight,
        color,
        letterSpacing,
        align === "center"
          ? "justify-center text-center"
          : align === "right"
          ? "justify-end text-right"
          : "justify-start text-left"
      )}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}-${animate ? "a" : "b"}`} // ✅ force remount on animate change
          className="inline-block"
          variants={characterVariants}
          custom={index}
          initial="hidden"
          animate="visible"
        >
          {char}
        </motion.span>
      ))}
    </Component>
  );
};