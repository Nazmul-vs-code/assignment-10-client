'use client'; // This tells Next.js it's a client component

import React from 'react';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';

const SellerDashBoardStyle = ({ myOrdersData, myProducts }) => {
    const totalRevenue = myOrdersData.reduce((acc, order) => {
        return acc + (parseFloat(order.priceId) || 0);
    }, 0);

    const stats = [
        { label: 'Total Products', value: myProducts.length, icon: Package, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'Orders Received', value: myOrdersData.length, icon: ShoppingCart, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-amber-500', bg: 'bg-amber-500/10' },
    ];

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-black mb-8">
                Seller Dashboard
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center gap-4 hover:border-zinc-700 transition"
                    >
                        <div className={`p-4 rounded-xl ${stat.bg}`}>
                            <stat.icon className={`w-8 h-8 ${stat.color}`} />
                        </div>
                        <div>
                            <p className="text-zinc-400 text-sm">{stat.label}</p>
                            <h2 className="text-3xl font-black">{stat.value}</h2>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl"
            >
                <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-emerald-500" />
                    <h3 className="font-bold text-lg">Performance Summary</h3>
                </div>
                <p className="text-zinc-400">
                    You have listed <span className="text-white font-bold">{myProducts.length}</span> items 
                    and successfully processed <span className="text-white font-bold">{myOrdersData.length}</span> orders.
                </p>
            </motion.div>
        </div>
    );
};

export default SellerDashBoardStyle;