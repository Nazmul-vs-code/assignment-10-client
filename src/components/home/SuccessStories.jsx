'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, Car, Bike, PawPrint, Star } from 'lucide-react';

const stories = [
    {
        title: "Business Expansion",
        name: "Rahim Ahmed",
        desc: "Found the perfect supplier for our startup needs. The transaction was smooth and professional.",
        img: "https://images.pexels.com/photos/7578901/pexels-photo-7578901.jpeg",
        icon: <Handshake className="text-red-400" />
    },
    {
        title: "Dream Ride",
        name: "Sarah Jenkins",
        desc: "I finally bought my dream car at an unbeatable price. The platform is truly reliable.",
        img: "https://images.pexels.com/photos/5622304/pexels-photo-5622304.jpeg",
        icon: <Car className="text-red-400" />
    },
    {
        title: "Commute Simplified",
        name: "David Chen",
        desc: "Upgraded to a premium cycle for my daily commute. Saves me time and keeps me fit!",
        img: "https://images.pexels.com/photos/4828865/pexels-photo-4828865.jpeg",
        icon: <Bike className="text-red-400" />
    },
    {
        title: "New Best Friend",
        name: "Elena Rodriguez",
        desc: "Found this adorable kitten through the pet category. The seller was so kind and helpful.",
        img: "https://images.pexels.com/photos/15794461/pexels-photo-15794461.jpeg",
        icon: <PawPrint className="text-red-400" />
    }
];

const SuccessStories = () => {
    const [showStories, setShowStories] = useState(false);

    return (
        <section className="py-20 px-6 bg-zinc-950">
            <h2 className="text-center text-red-400 text-3xl font-bold mb-12 uppercase tracking-wider">
                Our Success Stories
            </h2>

            <div className="flex justify-center mb-16">
                <button 
                    onClick={() => setShowStories(!showStories)}
                    className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-red-900/20 active:scale-95"
                >
                    {showStories ? "Hide success stories" : "Read some of buyer's success storys"}
                </button>
            </div>
            
            <AnimatePresence>
                {showStories && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                            {stories.map((story, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-red-500/50 transition-all group"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img src={story.img} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="p-2 bg-red-950/30 rounded-lg">{story.icon}</div>
                                            <div className="flex text-amber-400"><Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /> <Star size={16} fill="currentColor" /></div>
                                        </div>
                                        <h3 className="text-white font-bold text-lg mb-2">{story.title}</h3>
                                        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{story.desc}</p>
                                        <p className="text-red-400 font-semibold text-sm">— {story.name}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default SuccessStories;