"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function BuiltToBelong() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const line = useRef<HTMLDivElement | null>(null);
  const rightPanelRef = useRef<HTMLDivElement | null>(null);
  const floatingImg = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // when enters viewport
        toggleActions: "play none none none",
      },
    });
    tl.set(containerRef.current, { autoAlpha: 1 });

    tl.from(containerRef.current, {
      yPercent: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    tl.from(
      imageRef.current,
      {
        yPercent: 100,
        scale: 1.3,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=1.5",
    );

    tl.to(line.current, {
      height: "100%",
      ease: "power3.out",
      duration: 1.1,
    });
    gsap.to(floatingImg.current, {
      y: 60,
      ease: "none", // 👈 IMPORTANT
      scrollTrigger: {
        trigger: rightPanelRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <section className="w-full mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] overflow-hidden">
        <div
          ref={containerRef}
          className="relative w-full h-[300px] lg:h-[650px] overflow-hidden invisible"
        >
          <div ref={imageRef} className="relative w-full h-full">
            <Image
              src="/built.jpg"
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          ref={rightPanelRef}
          className="relative bg-[#5a4e3b]  text-white flex justify-end "
        >
          <div className="px-6 md:px-16 py-12 flex flex-col items-start justify-end relative w-full">
            <div className="h-full">
              <div
                ref={line}
                className="hidden lg:block h-0 w-[1px] bg-white/40"
              />
            </div>
            {/* small floating image */}
            <div
              ref={floatingImg}
              className="hidden lg:block absolute top-20 right-8 w-32 h-40"
            >
              <Image
                src="/portfolio/img-3.jpg"
                alt="detail"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <h2 className="text-3xl lg:text-5xl font-roboto font-light mb-6">
              Built to{" "}
              <span className="font-primary text-4xl md:text-6xl font-[500]">
                Belong
              </span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
              The Great Glass Company is built on simplicity, functionality, and
              a deep connection to modern architectural needs. With a focus on
              clean lines, minimalism, and materials like glass and aluminium,
              we create spaces that feel open, light-filled, and elegant. Every
              design reflects a balance of aesthetics and performance, ensuring
              spaces are not only visually striking but also practical, durable,
              and built to last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
