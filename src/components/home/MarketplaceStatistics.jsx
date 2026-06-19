'use client';

import React from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Package, Users, ShoppingBag, CheckCircle } from 'lucide-react';

const data = [
  { name: 'Products', uv: 590, pv: 800, amt: 1400 },
  { name: 'Sellers', uv: 868, pv: 967, amt: 1506 },
  { name: 'Buyers', uv: 1397, pv: 1098, amt: 989 },
  { name: 'Orders', uv: 1480, pv: 1200, amt: 1228 },
];

const stats = [
  { label: 'Total Products', value: '1,240', icon: <Package size={24} />, color: 'text-blue-400' },
  { label: 'Total Sellers', value: '85', icon: <Users size={24} />, color: 'text-red-400' },
  { label: 'Total Buyers', value: '3,420', icon: <Users size={24} />, color: 'text-blue-400' },
  { label: 'Completed Orders', value: '2,890', icon: <CheckCircle size={24} />, color: 'text-red-400' },
];

const MarketplaceStatistics = () => {
    return (
        <section className="p-6 bg-zinc-950 rounded-2xl border border-zinc-800">
            <h2 className="text-red-400 font-bold text-2xl mb-8 uppercase tracking-wide text-center">Marketplace Overview</h2>
            
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, i) => (
                    <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center gap-4">
                        <div className={`${stat.color} p-3 bg-zinc-950 rounded-lg`}>{stat.icon}</div>
                        <div>
                            <p className="text-zinc-500 text-sm">{stat.label}</p>
                            <p className="text-white text-xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Composed Chart */}
            <div className="h-[400px] w-full bg-zinc-900 p-6 rounded-xl border border-zinc-800">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart layout="vertical" data={data}>
                        <CartesianGrid stroke="#27272a" strokeDasharray="3 3" />
                        <XAxis type="number" stroke="#a1a1aa" />
                        <YAxis dataKey="name" type="category" stroke="#a1a1aa" />
                        <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                        <Legend />
                        <Area dataKey="amt" fill="#3b82f6" stroke="#3b82f6" fillOpacity={0.2} name="Total Amt" />
                        <Bar dataKey="pv" barSize={20} fill="#ef4444" name="Volume" />
                        <Line dataKey="uv" stroke="#fbbf24" strokeWidth={2} name="Users/Count" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default MarketplaceStatistics;