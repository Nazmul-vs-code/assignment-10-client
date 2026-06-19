"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { AlertTriangle, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center p-6 text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        {/* Animated Icon */}
        <motion.div 
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle className="size-24 text-red-600" strokeWidth={1.5} />
        </motion.div>

        {/* 404 Header */}
        <h1 className="text-[120px] font-black text-transparent bg-clip-text bg-gradient-to-b from-red-600 to-red-900 leading-none drop-shadow-2xl">
          404
        </h1>
        
        <h2 className="text-3xl font-bold mt-4">We lost this page</h2>
        <p className="text-neutral-400 mt-4 mb-8 leading-relaxed">
          The road ahead seems to be missing. We searched high and low, but this page has taken a detour. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button 
              color="danger" 
              className="px-8 bg-red-600 hover:bg-red-700 font-semibold"
              startContent={<Home size={18} />}
            >
              Go to Homepage
            </Button>
          </Link>
          
          <Button 
            variant="bordered" 
            className="border-neutral-700 text-neutral-300 hover:bg-neutral-800"
            startContent={<Search size={18} />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}