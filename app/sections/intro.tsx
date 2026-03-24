import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="">
      <div className="bg-[#4A4233] mt-1 py-14">
        <div className="container max-w-5xl flex items-start gap-14">
          <h2 className="text-5xl font-roboto text-nowrap text-white">
            01 Introduction
          </h2>
          <p className="text-[#F0EDE6]">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubi.
          </p>
        </div>
      </div>
      <div className="h-[480px] w-full relative">
        <Image src={"/intro.jpg"} fill alt={""} className="object-cover" />
      </div>
    </section>
  );
};

export default Intro;
