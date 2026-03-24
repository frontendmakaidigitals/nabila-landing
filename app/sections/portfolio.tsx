"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function PortfolioSection() {
  const projects = [
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
  ];
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(cardsRef.current, {
      y: 60,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section id={"portfolio"} className="mt-20">
      <div className="container">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#4A4233] mb-10  inline-block pb-2">
          <span className="mr-4">04</span> Project Portfolio
        </h2>

        {/* GRID */}
        <ul
          ref={containerRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {projects.map((src, i) => (
            <li
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
            >
              {/* LABEL */}
              <p className="font-primary max-w-[120px] text-gray-800 font-[400] text-lg mb-2 leading-tight">
                Façade glass & aluminium
              </p>

              {/* IMAGE */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={`/portfolio/img-${i + 1}.jpg`}
                  alt="portfolio"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
