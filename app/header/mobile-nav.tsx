"use client";
import Logo from "./Logo";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { link: "", label: "Home" },
  { link: "about", label: "About us" },
  { link: "projects", label: "Projects" },
  { link: "contact", label: "Contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    if (!link) return;
    e.preventDefault();
    const target = document.getElementById(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[60] relative"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-[2px] bg-[#F0EDE6] transition-all duration-300 ease-in-out origin-center ${open ? "w-6 rotate-45 translate-x-[1px] translate-y-[9px]" : "w-6"}`}
        />
        <span
          className={`block h-[2px] bg-[#F0EDE6] transition-all duration-300 ease-in-out ${open ? "w-0 opacity-0" : "w-4 opacity-100"}`}
        />
        <span
          className={`block h-[2px] bg-[#F0EDE6] transition-all duration-300 ease-in-out origin-center ${open ? "w-6 -rotate-45 -translate-y-[7px]" : "w-6"}`}
        />
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#4A4233] flex flex-col items-center lg:hidden transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-[#F0EDE6]/20" />

        <div
          className={`w-full px-6 py-5 transition-all duration-500 ease-in-out ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: open ? "80ms" : "0ms" }}
        >
          <Logo />
        </div>

        <div className="w-full h-px bg-[#F0EDE6]/10" />

        <nav className="flex-1 flex items-center justify-center">
          <ul className="flex flex-col items-center gap-8">
            {links.map((item, i) => (
              <li
                key={i}
                className={`transition-all duration-500 ease-in-out ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: open ? `${i * 80 + 180}ms` : "0ms" }}
              >
                <Link
                  href={item.link ? `#${item.link}` : "/"}
                  onClick={(e) => handleScroll(e, item.link)}
                  className="text-[#F0EDE6] font-primary text-5xl tracking-tight hover:text-[#F0EDE6]/50 transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p
          className={`mb-10 text-[#F0EDE6]/30 text-xs font-roboto tracking-widest uppercase transition-all duration-500 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: open ? "500ms" : "0ms" }}
        >
          The Great Glass Company
        </p>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F0EDE6]/20" />
      </div>
    </>
  );
};

export default MobileNav;
