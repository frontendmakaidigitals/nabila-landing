"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
const Banner = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  const line = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // TEXT REVEAL (from below)
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });

    // IMAGE PARALLAX
    gsap.to(imageRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // TEXT PARALLAX (slower = depth)
    gsap.to(textRef.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(line.current, {
      width: "100%",
      ease: "power3.out",
      duration: 1.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "bottom bottom",
      },
    });
  }, []);
  return (
    <section ref={sectionRef} className="">
      <div className="h-[420px] relative lg:h-[80vh] overflow-hidden">
        <div
          ref={imageRef}
          className="bg-black/30 z-10 size-full inset-0 absolute"
        />
        <Image
          ref={imageRef}
          src={"/Gemini_Generated_Image_wgxte3wgxte3wgxt.png"}
          alt={"page Banner"}
          fill
          className="object-cover object-bottom scale-[1.2]"
        />
        <div className="flex items-end container h-full pb-8 justify-end">
          <h2
            ref={textRef}
            className="text-4xl lg:text-6xl  relative z-10 text-white font-primary"
          >
            As we evolve,
            <span className="text-3xl lg:text-5xl font-roboto">
              our <br /> homes should too.
            </span>
          </h2>
        </div>
      </div>

      <div className="flex items-start mt-10 gap-4">
        <div className="w-full">
          <div ref={line} className="h-0.5 mt-2 w-0 bg-black " />
        </div>
        <p className="max-w-xl font-roboto font-light text-gray-700">
          The Great Glass Company delivers solutions that enhance modern living,
          combining functionality, innovation, and timeless design to create
          environments that feel open, refined, and future-ready.
        </p>
      </div>
    </section>
  );
};

export default Banner;
