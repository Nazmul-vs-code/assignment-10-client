"use client";

import { motion } from "framer-motion";

import HeroScene from "./HeroScene";
import "./Hero.css";

const Hero = () => {
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
          <HeroScene />
        </div>
      </div>
    </section>
  );
};

export default Hero;