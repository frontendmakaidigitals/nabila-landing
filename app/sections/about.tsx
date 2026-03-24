import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_.6fr] gap-10 items-start">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-[#4A4233] mb-6">
            <span className="mr-4">02</span> About Us
          </h2>

          <p className="text-gray-600 leading-relaxed mb-10 ">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>

          {/* SERVICES GRID */}
          <div className="grid mt-auto grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                img: "/about/design-and-engineering.jpg",
                title: "DESIGN & ENGINEERING",
              },
              { img: "/about/fabrication.jpg", title: "FABRICATION & SUPPLY" },
              {
                img: "/about/installation.jpg",
                title: "INSTALLATION & EXECUTION",
              },
              { img: "/about/finishing.jpg", title: "FINISHING & COMPLIANCE" },
            ].map((item, i) => (
              <div key={i}>
                <div className="relative h-28 md:h-40 w-full overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 mt-2 tracking-wide">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[400px] lg:h-[450px]">
          <Image
            src="/about/banner.jpg"
            alt="About"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
