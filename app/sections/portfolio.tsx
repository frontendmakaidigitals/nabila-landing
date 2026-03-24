import Image from "next/image";

export default function PortfolioSection() {
  const projects = [
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
    "/portfolio",
  ];

  return (
    <section className="mt-20">
      <div className="container">
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-medium text-[#4A4233] mb-10  inline-block pb-2">
          <span className="mr-4">04</span> Project Portfolio
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {projects.map((src, i) => (
            <div key={i}>
              {/* LABEL */}
              <p className="font-primary max-w-[120px] text-gray-800 font-[400] text-lg mb-2 leading-tight">
                Façade glass & aluminium
              </p>

              {/* IMAGE */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={`/portfolio/img-${i + 1}.jpg`}
                  alt="portfolio"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
