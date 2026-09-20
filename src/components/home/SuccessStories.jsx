"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  Car,
  Bike,
  PawPrint,
  Star,
  ShoppingBag,
} from "lucide-react";

const stories = [
  {
    title: "Business Expansion",
    name: "Rahim Ahmed",
    desc: "Found the perfect supplier for our startup needs. The transaction was smooth and professional.",
    img: "https://images.pexels.com/photos/7578901/pexels-photo-7578901.jpeg",
    icon: Handshake,
  },
  {
    title: "Dream Ride",
    name: "Sarah Jenkins",
    desc: "I finally bought my dream car at an unbeatable price. The platform made the whole process simple.",
    img: "https://images.pexels.com/photos/5622304/pexels-photo-5622304.jpeg",
    icon: Car,
  },
  {
    title: "Commute Simplified",
    name: "David Chen",
    desc: "Upgraded to a premium cycle for my daily commute. It saves me time and keeps me moving.",
    img: "https://images.pexels.com/photos/4828865/pexels-photo-4828865.jpeg",
    icon: Bike,
  },
  {
    title: "New Best Friend",
    name: "Elena Rodriguez",
    desc: "Found this adorable kitten through the pet category. The seller was kind and helpful throughout.",
    img: "https://images.pexels.com/photos/15794461/pexels-photo-15794461.jpeg",
    icon: PawPrint,
  },
  {
    title: "Perfect Upgrade",
    name: "Michael Carter",
    desc: "Found exactly what I needed without spending more than planned. The experience was incredibly smooth.",
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    icon: ShoppingBag,
  },
  {
    title: "A Great Find",
    name: "Nadia Williams",
    desc: "I discovered a beautiful item from a local seller and the entire buying experience felt effortless.",
    img: "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg",
    icon: Handshake,
  },
];

const SuccessStories = () => {
  // Duplicate the stories so the train can continuously loop.
  const duplicatedStories = [...stories, ...stories];

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-red-500/[0.035] blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-red-400/[0.025] blur-[120px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      </div>

      {/* Heading */}
      <motion.div
        className="relative z-10 mx-auto mb-14 max-w-7xl px-6 text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-red-400/70">
          Real experiences
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Our Success Stories
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-500">
          Discover how buyers and sellers are finding better opportunities
          through ReSell Hub.
        </p>
      </motion.div>

      {/* Train viewport */}
      <div className="relative z-10 overflow-hidden">
        {/* Side fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-zinc-950 to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-zinc-950 to-transparent md:w-40" />

        <motion.div
          className="flex w-max gap-6 pl-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            opacity: {
              duration: 0.8,
              ease: "easeOut",
            },
            x: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Actual moving train */}
          <motion.div
            className="flex w-max gap-6"
            initial={{ x: 0 }}
            whileInView={{
              x: ["0%", "-50%"],
            }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              x: {
                duration: 38,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 1.8,
              },
            }}
          >
            {duplicatedStories.map((story, index) => {
              const Icon = story.icon;

              return (
                <motion.article
                  key={`${story.title}-${index}`}
                  className="
                    group
                    relative
                    w-[310px]
                    shrink-0
                    overflow-hidden
                    rounded-[24px]
                    border border-white/[0.07]
                    bg-white/[0.025]
                    shadow-[0_25px_70px_rgba(0,0,0,0.35)]
                    backdrop-blur-2xl
                    md:w-[350px]
                  "
                  initial={{
                    opacity: 0,
                    y: 35,
                    scale: 0.96,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: Math.min(index * 0.08, 0.7),
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  {/* Glass reflection */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-32
                      bg-gradient-to-b
                      from-white/[0.055]
                      to-transparent
                      opacity-70
                    "
                  />

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={story.img}
                      alt={story.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-110
                      "
                    />

                    {/* Image shade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                    {/* Image reflection */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.08] to-transparent" />

                    {/* Category icon */}
                    <div
                      className="
                        absolute
                        bottom-4
                        left-4
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/[0.12]
                        bg-black/40
                        text-red-400
                        shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                        backdrop-blur-xl
                      "
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Top shine */}
                    <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />

                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                        Buyer story
                      </span>

                      <div className="flex gap-0.5 text-amber-300/80">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={13}
                            fill="currentColor"
                            strokeWidth={0}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                      {story.title}
                    </h3>

                    <p className="min-h-[72px] text-sm leading-6 text-zinc-500">
                      {story.desc}
                    </p>

                    <div className="mt-5 flex items-center gap-3 border-t border-white/[0.06] pt-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-xs font-semibold text-white">
                        {story.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-zinc-300">
                          {story.name}
                        </p>

                        <p className="mt-0.5 text-[9px] uppercase tracking-wider text-zinc-600">
                          Verified buyer
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom red reflection */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-1/2
                      h-px
                      w-2/3
                      -translate-x-1/2
                      bg-gradient-to-r
                      from-transparent
                      via-red-500/30
                      to-transparent
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Small bottom spacing */}
      <div className="relative z-10 mx-auto mt-12 h-px max-w-5xl bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
    </section>
  );
};

export default SuccessStories;

