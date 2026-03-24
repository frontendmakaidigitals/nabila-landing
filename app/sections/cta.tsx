import React from "react";
import Image from "next/image";
const CTA = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1  lg:grid-cols-2">
        <div className="bg-[#4A4233] px-7 py-28">
          <h2 className="font-primary text-gray-100 text-5xl">
            Ready to upgrade?
          </h2>
          <p className="text-gray-100 text-lg font-roboto font-light mt-4 mb-8">
            Transform your space with modern glass and aluminium solutions
            designed for style, strength, and performance. Let’s bring your
            vision to life with precision and expertise.
          </p>
          <button className="py-3 w-full font-roboto font-light uppercase bg-[#F0EDE6]">
            Book now
          </button>
        </div>
        <div className="relative">
          <Image src={"/cta.jpg"} alt={""} className={"object-cover"} fill />
        </div>
      </div>
    </section>
  );
};

export default CTA;
