"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
export default function Footer() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame: number;
    let x = 0;
    const speed = 0.4;

    const tick = () => {
      x -= speed;
      const el = marqueeRef.current;
      if (el) {
        const half = el.scrollWidth / 2;
        if (Math.abs(x) >= half) x = 0;
        el.style.transform = `translateX(${x}px)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#3d3a2e", fontFamily: "'Georgia', serif" }}
    >
      {/* Top nav area */}
      <div className="relative z-10 container pt-10 pb-4 flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left: Links */}
        <div className="flex flex-col  gap-5">
          {/* Quick Links */}
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <span
              className=" tracking-widest text-sm font-roboto underline underline-offset-4 min-w-[90px]"
              style={{ color: "#c8c4b0" }}
            >
              QUICK LINKS
            </span>
            <nav className="flex gap-5 flex-wrap">
              {["HOME", "ABOUT US", "PROJECTS", "CONTACT"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className=" tracking-widest text-sm font-roboto transition-opacity hover:opacity-60"
                  style={{ color: "#c8c4b0" }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col lg:flex-row items-start gap-6">
            <span
              className=" tracking-widest font-roboto text-sm underline underline-offset-4 min-w-[90px]"
              style={{ color: "#c8c4b0" }}
            >
              LEGAL LINKS
            </span>
            <nav className="flex gap-5 flex-wrap">
              {["PRIVACY POLICY", "TERMS & CONDITIONS"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className=" tracking-widest font-roboto text-sm transition-opacity hover:opacity-60"
                  style={{ color: "#c8c4b0" }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right: Star decorations */}
        <div className="relative hidden lg:flex-row flex items-start justify-end pr-6 gap-6 pt-2 min-w-[120px]">
          {/* Big star */}
          <Image
            src={"/Star 1.png"}
            alt={"star"}
            className=""
            width={80}
            height={80}
          />
          {/* Small dot star */}
          <Image
            src={"/Star 2.png"}
            alt={"star"}
            className=""
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Divider line */}

      {/* Marquee company name */}
      <div className="relative mt-10 overflow-hidden h-[80px] lg:h-[120px]">
        <div
          ref={marqueeRef}
          className="absolute top-0 left-0 flex whitespace-nowrap will-change-transform"
          style={{ width: "max-content" }}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-7xl lg:text-9xl font-primary font-[600] leading-none tracking-tight select-none"
              style={{
                color: "#b0aa96",
                opacity: 0.55,
                paddingRight: "60px",
              }}
            >
              THE GREAT GLASS COMPANY
            </span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative container z-10 flex flex-col md:flex-row lg:justify-between lg:items-start  py-10 gap-2">
        {/* Left: empty or brand */}
        <div className="lg:mx-8  mb-0 w-full h-0.5 mt-2 bg-gray-200/50" />

        {/* Right: credits + copyright */}
        <div className="flex flex-col items-end gap-1">
          <p
            className=" tracking-widest text-sm lg:text-lg font-roboto "
            style={{ color: "#c8c4b0" }}
          >
            DESIGNED &amp; CREATED BY SPOK DIGITAL
          </p>
          <p className=" font-roboto text-xs " style={{ color: "#7a7560" }}>
            © 2026 THE GLASS COMPANY &nbsp;·&nbsp; ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
