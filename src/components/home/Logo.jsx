"use client";

import { motion } from "framer-motion";
import { Repeat } from "lucide-react";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 font-bold cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 180 }}
        className="p-1.5 bg-emerald-500 rounded-lg text-white"
      >
        <Repeat size={20} />
      </motion.div>

      <span className="text-2xl tracking-tighter">
        <span className="text-emerald-600">Re</span>
        <span className="text-orange-500">Sell</span>
        <span className="text-indigo-600">Hub</span>
      </span>
    </motion.div>
  );
};

export default Logo;