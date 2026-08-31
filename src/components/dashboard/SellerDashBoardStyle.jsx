'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Package,
    ShoppingCart,
    DollarSign,
    TrendingUp,
} from 'lucide-react';

const SellerDashBoardStyle = ({ myOrdersData, myProducts }) => {
    const totalRevenue = myOrdersData.reduce((acc, order) => {
        return acc + (parseFloat(order.priceId) || 0);
    }, 0);

    const stats = [
        {
            label: 'Total Products',
            value: myProducts.length,
            description: 'Listed products',
            icon: Package,
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            border: 'hover:border-blue-500/30',
            glow: 'bg-blue-500/10',
        },
        {
            label: 'Orders Received',
            value: myOrdersData.length,
            description: 'Processed orders',
            icon: ShoppingCart,
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            border: 'hover:border-emerald-500/30',
            glow: 'bg-emerald-500/10',
        },
        {
            label: 'Total Revenue',
            value: `$${totalRevenue.toLocaleString()}`,
            description: 'Total earnings',
            icon: DollarSign,
            color: 'text-amber-400',
            bg: 'bg-amber-500/10',
            border: 'hover:border-amber-500/30',
            glow: 'bg-amber-500/10',
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.96,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.45,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="min-h-full p-5 text-white sm:p-8">

            {/* ================= Header ================= */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <p className="mb-1 text-sm font-medium text-zinc-500">
                    Overview
                </p>

                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                    Seller Dashboard
                </h1>

                <p className="mt-2 text-sm text-zinc-500">
                    Keep track of your products, orders, and earnings.
                </p>
            </motion.div>


            {/* ================= Stats ================= */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <motion.div
                            key={stat.label}
                            variants={cardVariants}
                            whileHover={{
                                y: -5,
                                transition: { duration: 0.2 },
                            }}
                            className={`group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 ${stat.border}`}
                        >

                            {/* Background Glow */}
                            <div
                                className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125 ${stat.glow}`}
                            />

                            <div className="relative flex items-center justify-between gap-4">

                                {/* Information */}
                                <div className="min-w-0 flex-1">

                                    <p className="text-sm font-medium text-zinc-500">
                                        {stat.label}
                                    </p>

                                    <h2
                                        className={`mt-2 truncate text-2xl font-black tracking-tight sm:text-3xl ${stat.label === 'Total Revenue'
                                                ? 'text-amber-400'
                                                : 'text-white'
                                            }`}
                                        title={String(stat.value)}
                                    >
                                        {stat.value}
                                    </h2>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        {stat.description}
                                    </p>

                                </div>


                                {/* Icon */}
                                <div
                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/5 ${stat.bg}`}
                                >
                                    <Icon
                                        className={`h-6 w-6 ${stat.color}`}
                                    />
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>


            {/* ================= Performance Summary ================= */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    delay: 0.4,
                }}
                className="group relative mt-6 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-xl backdrop-blur-xl sm:p-8"
            >

                {/* Green Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-emerald-500/5 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/10" />

                <div className="relative">

                    {/* Header */}
                    <div className="mb-5 flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10">
                            <TrendingUp className="h-5 w-5 text-emerald-400" />
                        </div>

                        <div>
                            <h3 className="font-bold text-white">
                                Performance Summary
                            </h3>

                            <p className="text-xs text-zinc-600">
                                Your current marketplace activity
                            </p>
                        </div>

                    </div>


                    {/* Summary */}
                    <p className="text-sm leading-7 text-zinc-400">
                        You have listed{' '}
                        <span className="font-bold text-white">
                            {myProducts.length}
                        </span>{' '}
                        {myProducts.length === 1 ? 'item' : 'items'} and
                        successfully processed{' '}
                        <span className="font-bold text-white">
                            {myOrdersData.length}
                        </span>{' '}
                        {myOrdersData.length === 1 ? 'order' : 'orders'}.
                    </p>


                    {/* Mini Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

                        <div className="rounded-xl border border-zinc-800/70 bg-white/[0.02] p-4">
                            <p className="text-xs text-zinc-600">
                                Products
                            </p>

                            <p className="mt-1 text-lg font-bold text-blue-400">
                                {myProducts.length}
                            </p>
                        </div>

                        <div className="rounded-xl border border-zinc-800/70 bg-white/[0.02] p-4">
                            <p className="text-xs text-zinc-600">
                                Orders
                            </p>

                            <p className="mt-1 text-lg font-bold text-emerald-400">
                                {myOrdersData.length}
                            </p>
                        </div>

                        <div className="col-span-2 rounded-xl border border-zinc-800/70 bg-white/[0.02] p-4 sm:col-span-1">
                            <p className="text-xs text-zinc-600">
                                Revenue
                            </p>

                            <p className="mt-1 truncate text-lg font-bold text-amber-400">
                                ${totalRevenue.toLocaleString()}
                            </p>
                        </div>

                    </div>

                </div>
            </motion.div>

        </div>
    );
};

export default SellerDashBoardStyle;