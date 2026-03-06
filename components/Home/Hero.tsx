"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from "framer-motion";
const Hero = () => {
  const container = useRef(null);
  const imageRef = useRef(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const scrollTextRef = useRef<HTMLSpanElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  const appearVariant: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
    }),
  };
  const links = [
    { name: "Whatsapp", href: "https://wa.me/8801943747529" },
    { name: "LinkedIn", href: "https://linkedin.com/in/imranmiatech" },
    { name: "Github", href: "https://github.com/imranmiatech" },
    { name: "Facebook", href: "https://facebook.com/md.imran.428063" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {

      // TEXT ANIMATION
      gsap.from(".blur-text", {
        y: 60,
        opacity: 0,
        filter: "blur(12px)",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.25,
      });

      // IMAGE APPEAR
      gsap.from(imageRef.current, {
        y: 120,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.4
      });

      // PARALLAX SCROLL
      gsap.to(imageRef.current, {
        y: -200,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 90%",
          end: "bottom top",
          scrub: 1
        }
      });

      // -------------------- Scroll Line Animation --------------------
      if (scrollLineRef.current) {
        gsap.fromTo(
          scrollLineRef.current,
          { height: 0 },
          {
            height: "100%",
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: scrollLineRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // -------------------- Scroll Text Animation --------------------
      if (scrollTextRef.current) {
        gsap.from(scrollTextRef.current, {
          opacity: 0,
          y: 10,
          filter: "blur(6px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scrollTextRef.current,
            start: "top 90%",
          },
        });
      }
      //--------------------links-------------




    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative w-full lg:min-h-screen  flex pt-40 pb-10 justify-center">

      {/* ── Tablet+ image: absolute, centered horizontally, sits between name and bottom row ── */}
      <div
        ref={imageRef}

        className="hidden md:block absolute left-1/2   -translate-x-1/2 z-10 pointer-events-none"
        style={{
          top: "clamp(240px, 26vw, 420px)",
          width: "clamp(260px, 36vw, 520px)",
        }}
      >
        {/* Glow lives here — always behind this image */}
        <div
          className="absolute -inset-40 blur-[80px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(80,255,120,0.35), transparent 70%)",
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
        <div ref={container} className="flex flex-col">
          <h6 className="blur-text text-[clamp(18px,3vw,24px)] font-[var(--font-space)] leading-[1.4] text-white font-bold text-left">
            Hey, <span className="wave-hand inline-block">👋</span> I'm a Full Stack Developer
          </h6>

          <h1 className="blur-text text-[clamp(70px,10vw,168px)] font-[var(--font-space)] leading-[100%] text-[#7af298] font-bold text-left">
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
        {/* Scroll indicator */}
        <div className="hidden md:flex w-full right-0 flex-col pt-5 md:pt-8  2xl:pt-20 items-end gap-y-4">
          <div className="w-fit flex flex-col items-center">
            <div className="relative w-px h-20 bg-[#7af298] overflow-hidden">
              <div ref={scrollLineRef} className="absolute top-0 left-0 w-px h-full bg-white"></div>
            </div>
            <span
              ref={scrollTextRef}
              className="uppercase text-[16px] font-semibold text-white tracking-[0.3em] [writing-mode:vertical-rl] rotate-180"
            >
              Scroll
            </span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col md:flex-row pt-5 md:pt-10 2xl:pt-20 items-end justify-between">
          {/* Left Column */}
          <div className="flex flex-col gap-y-2 w-full md:w-fit items-start pt-5 md:pt-0 order-2 md:order-1 text-white">
            {["Email: imranmiatech@gmail.com", "+880 1943747529"].map((text, i) => (
              <motion.a
                key={i}
                href={text.includes("Email") ? "mailto:imranmiatech@gmail.com" : "tel:+8801943747529"}
                variants={appearVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="font-[var(--font-space)] font-semibold text-left hover:underline transition-colors duration-300"
              >
                {text}
              </motion.a>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-y-5 order-1 md:order-2 md:gap-y-8 2xl:gap-y-15">
            <motion.p
              variants={appearVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              className="text-[16px] font-[var(--font-space)] font-normal leading-[26px] text-white w-full md:max-w-[600px]"
            >
              I’m Md Imran Mia, Dedicated and enthusiastic software engineer with strong skills in programming, and web development. Seeking to leverage expertise on real-world projects in a collaborative environment. Actively seeking opportunities to apply and advance technical expertise while making meaningful contributions.
            </motion.p>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-between items-start text-[16px] font-[var(--font-space)] font-normal leading-[26px] text-white w-full md:max-w-[390px]">
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  variants={appearVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  className="group relative overflow-hidden cursor-pointer py-1"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <div className="transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] whitespace-nowrap group-hover:-translate-y-full">
                      <span className="text-[#7af298]">/</span> {link.name}
                    </div>
                    <div className="absolute left-0 top-full translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.1)] group-hover:translate-y-[-100%] whitespace-nowrap">
                      <span className="text-[#7af298]">/</span>{" "}
                      <span className="text-[#b7fecb]">{link.name}</span>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;

