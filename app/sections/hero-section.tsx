"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const textRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.set(containerRef.current, { autoAlpha: 1 });

    tl.from(containerRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    tl.from(
      imageRef.current,
      {
        xPercent: 100,
        scale: 1.2,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1.5",
    );

    tl.from(
      textRef.current,
      {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=1",
    );
  }, []);

  const texts = [
    { label: "Aluminum & Glass", small: true },
    { label: "The Great Glass Company", small: false },
    { label: "Aluminum & Glass", small: true, desktopOnly: true },
    { label: "The Great Glass Company", small: false, desktopOnly: true },
  ];

  return (
    <section className="relative h-[50dvh] lg:h-[85vh] bg-[#4A4233] overflow-hidden">
      <div className="grid h-full lg:grid-cols-2">
        {/* TEXT LAYER */}
        <ul
          className="
          absolute z-10 w-full text-[#F0EDE6]
          
          /* Mobile */
          bottom-8 px-6 flex flex-col items-center gap-3 text-center
          
          /* Desktop */
          lg:top-1/2 lg:-translate-y-1/2
          lg:left-1/2 lg:-translate-x-1/2
          lg:max-w-7xl
          lg:flex-row lg:justify-between lg:items-center
          lg:px-8
        "
        >
          {texts.map((item, i) => (
            <li
              key={i}
              ref={(el) => {
                textRef.current[i] = el;
              }}
              className={`
                ${item.desktopOnly ? "hidden lg:block" : ""}
                ${
                  item.small
                    ? "font-roboto text-sm lg:text-base tracking-wide opacity-80"
                    : "font-primary text-4xl md:text-5xl lg:text-4xl leading-tight"
                }
              `}
            >
              {item.label.includes("Company") ? (
                <>
                  The Great Glass
                  <span className="block font-roboto text-base lg:text-sm mt-1 opacity-80">
                    Company
                  </span>
                </>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>

        {/* LEFT EMPTY (desktop spacing) */}
        <div className="hidden lg:block" />

        {/* IMAGE SECTION */}
        <div className="absolute inset-0 lg:relative">
          {/* Mobile overlay */}
          <div className="absolute inset-0 bg-black/40 z-[1] lg:hidden" />

          {/* IMAGE REVEAL */}
          <div
            ref={containerRef}
            className="relative w-full h-full overflow-hidden invisible"
          >
            <div ref={imageRef} className="relative w-full h-full">
              <Image
                src="/hero.jpeg"
                alt="Hero Banner"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
