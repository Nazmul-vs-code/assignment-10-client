"use client";

import React from "react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

import {
  Package,
  Users,
  CheckCircle,
} from "lucide-react";

const data = [
  { name: "Products", uv: 590, pv: 800, amt: 1400 },
  { name: "Sellers", uv: 868, pv: 967, amt: 1506 },
  { name: "Buyers", uv: 1397, pv: 1098, amt: 989 },
  { name: "Orders", uv: 1480, pv: 1200, amt: 1228 },
];

const stats = [
  {
    label: "Total Products",
    value: "1,240",
    icon: Package,
    color: "text-red-400",
  },
  {
    label: "Total Sellers",
    value: "85",
    icon: Users,
    color: "text-red-400",
  },
  {
    label: "Total Buyers",
    value: "3,420",
    icon: Users,
    color: "text-red-400",
  },
  {
    label: "Completed Orders",
    value: "2,890",
    icon: CheckCircle,
    color: "text-red-400",
  },
];

const MarketplaceStatistics = () => {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto w-[97%]">
        {/* Heading */}
        <motion.div
    initial={{ opacity: 0, x: -25 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mb-10 text-left"
>
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-red-400/60">
        Marketplace Analytics
    </p>

    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Marketplace Overview
    </h2>
</motion.div>

        {/* KPI CARDS */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.015,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.035]
                  p-5
                  shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                  backdrop-blur-xl
                "
              >
                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/[0.06] to-transparent" />

                <div className="relative flex items-center gap-4">
                  <div
                    className={`
                      ${stat.color}
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/[0.08]
                      bg-black/50
                      shadow-inner
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p className="text-xs text-zinc-500">
                      {stat.label}
                    </p>

                    <p className="mt-1 text-2xl font-bold tracking-tight text-white">
                      {stat.value}
                    </p>
                  </div>
                </div>

                {/* Bottom reflection */}
                <div className="absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-red-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* CHART */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
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
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            h-[400px]
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-zinc-950
            p-4
            shadow-[0_25px_70px_rgba(0,0,0,0.4)]
            backdrop-blur-xl
            md:p-6
          "
        >
          {/* Glass shine */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.035] to-transparent" />

          <div className="relative z-10 h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                data={data}
                margin={{
                  top: 10,
                  right: 20,
                  left: 10,
                  bottom: 10,
                }}
              >
                <CartesianGrid
                  stroke="rgba(255,255,255,0.06)"
                  strokeDasharray="3 5"
                />

                <XAxis
                  type="number"
                  stroke="#52525b"
                  tick={{
                    fill: "#71717a",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  dataKey="name"
                  type="category"
                  stroke="#52525b"
                  tick={{
                    fill: "#a1a1aa",
                    fontSize: 11,
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  cursor={{
                    fill: "rgba(255,255,255,0.025)",
                  }}
                  contentStyle={{
                    background: "rgba(10,10,10,0.94)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px",
                    color: "#fff",
                    boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(12px)",
                  }}
                />

                <Legend
                  wrapperStyle={{
                    color: "#a1a1aa",
                    fontSize: "11px",
                  }}
                />

                <Area
                  dataKey="amt"
                  fill="#ef4444"
                  stroke="#ef4444"
                  fillOpacity={0.08}
                  strokeWidth={2}
                  name="Total Amt"
                  animationDuration={1400}
                  animationEasing="ease-out"
                />

                <Bar
                  dataKey="pv"
                  barSize={18}
                  fill="#ef4444"
                  radius={[0, 4, 4, 0]}
                  name="Volume"
                  animationDuration={1200}
                  animationBegin={200}
                />

                <Line
                  dataKey="uv"
                  stroke="#ffe58a"
                  strokeWidth={2}
                  dot={{
                    r: 3,
                    fill: "#ffe58a",
                    strokeWidth: 0,
                  }}
                  activeDot={{
                    r: 5,
                  }}
                  name="Users / Count"
                  animationDuration={1500}
                  animationBegin={350}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplaceStatistics;