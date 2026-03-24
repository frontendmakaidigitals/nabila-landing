"use client";
import Nav from "./nav";
import Logo from "./Logo";
import MobileNav from "./mobile-nav";
import { useEffect, useState } from "react";
const Header = () => {
  const links = [
    { link: "", label: "Home" },
    { link: "about", label: "About us" },
    { link: "portfolio", label: "Projects" },
    { link: "contact", label: "Contact" },
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={` py-5 fixed isnet-0 w-full z-50 ${scrolled ? "bg-[#4A4233]/60 backdrop-blur-xl" : " "} transition-all duration-300`}
    >
      <div className="flex container items-center justify-between w-full">
        <Logo />
        <Nav data={links} />

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
