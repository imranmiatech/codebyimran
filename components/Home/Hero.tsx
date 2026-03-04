"use client";

const Hero = () => {
  return (
    <div className="relative w-full lg:min-h-screen bg-black overflow-hidden flex pt-40 pb-10 justify-center">

      {/* ── Tablet+ image: absolute, centered horizontally, sits between name and bottom row ── */}
      <div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        style={{
          top: "clamp(180px, 28vw, 320px)",
          width: "clamp(260px, 36vw, 520px)",
        }}
      >
        {/* Glow lives here — always behind this image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 100% 70% at 50% 40%, rgba(50,200,80,0.30) 0%, rgba(30,140,60,0.15) 45%, transparent 70%)",
            transform: "scale(1.8)",
            zIndex: -1,
          }}
        />
        <img
          src="/imrans.png"
          alt="MD Imran"
          className="w-full block object-cover object-top relative z-10"
          style={{
            maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
        />
      </div>

      {/* ── ORIGINAL content wrapper ── */}
      <div className="relative w-full flex flex-col max-w-407 z-40 px-5">

        {/* Name block */}
        <div className="flex flex-col">
          <h6 className="text-[clamp(18px,3vw,24px)] font-[var(--font-space)] leading-[1.4] text-white font-bold text-left">
            Hey, 👋 I'm a Full Stack Developer
          </h6>
          <h1 className="text-[clamp(70px,10vw,168px)] font-[var(--font-space)] leading-[100%] text-[#7af298] font-bold text-left">
            MD IMRAN
          </h1>
        </div>

        {/* ── Mobile only: image + scroll side by side ── */}
        <div className="flex md:hidden w-full mt-6 items-end">
          {/* Image takes most of the width */}
          <div className="flex-1 pointer-events-none relative">
            {/* Glow behind mobile image */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 100% 70% at 50% 40%, rgba(50,200,80,0.40) 0%, rgba(30,140,60,0.20) 45%, transparent 70%)",
                transform: "scale(2)",
                zIndex: 0,
              }}
            />
            <img
              src="/imrans.png"
              alt="MD Imran"
              className="w-full block object-cover object-top relative z-10"
              style={{
                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              }}
            />
          </div>
          {/* Scroll indicator — right side of image */}
          <div className="flex flex-col items-center pb-4 pl-2 gap-y-2 shrink-0">
            <div className="relative w-px h-20 bg-[#7af298] overflow-hidden">
              <div className="absolute top-0 left-0 w-px h-5 bg-white animate-lineMove"></div>
            </div>
            <span className="uppercase font-[var(--font-space)] text-[12px] font-semibold text-white tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
              Scroll
            </span>
          </div>
        </div>

        {/* ── Desktop scroll indicator (hidden on mobile) ── */}
        <div className="hidden md:flex w-full right-0 flex-col pt-5 md:pt-12 lg:pt-20 items-end gap-y-4">
          <div className="w-fit flex flex-col items-center">
            <div className="relative w-px h-20 bg-[#7af298] overflow-hidden">
              <div className="absolute top-0 left-0 w-px h-5 bg-[#ffff] animate-lineMove"></div>
            </div>
            <span className="uppercase font-[var(--font-space)] text-[16px] font-semibold text-white tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
              Scroll
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col md:flex-row pt-5 md:pt-12 lg:pt-20 items-end justify-between">
          <div className="flex flex-col gap-y-2 w-full md:w-fit items-start pt-5 md:pt-0 order-2 md:order-1 text-white">
            <a
              href="mailto:imranmiatech@gmail.com"
              className="font-[var(--font-space)] font-semibold text-left hover:underline transition-colors duration-300"
            >
              Email: imranmiatech@gmail.com
            </a>
            <a
              href="tel:+8801943747529"
              className="font-[var(--font-space)] font-semibold text-left hover:underline transition-colors duration-300"
            >
              +880 1943747529
            </a>
          </div>
          <div className="flex flex-col gap-y-5 order-1 md:order-2 md:gap-y-14 lg:gap-y-20">
            <p className="text-[16px] font-[var(--font-space)] font-normal leading-[26px] text-white w-full md:max-w-[350px]">
              I craft fast, scalable, and user-friendly web applications with modern JavaScript frameworks — combining React on the frontend with robust server-side solutions using Node.js.
            </p>

            <ul className="grid grid-cols-2 md:grid-cols-4 justify-between items-start text-[16px] font-[var(--font-space)] font-normal leading-[26px] text-white w-full md:max-w-[350px]">
              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> Twitter (x)
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">Twitter (x)</span>
                </div>
              </li>

              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> LinkedIn
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">LinkedIn</span>
                </div>
              </li>

              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> Github
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">Github</span>
                </div>
              </li>

              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> Facebook
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">Facebook</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;