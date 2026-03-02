"use client";

import { ChevronsLeftRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { TypingText } from "../lightswind/typing-text";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Project", href: "#project" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<Record<number, boolean>>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed top-0 w-full max-w-407 px-5 py-10 flex justify-between items-start z-50">
      {/* Logo */}
      <div className="h-full items-start">
        <h4 className="text-lg text-white cursor-pointer">IMRAN.DEV</h4>
      </div>

      {/* Menu */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`bg-white text-slate-800 font-semibold text-[16px] leading-[1.4] 
            flex flex-col items-start px-5 py-3 transition-colors duration-300
            ${open ? "rounded-xl" : "rounded-4xl hover:bg-[#7af298]"} 
            cursor-pointer w-44`}
        >
          {/* Top row */}
          <div className="flex justify-between items-center w-full">
            <p>Menu</p>

            {/* Icon change */}
            {open ? (
              <div className="flex flex-col items-center">
                <ChevronsDown />
              </div>
            ) : (
              <ChevronsLeftRight />
            )}
          </div>

          {/* Dropdown */}
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="flex flex-col font-semibold text-[16px] leading-[1.4]">
              {navLinks.map((link, i) => (
                <li
                  key={link.name}
                  onMouseEnter={() => {
                    setHoveredIndex(i);
                    if (!animatedItems[i]) {
                      setAnimatedItems((prev) => ({ ...prev, [i]: true }));
                    }
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => {
                    setHoveredIndex(i);
                    if (!animatedItems[i]) {
                      setAnimatedItems((prev) => ({ ...prev, [i]: true }));
                    }
                  }}
                  onTouchEnd={() => setHoveredIndex(null)}
                >
                  <Link
                    href={link.href}
                    className="block py-2 text-slate-800 items-start text-left transition-colors duration-200"
                  >
                    <TypingText
                      delay={0}
                      duration={0.5}
                      fontSize="text-[16px]"
                      fontWeight="font-semibold"
                      letterSpacing="tracking-wide"
                      align="left"
                      color="text-slate-800"
                      animate={animatedItems[i] && hoveredIndex === i} // ✅ animate only once
                    >
                      {link.name}
                    </TypingText>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;