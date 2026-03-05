

"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Figma,
  Github,
  Layers,
  Code2,
  Cpu,
  Globe,
  Database,
  Terminal,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ICONS_DATA = [
  { Icon: Code2,    color: "text-emerald-500", x: -450, y: -250, size: 48 },
  { Icon: Figma,    color: "text-purple-500",  x:  420, y: -220, size: 40 },
  { Icon: Github,   color: "text-white",        x: -400, y:  280, size: 44 },
  { Icon: Layers,   color: "text-blue-500",     x:  460, y:  240, size: 52 },
  { Icon: Cpu,      color: "text-orange-500",   x: -520, y:   20, size: 36 },
  { Icon: Globe,    color: "text-cyan-500",     x:  520, y:   80, size: 42 },
  { Icon: Database, color: "text-yellow-500",   x: -220, y:  380, size: 38 },
  { Icon: Terminal, color: "text-green-500",    x:  220, y: -380, size: 40 },
  { Icon: Zap,      color: "text-yellow-400",   x:   20, y: -420, size: 44 },
];

const FloatingIcons = () => (
  <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
    {ICONS_DATA.map((item, i) => (
      // Outer div: ONLY scroll-driven x/y translation lives here
      <div
        key={i}
        className="floating-icon-outer absolute"
        data-x={item.x}
        data-y={item.y}
      >
        {/* Inner div: ONLY the idle float/rotation lives here */}
        <div className="floating-icon-inner">
          <item.Icon size={item.size} className={item.color} />
        </div>
      </div>
    ))}
  </div>
);

export default function AboutHero() {
  const container        = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const imageRef         = useRef<HTMLDivElement>(null);
  const textSectionRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── 1. Grab outer (scroll) and inner (float) elements separately
      const outerIcons = gsap.utils.toArray<HTMLElement>(".floating-icon-outer");
      const innerIcons = gsap.utils.toArray<HTMLElement>(".floating-icon-inner");

      // Start all outers at center, invisible
      gsap.set(outerIcons, { x: 0, y: 0, opacity: 0 });

      // ─── 2. Entrance animation
      gsap.timeline()
        .from(".hero-hello", {
          y: 20, opacity: 0, duration: 0.8, ease: "power3.out",
        })
        .from(".hero-title", {
          y: 40, opacity: 0, duration: 1, stagger: 0.2, ease: "power4.out",
        }, "-=0.4")
        .from(imageRef.current, {
          y: 60, opacity: 0, duration: 1.2, ease: "expo.out",
        }, "-=0.8");

      // ─── 3. Scroll-driven timeline
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      // Title shrinks + moves down
      mainTl.to(titleContainerRef.current, {
        scale: 0.4, y: 200, ease: "power3.out", duration: 0.5,
      }, 0);

      // Image lifts
      mainTl.to(imageRef.current, { y: -120, ease: "none" }, 0);

      // Icons fly out — only touch outer (x/y/opacity), never rotation
      outerIcons.forEach((icon) => {
        const targetX = parseFloat(icon.dataset.x ?? "0");
        const targetY = parseFloat(icon.dataset.y ?? "0");

        mainTl.to(icon, {
          x: targetX,
          y: targetY,
          opacity: 0.9,
          duration: 1,
          ease: "power2.out",
        }, 0);
      });

      // ─── 4. Idle float — only touches INNER elements, so scroll x/y on
      //        outer is NEVER overwritten. No += race condition possible.
      innerIcons.forEach((inner) => {
        gsap.to(inner, {
          x: Math.random() * 30 - 15,
          y: Math.random() * 30 - 15,
          rotation: Math.random() * 20 - 10,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      // ─── 5. Text reveal
      gsap.from(".scroll-text-p", {
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: true,
        },
        opacity: 0,
        y: 60,
      });

      gsap.from(".sub-text", {
        scrollTrigger: {
          trigger: ".sub-text",
          start: "top 95%",
          end: "top 70%",
          scrub: true,
        },
        opacity: 0,
        y: 40,
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="relative bg-[#0a0a0a] text-white">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 min-h-screen">

        <div ref={titleContainerRef} className="z-10 mb-4 transition-transform">
          <p className="hero-hello text-emerald-500 font-mono text-sm mb-4 tracking-widest uppercase">
            // Hello World
          </p>
          <h1 className="hero-title text-5xl md:text-8xl font-black mb-2">
            I'M A FULL
          </h1>
          <h1 className="hero-title text-5xl md:text-8xl font-black">
            STACK DEVELOPER
          </h1>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="relative z-20 flex items-center justify-center mt-16"
          /* Remove pointer-events from the image wrapper so icons
             underneath don't accidentally capture hover and get
             pulled toward the cursor center */
        >
          {/* pointer-events-none is already on FloatingIcons wrapper */}
          <FloatingIcons />

          <div className="relative w-72 md:w-96 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-zinc-900">
            <img
              src="https://picsum.photos/seed/developer/800/1200"
              alt="Developer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section
        ref={textSectionRef}
        className="py-40 px-6 max-w-5xl mx-auto text-center"
      >
        <div className="scroll-text-p text-2xl md:text-5xl font-bold leading-tight mb-20">
          <span className="text-emerald-500 font-mono">&lt;p&gt;</span>
          {' '}I CRAFT FAST, SCALABLE, AND{' '}
          <span className="text-emerald-500">USER-FRIENDLY WEB</span>
          {' '}APPLICATIONS WITH MODERN JAVASCRIPT FRAMEWORKS — COMBINING{' '}
          <span className="text-white">REACT</span> ON THE FRONTEND WITH ROBUST{' '}
          <span className="text-emerald-500 uppercase">Server-side solutions</span>
          {' '}USING{' '}
          <span className="text-white">NODE.JS.</span>{' '}
          <span className="text-emerald-500 font-mono">&lt;/p&gt;</span>
        </div>

        <p className="sub-text text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light">
          I thrive on solving real-world problems, turning ideas into clean,
          maintainable code, and learning through experimentation. You'll find me
          building side projects, diving into new tech stacks, or simply exploring
          web development.
        </p>
      </section>

      
    </div>
  );
}