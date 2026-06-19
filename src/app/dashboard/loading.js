// src/app/loading.js (or src/app/dashboard/loading.js)
"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]">
      {/* Animated Red Ring */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="size-16 border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent rounded-full"
      />
      
      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-6 text-red-500 font-bold tracking-widest uppercase text-sm"
      >
        Loading...
      </motion.p>
    </div>
  );
}