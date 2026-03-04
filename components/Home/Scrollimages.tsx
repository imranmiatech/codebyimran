"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageCard {
  src: string;
  finalXvw: number;   /* final X as % of vw */
  finalYvh: number;   /* final Y as % of vh */
  finalRotate: number;
  startXvw: number;   /* start X as % of vw — 45° scatter */
  startYvh: number;   /* start Y as % of vh */
  startRotate: number;
  z: number;
  color: string;
}

const cards: ImageCard[] = [
  {
    src: "/imran.jpg",
    finalXvw: -22, finalYvh: 2,   finalRotate: -14,
    startXvw: -60, startYvh: 70,  startRotate: -30,
    z: 1, color: "#ddd8c4",
  },
  {
    src: "/imran.jpg",
    finalXvw: 1,   finalYvh: -4,  finalRotate: 5,
    startXvw: 0,   startYvh: 80,  startRotate: 0,
    z: 3, color: "#5a8a7a",
  },
  {
    src: "/imran.jpg",
    finalXvw: 23,  finalYvh: 4,   finalRotate: 13,
    startXvw: 60,  startYvh: 70,  startRotate: 28,
    z: 2, color: "#c8b87a",
  },
];

const MARQUEE_TEXT =
  "MD IMRAN * MD IMRAN * MD IMRAN * MD IMRAN * MD IMRAN * MD IMRAN * MD IMRAN * ";

export default function ScrollImages() {
  const wrapRef    = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const ctx = gsap.context(() => {

      /* ── Marquee continuous loop ── */
      if (marqueeRef.current) {
        const trackWidth = marqueeRef.current.offsetWidth;
        gsap.to(marqueeRef.current, {
          x: -trackWidth,
          ease: "none",
          duration: 22,
          repeat: -1,
        });
      }

      /* ── Set starting scattered positions (vw/vh based) ── */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.set(card, {
          x: (cards[i].startXvw / 100) * vw,
          y: (cards[i].startYvh / 100) * vh,
          rotation: cards[i].startRotate,
          opacity: 0,
        });
      });

      /* ── Scrub to final positions ── */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.to(card, {
          x: (cards[i].finalXvw / 100) * vw,
          y: (cards[i].finalYvh / 100) * vh,
          rotation: cards[i].finalRotate,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top top",
            end: "+=130%",
            scrub: 1.6,
          },
        });
      });

    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} style={{ height: "300vh", position: "relative" }}>
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          background: "#111",
          /* NO overflow:hidden here — clips the marquee */
        }}
      >
        {/* ── Marquee bg text — sits behind everything, never clips ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            zIndex: 0,
          }}
        >
          {/* Two identical tracks side by side — first track animates from 0 to -100%,
              second track is right behind it, creating a seamless infinite loop */}
          <div
            style={{ display: "flex", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                ref={i === 0 ? marqueeRef : undefined}
                style={{ display: "flex", whiteSpace: "nowrap", flexShrink: 0 }}
              >
                {[...Array(6)].map((_, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "clamp(38px, 7vw, 110px)",
                      fontWeight: 900,
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "-0.02em",
                      paddingRight: "0.5em",
                      flexShrink: 0,
                    }}
                  >
                    MD IMRAN *
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ── Cards stage — cards move outside bounds, clipped by sticky parent ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            overflow: "hidden",   /* cards that are out of frame get hidden */
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              style={{
                position: "absolute",
                /* responsive card width */
                width: "clamp(120px, 22vw, 280px)",
                zIndex: card.z,
                willChange: "transform, opacity",
              }}
            >
              <div
                style={{
                  background: card.color,
                  padding: "6px 6px 26px 6px",
                  boxShadow:
                    "0 30px 70px rgba(0,0,0,0.65), 0 8px 20px rgba(0,0,0,0.35)",
                }}
              >
                <img
                  src={card.src}
                  alt={`card ${i + 1}`}
                  style={{
                    width: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "top center",
                    aspectRatio: "3/4",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}