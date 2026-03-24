import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="bg-[#4A4233] h-[85vh]">
      <div className=" relative h-full grid grid-cols-1 lg:grid-cols-2 ">
        <ul className="absolute container -translate-x-1/2 w-full z-10 text-[#F0EDE6] flex justify-between items-center top-1/2 -translate-y-1/2 left-1/2">
          <li className="font-roboto text-lg">Aluminum & Glass</li>
          <li className="text-4xl font-primary text-center">
            The Great Glass <span className="block font-roboto">Company</span>
          </li>
          <li className="font-roboto text-lg">Aluminum & Glass</li>
          <li className="text-4xl text-center font-primary">
            The Great Glass <span className="block font-roboto">Company</span>
          </li>
        </ul>
        <div className=" h-full"> </div>
        <div className="relative">
          <Image
            src={"/hero.jpg"}
            alt={"Hero Banner"}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
