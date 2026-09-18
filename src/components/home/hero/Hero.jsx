"use client";

import Link from "next/link";
import { ArrowUpRight, ShoppingBag, Store } from "lucide-react";

import HeroScene from "./HeroScene";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      {/* Background atmosphere */}
      <div className="hero-bg-glow hero-bg-glow-left" />
      <div className="hero-bg-glow hero-bg-glow-right" />

      <div className="hero-grid" />

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>THE FUTURE OF RESALE</span>
          </div>

          <h1 className="hero-title">
            Buy. Sell.
            <span> Discover Again.</span>
          </h1>

          <p className="hero-description">
            Discover products you love, sell what you no longer need,
            and experience a smarter way to buy and sell online.
          </p>

          <div className="hero-actions">
            <Link href="/products" className="hero-primary-button">
              <ShoppingBag size={18} />
              <span>Explore Products</span>

              <span className="hero-button-icon">
                <ArrowUpRight size={15} />
              </span>
            </Link>

            <Link href="/dashboard/seller" className="hero-secondary-button">
              <Store size={17} />
              <span>Start Selling</span>
            </Link>
          </div>

          {/* Small stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>10K+</strong>
              <span>Products</span>
            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat">
              <strong>2K+</strong>
              <span>Sellers</span>
            </div>

            <div className="hero-stat-divider" />

            <div className="hero-stat">
              <strong>24/7</strong>
              <span>Marketplace</span>
            </div>
          </div>
        </div>

        {/* 3D Scene */}
        <div className="hero-visual">
          <HeroScene />

          {/* Glass floating labels */}
          <div className="hero-floating-card hero-floating-card-price">
            <span className="hero-floating-label">TRENDING</span>
            <strong>$129</strong>
            <span>Smart deals</span>
          </div>

          <div className="hero-floating-card hero-floating-card-sell">
            <span className="hero-floating-icon">↗</span>
            <div>
              <strong>Sell Faster</strong>
              <span>Reach more buyers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="hero-bottom-fade" />
    </section>
  );
};

export default Hero;