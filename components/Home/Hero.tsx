"use client";


const Hero = () => {


  return (
    <div className="w-full  h-fit md:h-fit  bg-black/40 z-20 flex pt-40 pb-10 justify-center overflow-hidden" >

      
      <div className="w-full flex flex-col max-w-407 z-40 px-5">
        <div className="flex flex-col">
          <h6 className="text-[clamp(18px,3vw,24px)] font-[var(--font-space)] leading-[1.4] text-white font-bold text-left">
            Hey, 👋 I'm a Full Stack Developer
          </h6>
          <h1 className="text-[clamp(70px,10vw,168px)] font-[var(--font-space)] leading-[100%] text-[#7af298] font-bold text-left">
            MD IMRAN
          </h1>
        </div>
        <div className="w-full right-0 flex flex-col pt-5 md:pt-12 lg:pt-20 items-end gap-y-4">
          <div className="w-fit flex flex-col items-center">
            {/* Animated Line */}
            <div className="relative w-px h-20 bg-[#7af298] overflow-hidden">
              <div className="absolute top-0 left-0 w-px h-5 bg-[#ffff] animate-lineMove"></div>
            </div>
            {/* Scroll Text */}
            <span className="uppercase font-[var(--font-space)] text-[16px] font-semibold text-white tracking-[0.3em] [writing-mode:vertical-rl] rotate-180">
              Scroll
            </span>
          </div>
        </div>

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

            {/* Social Media List with Hover Effect */}
            <ul className="grid grid-cols-2 md:grid-cols-4 justify-between items-start text-[16px] font-[var(--font-space)] font-normal leading-[26px] text-white w-full md:max-w-[350px]">
              {/* Twitter (x) - with hover effect */}
              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> Twitter (x)
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">Twitter (x)</span>
                </div>
              </li>

              {/* LinkedIn - with hover effect */}
              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> LinkedIn
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">LinkedIn</span>
                </div>
              </li>

              {/* Github - with hover effect */}
              <li className="group relative overflow-hidden cursor-pointer py-1">
                <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                  <span className="text-[#7af298]">/</span> Github
                </div>
                <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                  <span className="text-[#7af298]">/</span>{" "}
                  <span className="text-[#b7fecb]">Github</span>
                </div>
              </li>

              {/* Facebook - with hover effect */}
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