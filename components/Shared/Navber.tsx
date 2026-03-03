"use client";

import { ChevronsLeftRight, ChevronsDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

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
            {open ? <ChevronsDown size={20} /> : <ChevronsLeftRight size={20} />}
          </div>

          {/* Dropdown */}
          <div
            className={`w-full overflow-hidden transition-all duration-300 ${
              open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col font-semibold text-[16px] leading-[1.4] gap-y-3">
              {menuItems.map((item) => (
                <div key={item.label} className="group relative overflow-hidden py-1">
                  {/* Original text that slides up */}
                  <div className="transition-transform duration-300 text-left ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:-translate-y-full">
                  {item.label}
                  </div>
                  
                  {/* Link that slides in from bottom */}
                  <Link
                    href={item.href}
                    className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap"
                  >
                    
                    <span className="text-slate-800">{item.label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;