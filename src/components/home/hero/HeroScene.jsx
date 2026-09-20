"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Premium Headphones",
    category: "Electronics",
    price: "$89",
    image:
      "https://images.pexels.com/photos/15487609/pexels-photo-15487609.jpeg",
  },
  {
    id: 2,
    title: "Classic Red Bag",
    category: "Fashion",
    price: "$45",
    image:
      "https://images.pexels.com/photos/22434764/pexels-photo-22434764.jpeg",
  },
  {
    id: 3,
    title: "Lovely Companion",
    category: "Lifestyle",
    price: "$35",
    image:
      "https://images.pexels.com/photos/38728868/pexels-photo-38728868.jpeg",
  },
];

const HeroScene = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className="hero-scene">
      {/* 3D WATER BALLS */}
      <div className="scene-water-ball scene-water-ball-one" />
      <div className="scene-water-ball scene-water-ball-two" />
      <div className="scene-water-ball scene-water-ball-three" />

      {/* PRODUCT CARDS */}
      <div className="hero-card-stack">
        {products.map((product, index) => {
          const active = activeCard === product.id;

          return (
            <motion.article
              key={product.id}
              className={`hero-product-card hero-product-card-${index + 1}`}
              onMouseEnter={() => setActiveCard(product.id)}
              onMouseLeave={() => setActiveCard(null)}
              animate={{
                scale: active ? 1.08 : 1,
                x: active ? -15 : 0,
                y: active ? -25 : 0,
                rotateZ: active ? 0 : index === 0 ? -7 : index === 1 ? 1 : 7,
                z: active ? 100 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
            >
              <div className="hero-card-image">
                <img src={product.image} alt={product.title} />

                <div className="hero-card-number">
                  0{index + 1}
                </div>
              </div>

              <div className="hero-card-content">
                <span>{product.category}</span>

                <h3>{product.title}</h3>

                <strong>{product.price}</strong>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default HeroScene;