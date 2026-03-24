"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutSection() {
  const cardsRef = useRef<(HTMLLIElement | null)[]>([]);
  const containerRef = useRef<HTMLUListElement | null>(null);

  const mainImageContainerRef = useRef<HTMLDivElement | null>(null);
  const mainImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainImageContainerRef.current,
        start: "top 80%", // when enters viewport
        toggleActions: "play none none none",
      },
    });

    // make visible
    tl.set(mainImageContainerRef.current, { autoAlpha: 1 });

    // MASK (from bottom → up)
    tl.from(mainImageContainerRef.current, {
      yPercent: 100,
      duration: 1.5,
      ease: "power3.out",
    });

    // IMAGE (opposite direction + zoom)
    tl.from(
      mainImageRef.current,
      {
        yPercent: -100,
        scale: 1.3,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1.5",
    );

    // CARDS (unchanged)
    gsap.from(cardsRef.current, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section id={"about"} className=" py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_.6fr] gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A4233] mb-6">
            <span className="mr-4">02</span> About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10">
            The Great Glass Company is a specialist in high-performance glass
            and aluminium systems, delivering bespoke glazing solutions for
            villas, commercial buildings, and architectural landmarks. Our
            approach blends technical expertise with contemporary design,
            ensuring every project meets the highest standards of durability,
            safety, and elegance. With a strong commitment to innovation and
            flawless execution, we transform ideas into refined, long-lasting
            structures.
          </p>

          {/* SERVICES GRID */}
          <ul
            ref={containerRef}
            className="grid mt-auto grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              {
                img: "/about/design-and-engineering.jpg",
                title: "DESIGN & ENGINEERING",
              },
              { img: "/about/fabrication.jpg", title: "FABRICATION & SUPPLY" },
              {
                img: "/about/installation.jpg",
                title: "INSTALLATION & EXECUTION",
              },
              { img: "/about/finishing.jpg", title: "FINISHING & COMPLIANCE" },
            ].map((item, i) => (
              <li
                key={i}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
              >
                <div className="relative h-28 md:h-40 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-2 tracking-wide">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={mainImageContainerRef}
          className="relative w-full h-[230px] lg:h-[450px] overflow-hidden invisible"
        >
          {/* IMAGE */}
          <div ref={mainImageRef} className="relative w-full h-full">
            <Image
              src="/about/banner.jpg"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
