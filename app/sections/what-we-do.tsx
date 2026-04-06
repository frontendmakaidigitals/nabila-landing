"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const services = [
    {
      no: "01",
      title: "FIT-OUT CONSULTATION",
      desc: "We offer expert consultation to understand project requirements, providing technical guidance and design direction for efficient and high-quality glass solutions.",
    },
    {
      no: "02",
      title: "PROJECT PLAN & SCHEDULE",
      desc: "Our team develops structured project plans with clear timelines, ensuring smooth execution and timely delivery without compromising quality.",
    },
    {
      no: "03",
      title: "FAIR PROJECT BUDGETING",
      desc: "We maintain transparency in costing, offering practical and balanced budgeting that aligns with project scope and expectations.",
    },
    {
      no: "04",
      title: "DIGITAL PROJECT RENDERING",
      desc: "Through detailed renderings and technical drawings, we help visualize the final outcome, ensuring clarity before execution begins.",
    },
  ];

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

    tl.from(itemRefs.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <section className=" py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE */}
        <div
          ref={containerRef}
          className="relative w-full overflow-hidden invisible h-[320px] md:h-[500px] lg:h-[600px]"
        >
          <div className="w-full h-full relative " ref={imageRef}>
            <Image
              src="/WhatsApp Image 2026-04-02 at 11.44.58 AM.jpeg"
              alt="What we do"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-light text-[#4A4233] mb-6">
            <span className="mr-4">03</span> What We Do
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-xl">
            We provide end-to-end glass and aluminium solutions, combining
            design, engineering, fabrication, and installation under one roof.
            From concept to completion, our team ensures precision, efficiency,
            and quality at every stage of the project, delivering tailored
            results that align with both functional needs and aesthetic vision.
          </p>

          {/* SERVICES LIST */}
          <div ref={listRef} className="space-y-6">
            {services.map((item, i) => (
              <div
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                key={i}
                className="border-b border-gray-300 pb-4"
              >
                <div className="flex gap-6">
                  {/* NUMBER */}
                  <span className="text-gray-500 text-lg w-8">{item.no}</span>

                  {/* TITLE + DESC */}
                  <div className="flex-1">
                    <h3 className="text-sm tracking-wide text-gray-700 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
