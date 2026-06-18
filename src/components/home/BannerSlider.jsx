"use client";

import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@heroui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Capture Memories",
    desc: "Find vintage cameras that tell a story.",
    img: "https://images.pexels.com/photos/13766950/pexels-photo-13766950.jpeg",
    cta: "Shop Cameras"
  },
  {
    title: "Ride with History",
    desc: "Reliable, pre-loved cycles for your commute.",
    img: "https://images.pexels.com/photos/33028838/pexels-photo-33028838.jpeg",
    cta: "Shop Cycles"
  },
  {
    title: "Timeless Classics",
    desc: "Restored cars for the true collector.",
    img: "https://images.pexels.com/photos/29879059/pexels-photo-29879059.jpeg",
    cta: "Shop Vehicles"
  }
];

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  return (
    <div className="relative w-full h-[500px] mt-6 rounded-3xl overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-[0_0_100%] h-full">
            <img src={slide.img} className="w-full h-full object-cover" />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-12 md:px-24">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                {slide.desc}
              </p>
              <Button size="lg" className="w-fit bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8">
                {slide.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
        <ChevronLeft size={24} />
      </button>
      <button onClick={() => emblaApi?.scrollNext()} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}