"use client";

import Link from "next/link";

const Nav = ({ data }: { data: { label: string; link: string }[] }) => {
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
  };

  return (
    <ul className="lg:flex hidden items-center gap-6">
      {data.map((item, idx) => (
        <li
          key={idx}
          className="text-lg hover:underline uppercase text-[#F0EDE6] font-extralight"
        >
          <Link
            href={`#${item.link}`}
            onClick={(e) => handleScroll(e, item.link)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
