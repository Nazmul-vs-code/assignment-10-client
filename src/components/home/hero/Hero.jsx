"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import HeroScene from "./HeroScene";
import "./Hero.css";

const Hero = () => {
  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-content">
          <motion.h3
            className="hero-logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-logo-resel">Resel</span>
            <span className="hero-logo-hub">Hub</span>
          </motion.h3>

          <motion.h2
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Your modern
            <br />
            business hub
            <br />
            for everything resale.
          </motion.h2>
        </div>

        {/* RIGHT */}
        <div className="hero-visual">
          {/* Mouse-following water */}
          <motion.div
            className="hero-water-ball"
            animate={{
              left: `${mouse.x}%`,
              top: `${mouse.y}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 20,
              mass: 1.2,
            }}
          >
            <div className="water-ball-highlight" />
            <div className="water-ball-inner" />
          </motion.div>

          <HeroScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;