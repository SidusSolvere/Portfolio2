import * as React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import render1 from "../assets/certi/1.png";
import render2 from "../assets/certi/2.png";
import render3 from "../assets/certi/3.png";
import render4 from "../assets/certi/4.png";
import render5 from "../assets/certi/5.png";
import render6 from "../assets/certi/6.png";
import render7 from "../assets/certi/7.png";
import render8 from "../assets/certi/8.png";
import render9 from "../assets/certi/9.png";
import render10 from "../assets/certi/10.png";
import render11 from "../assets/certi/11.png";
import render12 from "../assets/certi/12.png";
import render13 from "../assets/certi/13.png";
import render14 from "../assets/certi/14.png";
import render15 from "../assets/certi/15.png";
import render16 from "../assets/certi/16.png";
import render17 from "../assets/certi/17.png";
import render18 from "../assets/certi/18.png";

const items = [
  { image: render1, text: "Full scene render" },
  { image: render2, text: "Custom Character" },
  { image: render3, text: "Custom scene" },
  { image: render4, text: "Donut" },
  { image: render5, text: "Grenade" },
  { image: render6, text: "Grenade" },
  { image: render7, text: "Grenade" },
  { image: render8, text: "Grenade" },
  { image: render9, text: "Grenade" },
  { image: render10, text: "Grenade" },
  { image: render11, text: "Grenade" },
  { image: render12, text: "Grenade" },
  { image: render13, text: "Grenade" },
  { image: render14, text: "Grenade" },
  { image: render15, text: "Grenade" },
  { image: render16, text: "Grenade" },
  { image: render17, text: "Grenade" },
  { image: render18, text: "Grenade" },
];

export default function PdfCarousel() {
  const [api, setApi] = React.useState(null);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [api]);
return (
  <div className="pt-32 pb-20">
    <h2
      className="
        text-center
        text-5xl font-bold tracking-wide
        text-transparent
        bg-clip-text
        bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400
        drop-shadow-[0_0_20px_rgba(0,255,255,0.5)]
        mb-16
      "
    >
      Certificates
    </h2>

    <div className=" mx-auto px-8">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4"
            >
              <div className="p-4">
                <a href={item.image} target="_blank">
                  <img
                    src={item.image}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={() => api?.scrollPrev()}
          className="w-10 h-10 flex items-center justify-center rounded-full border shadow-md"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={() => api?.scrollNext()}
          className="w-10 h-10 flex items-center justify-center rounded-full border shadow-md"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  </div>
);
}
