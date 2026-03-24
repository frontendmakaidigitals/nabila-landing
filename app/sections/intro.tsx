"use client";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: 80, // move down slightly
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom", // when enters viewport
        end: "bottom top",
        scrub: true, // smooth follow scroll
      },
    });
  }, []);
  return (
    <section className="">
      <div className="bg-[#4A4233] mt-1 py-14">
        <div className="container max-w-5xl flex-col lg:flex-row flex items-start gap-6 lg:gap-14">
          <h2 className="text-5xl font-roboto text-nowrap text-white">
            01 Introduction
          </h2>
          <p className="text-[#F0EDE6]">
            The Great Glass Company was founded with a commitment to quality and
            innovation, specializing in the design, fabrication, and
            installation of advanced glass and aluminium systems. With a focus
            on precision and modern aesthetics, we create solutions that enhance
            both functionality and architectural appeal across residential and
            commercial spaces.
          </p>
        </div>
      </div>

      <div className="h-[260px] lg:h-[480px] w-full relative overflow-hidden">
        <div className="w-full h-full relative" ref={imageRef}>
          <Image
            src={"/introduct.jpg"}
            fill
            alt={""}
            className="object-cover scale-[1.5] lg:scale-[1.2]"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
