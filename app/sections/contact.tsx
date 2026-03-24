"use client";
import { InlineWidget } from "react-calendly";

export default function ContactSection() {
  return (
    <section id={"contact"} className="w-full bg-[#f5f5f5] py-20 px-6 md:px-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between h-full">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-[#3e3a34] mb-6">
              <span className="mr-3">06</span> Contact Us
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
              Whether you're planning a single installation or a complete
              architectural transformation, The Great Glass Company is here to
              help. We specialize in creating functional, elegant, and timeless
              glass solutions tailored to your vision. Based in Dubai, we
              collaborate with clients locally and internationally to deliver
              high-quality results with a strong focus on design and
              performance.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-10 mt-12 text-sm text-gray-600">
            <span className="cursor-pointer hover:text-black">Behance</span>
            <span className="cursor-pointer hover:text-black">Instagram</span>
            <span className="cursor-pointer hover:text-black">Telegram</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Info */}
          <div className="grid grid-cols-2 gap-6 text-sm text-[#3e3a34]">
            <div>
              <p className="font-medium mb-1">Contact</p>
              <p>+971-456-789</p>
            </div>
            <div>
              <p className="font-medium mb-1">Email</p>
              <p>www.theglasscompany.com</p>
            </div>
            <div>
              <p className="font-medium mb-1">Address</p>
              <p>
                123 Anywhere St. Any City,
                <br /> St 1234
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Website</p>
              <p>hello@glasscompany.com</p>
            </div>
          </div>

          {/* Calendly */}
          <div className="bg-[#eae6df] p-4">
            <InlineWidget
              url="https://calendly.com/info-spokdigital"
              styles={{ height: "350px" }}
            />
          </div>

          {/* CTA */}
          <button className="w-full bg-[#5a4e3b] text-white py-3 text-sm tracking-wide hover:opacity-90 transition">
            CALL NOW
          </button>
        </div>
      </div>
    </section>
  );
}
