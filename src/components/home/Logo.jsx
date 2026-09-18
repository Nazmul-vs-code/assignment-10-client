"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react"; // Changed from Repeat

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 font-bold cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 180 }}
        // Removed p-1.5, bg-emerald-500, rounded-lg, text-white
        // Kept only the base motion.div structure and the new icon
      >
        <ShoppingBag size={32} className="text-red-600" /> {/* Increased size and set color to match photo */}
      </motion.div>

      <span className="text-2xl tracking-tighter">
        <span className="text-red-500">Reel</span>
        <span className="text-yellow-500">Hub</span>
      </span>
    </motion.div>
  );
};

export default Logo;