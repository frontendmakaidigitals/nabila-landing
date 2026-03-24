import Link from "next/link";
import React from "react";

const Nav = ({ data }: { data: { label: string; link: string }[] }) => {
  return (
    <div>
      <ul className="flex items-center gap-6">
        {data.map((data, idx) => (
          <li key={idx} className="text-lg uppercase text-[#F0EDE6] font-extralight">
            <Link href={data.link}>{data.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
