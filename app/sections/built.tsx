import Image from "next/image";

export default function BuiltToBelong() {
  return (
    <section className="w-full mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr]">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[300px] lg:h-[650px]">
          <Image
            src="/portfolio/img-8.jpg"
            alt="Interior"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT PANEL */}
        <div className="relative bg-[#5a4e3b]  text-white flex justify-end ">
          <div className="px-6 md:px-16 py-12 flex flex-col items-start justify-end relative w-full">
            <div className="hidden lg:block h-full w-[1px] bg-white/40" />
            {/* small floating image */}
            <div className="absolute top-8 right-8 w-32 h-40">
              <Image
                src="/portfolio/img-3.jpg"
                alt="detail"
                fill
                className="object-cover shadow-lg"
              />
            </div>

            {/* CONTENT */}
            <h2 className="text-3xl lg:text-5xl font-roboto font-light mb-6">
              Built to{" "}
              <span className="font-primary text-4xl md:text-6xl font-[500]">
                Belong
              </span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed max-w-2xl">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
