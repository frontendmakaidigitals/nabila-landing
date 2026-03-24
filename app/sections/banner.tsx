import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="">
      <div className="h-[420px] relative lg:h-[80vh]">
        <div className="bg-black/30 z-10 size-full inset-0 absolute" />
        <Image
          src={"/intro.jpg"}
          alt={"page Banner"}
          fill
          className="object-cover"
        />
        <div className="flex items-end container h-full pb-8 justify-end">
          <h2 className="text-6xl  relative z-10 text-white font-primary">
            As we evolve,
            <span className="text-5xl font-roboto">
              our <br /> homes should too.
            </span>
          </h2>
        </div>
      </div>

      <div className="flex items-start mt-10 gap-4">
        <div className="h-0.5 mt-2 w-full bg-black " />
        <p className="max-w-xl font-roboto font-light text-gray-700">
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubi.
        </p>
      </div>
    </section>
  );
};

export default Banner;
