"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const items = [
  { text: "Crafted Interior Spaces", italic: false },
  { text: "/", italic: false, isSeparator: true },
  { text: "Timeless Design", italic: true },
];

const MarqueeTrack = ({ cloneIndex }: { cloneIndex: number }) => (
  <ul className="flex items-center shrink-0" aria-hidden={cloneIndex > 0}>
    {items.map((item, i) => (
      <li
        key={i}
        className={`flex items-center px-6 uppercase tracking-widest text-2xl font-primary text-[#2C2A25] whitespace-nowrap ${
          item.italic ? "italic font-light" : "font-normal"
        } ${item.isSeparator ? "px-4 text-[#2C2A25]/40" : ""}`}
      >
        {item.text}
      </li>
    ))}
  </ul>
);

const Marquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Wait for layout, then measure one copy width
    const firstChild = track.children[0] as HTMLElement;
    const singleWidth = firstChild.offsetWidth;

    const tween = gsap.to(track, {
      x: `-=${singleWidth}`,
      duration: 18,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % singleWidth),
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="w-full overflow-hidden mb-12 py-8 border-t border-b border-[#2C2A25]/10  ">
      <div ref={trackRef} className="flex will-change-transform">
        {/* Render enough copies to always fill the screen */}
        {[...Array(6)].map((_, i) => (
          <MarqueeTrack key={i} cloneIndex={i} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
