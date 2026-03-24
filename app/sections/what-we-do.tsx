import Image from "next/image";

export default function WhatWeDo() {
  const services = [
    {
      no: "01",
      title: "FIT-OUT CONSULTATION",
      desc: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      no: "02",
      title: "PROJECT PLAN & SCHEDULE",
      desc: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      no: "03",
      title: "FAIR PROJECT BUDGETING",
      desc: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
      no: "04",
      title: "DIGITAL PROJECT RENDERING",
      desc: "Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src="/what-we-do.jpg"
            alt="What we do"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col">
          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-light text-[#4A4233] mb-6">
            <span className="mr-4">03</span> What We Do
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-xl">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus.
          </p>

          {/* SERVICES LIST */}
          <div className="space-y-6">
            {services.map((item, i) => (
              <div key={i} className="border-b border-gray-300 pb-4">
                <div className="flex gap-6">
                  {/* NUMBER */}
                  <span className="text-gray-500 text-lg w-8">{item.no}</span>

                  {/* TITLE + DESC */}
                  <div className="flex-1">
                    <h3 className="text-sm tracking-wide text-gray-700 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
