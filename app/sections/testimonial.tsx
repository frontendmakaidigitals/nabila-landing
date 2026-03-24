"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();

  const testimonials = [
    {
      image: "/testimonial/img-1.jpg",
      quote:
        "The craftsmanship exceeded every expectation. Our home feels completely transformed — light pours through beautifully and the finish is immaculate.",
      name: "Sarah Mitchell",
      role: "Residential Client",
    },
    {
      image: "/testimonial/img-2.jpg",
      quote:
        "From concept to installation, the team was precise and professional. The glass facade on our office building has drawn compliments from every visitor.",
      name: "James Okonkwo",
      role: "Commercial Director",
    },
    {
      image: "/testimonial/img-3.jpg",
      quote:
        "Attention to detail that's genuinely rare. The bespoke glass partitions they designed for our showroom are exactly what we envisioned.",
      name: "Elena Vasquez",
      role: "Interior Designer",
    },
    {
      image: "/testimonial/img-4.jpg",
      quote:
        "Reliable, elegant, and on budget. Working with this team on our retail fit-out was a seamless experience start to finish.",
      name: "Tom Hargreaves",
      role: "Retail Developer",
    },
  ];

  return (
    <section className=" mt-20 ">
      <div className="container mx-auto">
        <div className="flex items-end lg:items-center justify-end mb-10 gap-6">
          <h2 className="text-4xl md:text-5xl font-light text-[#4A4233]">
            <span className="mr-4">05</span> Testimonials
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => api?.scrollPrev()}
              className="p-2 transition hover:bg-gray-200"
            >
              <ArrowLeft className="size-10  text-[#4A4233] stroke-1" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              className="p-2 hover:bg-gray-200 transition"
            >
              <ArrowRight className="size-10 text-[#4A4233] stroke-1" />
            </button>
          </div>
        </div>

        <Carousel setApi={setApi} opts={{ align: "start", loop: false }}>
          <CarouselContent className="">
            {testimonials.map((item, i) => (
              <CarouselItem key={i} className="basis-3/4">
                <div className="grid  grid-cols-1 md:grid-cols-2 items-center gap-6">
                  <div className="  relative h-[250px]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-xs text-gray-500">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
