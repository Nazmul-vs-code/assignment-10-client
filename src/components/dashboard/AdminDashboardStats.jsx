'use client';

import { Persons } from '@gravity-ui/icons';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { BarChart3 } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';

const AdminDashboardStats = ({ stats }) => {

    const data = [
        {
            name: 'Users',
            count: stats.totalUsers,
        },
        {
            name: 'Products',
            count: stats.totalProducts,
        },
        {
            name: 'Orders',
            count: stats.totalOrders,
        },
    ];

    return (
        <div className="space-y-6">

            {/* ================= Stats Cards ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Total Users */}
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-600/40 hover:shadow-red-950/20">

                    {/* Red Glow */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-600/10 blur-3xl transition-all duration-500 group-hover:bg-red-600/20" />

                    <div className="relative flex items-start justify-between gap-4">

                        <div className="min-w-0">

                            <p className="text-sm font-medium text-zinc-500">
                                Total Users
                            </p>

                            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                                {stats.totalUsers}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Registered users
                            </p>

                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-500 shadow-inner">
                            <Persons className="text-xl" />
                        </div>

                    </div>
                </div>


                {/* Total Revenue */}
                <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-emerald-950/20">

                    {/* Emerald Glow */}
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20" />

                    <div className="relative flex items-start justify-between gap-4">

                        <div className="min-w-0 flex-1">

                            <p className="text-sm font-medium text-zinc-500">
                                Total Revenue
                            </p>

                            <h2
                                className="mt-2 truncate text-2xl font-bold tracking-tight text-emerald-400 sm:text-3xl"
                                title={`$${Number(stats.totalRevenue || 0).toLocaleString()}`}
                            >
                                ${Number(stats.totalRevenue || 0).toLocaleString()}
                            </h2>

                            <p className="mt-1 text-xs text-zinc-600">
                                Total earnings
                            </p>

                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 shadow-inner">
                            <BiMoneyWithdraw className="text-2xl" />
                        </div>

                    </div>
                </div>

            </div>


            {/* ================= Chart ================= */}
            <div className="relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 shadow-xl backdrop-blur-xl sm:p-6">

                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-500/5 blur-3xl" />

                {/* Chart Header */}
                <div className="relative mb-6 flex items-center justify-between gap-4">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                            <BarChart3 size={20} />
                        </div>

                        <div>
                            <h3 className="font-semibold text-white">
                                System Distribution
                            </h3>

                            <p className="mt-0.5 text-xs text-zinc-500">
                                Users, products & orders
                            </p>
                        </div>

                    </div>

                    <div className="hidden rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 text-xs text-zinc-500 sm:block">
                        Overview
                    </div>

                </div>


                {/* Chart */}
                <div className="relative h-64 w-full">

                    <ResponsiveContainer width="100%" height="100%">

                        <BarChart
                            data={data}
                            margin={{
                                top: 5,
                                right: 5,
                                left: -20,
                                bottom: 5,
                            }}
                            barCategoryGap="25%"
                        >

                            <XAxis
                                dataKey="name"
                                stroke="#71717a"
                                tick={{
                                    fill: '#a1a1aa',
                                    fontSize: 12,
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <YAxis
                                stroke="#71717a"
                                tick={{
                                    fill: '#71717a',
                                    fontSize: 11,
                                }}
                                axisLine={false}
                                tickLine={false}
                            />

                            <Tooltip
                                cursor={{
                                    fill: 'rgba(255,255,255,0.03)',
                                }}
                                contentStyle={{
                                    backgroundColor: 'rgba(24, 24, 27, 0.95)',
                                    border: '1px solid rgba(63, 63, 70, 0.8)',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    backdropFilter: 'blur(12px)',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                }}
                                labelStyle={{
                                    color: '#a1a1aa',
                                    marginBottom: '4px',
                                }}
                            />

                            <Bar
                                dataKey="count"
                                radius={[8, 8, 2, 2]}
                                maxBarSize={65}
                            >

                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={
                                            index === 0
                                                ? '#ef4444'
                                                : index === 1
                                                    ? '#3b82f6'
                                                    : '#10b981'
                                        }
                                        fillOpacity={0.85}
                                    />
                                ))}

                            </Bar>

                        </BarChart>

                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default AdminDashboardStats;