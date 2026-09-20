"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { getPublicProducts } from "@/lib/api/products";

import "./PopulerCategoryChart.css";

const COLORS = [
  "#ef4444",
  "#f87171",
  "#fb923c",
  "#fca5a5",
  "#be123c",
];

const PopulerCategoryChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const products = await getPublicProducts();

        const categoryCounts = products.reduce((acc, product) => {
          const category = product.category || "Uncategorized";

          acc[category] = (acc[category] || 0) + 1;

          return acc;
        }, {});

        const formattedData = Object.keys(categoryCounts)
          .map((key) => ({
            name: key,
            value: categoryCounts[key],
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching category data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndProcessData();
  }, []);

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="popular-category-card">
        <div className="popular-category-loading">
          <motion.div
            className="category-loading-chart"
            animate={{
              scale: [1, 1.06, 1],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div />
          </motion.div>

          <div className="category-loading-list">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                className="category-loading-row"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: item * 0.12,
                }}
              >
                <span />
                <div />
                <b />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      className="popular-category-card"
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Decorative liquid orb */}

      <motion.div
        className="category-liquid-orb"
        animate={{
          y: [0, -12, 0],
          x: [0, 8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="popular-category-header">
        <div>
          <span className="popular-category-eyebrow">
            Marketplace Overview
          </span>

          <h2>Popular Categories</h2>
        </div>

        <div className="category-live-indicator">
          <span />
          Live
        </div>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="popular-category-content">
        {/* LEFT — CHART */}

        <motion.div
          className="popular-category-chart"
          initial={{
            opacity: 0,
            x: -35,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="57%"
                outerRadius="82%"
                paddingAngle={4}
                dataKey="value"
                stroke="rgba(5, 5, 5, 0.8)"
                strokeWidth={3}
                animationBegin={150}
                animationDuration={1200}
                animationEasing="ease-out"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                cursor={false}
                contentStyle={{
                  background: "rgba(15, 15, 15, 0.94)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  color: "#ffffff",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(12px)",
                }}
                itemStyle={{
                  color: "#ffffff",
                }}
                labelStyle={{
                  color: "#ffe58a",
                  marginBottom: "4px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Center information */}

          <div className="popular-category-center">
            <span>Total</span>

            <strong>
              {data.reduce((total, item) => total + item.value, 0)}
            </strong>

            <small>Products</small>
          </div>
        </motion.div>

        {/* RIGHT — CATEGORY LIST */}

        <div className="popular-category-list">
          {data.map((category, index) => (
            <motion.div
              key={category.name}
              className="popular-category-item"
              initial={{
                opacity: 0,
                x: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.25 + index * 0.1,
              }}
              whileHover={{
                x: 5,
              }}
            >
              <div
                className="category-color"
                style={{
                  background: COLORS[index % COLORS.length],
                  boxShadow: `0 0 12px ${COLORS[index % COLORS.length]}55`,
                }}
              />

              <div className="category-item-info">
                <span className="category-item-number">
                  0{index + 1}
                </span>

                <div>
                  <h3>{category.name}</h3>

                  <p>
                    {category.value}{" "}
                    {category.value === 1 ? "product" : "products"}
                  </p>
                </div>
              </div>

              <strong>{category.value}</strong>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PopulerCategoryChart;