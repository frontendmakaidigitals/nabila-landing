import React from "react";
import MobileNav from "./mobile-nav";
import Nav from "./nav";
import Logo from "./Logo";
const Header = () => {
  const links = [
    { link: "", label: "Home" },
    { link: "", label: "About us" },
    { link: "", label: "Projects" },
    { link: "", label: "Contact" },
  ];
  return (
    <header className="bg-[#4A4233] py-5">
      <div className="flex container items-center justify-between">
        <Logo />
        <Nav data={links} />
      </div>
    </header>
  );
};

export default Header;
