"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Eco-Friendly Marketplace",
    desc: "Join our community of conscious buyers. Give pre-loved items a second life and reduce waste while finding unique treasures.",
    img: "https://images.pexels.com/photos/13766950/pexels-photo-13766950.jpeg",
    cta: "Start Buissiness"
  },
  {
    title: "Verified Quality Gear",
    desc: "From vintage cameras to reliable cycles, every product is vetted for quality. Buy with confidence, sell with ease.",
    img: "https://images.pexels.com/photos/33028838/pexels-photo-33028838.jpeg",
    cta: "Explore Gear"
  },
  {
    title: "Turn Assets into Cash",
    desc: "Clear your space and empower others. List your idle items in minutes and reach thousands of eager local buyers.",
    img: "https://images.pexels.com/photos/29879059/pexels-photo-29879059.jpeg",
    cta: "Sell Now"
  }
];

export default function HeroBanner() {
  // 1. Initialize carousel with the Embla viewport ref
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);

  return (
    <div className="relative w-full h-[500px] mt-6 rounded-3xl overflow-hidden group shadow-2xl">
      <style jsx global>{`
        .embla__viewport { overflow: hidden; height: 100%; width: 100%; }
        .embla__container { display: flex; height: 100%; }
        .embla__slide { flex: 0 0 100%; min-width: 0; position: relative; height: 100%; }
        
        .pendulum_mini { width: 150px; height: 120px; background-color: rgba(248, 198, 207, 0.2); border-radius: 10px; border-top: 8px solid #eee7d5; display: flex; justify-content: center; }
        .ball { height: 25px; width: 25px; border-radius: 50%; background-color: #455681; margin: 0 2px; transform-origin: 50% -100px; position: relative; }
        .ball::before { content: ''; width: 2px; height: 100px; background-color: #fffeff; left: 11px; top: -100px; position: absolute; }
        .ball.first { animation: firstball .9s alternate ease-in infinite; }
        .ball.last { animation: lastball .9s alternate ease-out infinite; }
        @keyframes firstball { 0% { transform: rotate(35deg); } 50% { transform: rotate(0deg); } }
        @keyframes lastball { 50% { transform: rotate(0deg); } 100% { transform: rotate(-35deg); } }
        
        .fizzy-btn { background: black; color: white; padding: 12px 24px; border-radius: 8px; font-weight: bold; font-size: 18px; border: 1px solid rgba(255,255,255,0.2); transition: all 0.3s; }
        .fizzy-btn:hover { transform: scale(1.05); background: linear-gradient(90deg, #ef4444, #3b82f6); }
      `}</style>

      {/* Viewport Ref */}
      <div className="embla__viewport" ref={emblaRef}>
        {/* Slides Container */}
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide">
              <img src={slide.img} className="w-full h-full object-cover" alt={slide.title} />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-12 md:px-24">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter max-w-3xl drop-shadow-md">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed font-light">
                  {slide.desc}
                </p>
                <button className="fizzy-btn w-fit">
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-10 right-10 z-20 scale-[0.4] origin-top-right pointer-events-none opacity-80">
        <div className="pendulum_mini">
          <div className="pendulum_box flex pt-[120px]">
            <div className="ball first"></div><div className="ball"></div><div className="ball"></div><div className="ball"></div><div className="ball last"></div>
          </div>
        </div>
      </div>

      {/* Navigation - Note: using emblaApi?.scrollPrev() correctly now */}
      <button 
        onClick={() => emblaApi && emblaApi.scrollPrev()} 
        className="absolute left-4 top-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => emblaApi && emblaApi.scrollNext()} 
        className="absolute right-4 top-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all z-10"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}