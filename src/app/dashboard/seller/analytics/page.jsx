'use client';

import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getJwtToken } from '@/lib/api/getToken';
import { getMyOrders } from '@/lib/api/myOrders';

const AnalyticsPage = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const token = await getJwtToken();
            const data = await getMyOrders(token);
            setOrders(data);
            setLoading(false);
        };
        fetchData();
    }, []);

    if (loading) return <div className="p-10 text-white">Loading Analytics...</div>;

    // Data Processing
    const totalRevenue = orders.reduce((acc, o) => acc + parseFloat(o.priceId || 0), 0);
    const categories = orders.reduce((acc, o) => {
        acc[o.productCategory] = (acc[o.productCategory] || 0) + 1;
        return acc;
    }, {});
    
    const pieData = Object.entries(categories).map(([name, value]) => ({ name, value }));
    const COLORS = ['#FF8042', '#00C49F', '#0088FE'];

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Sales Analytics</h1>

            {/* Text Summary Section */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 mb-8">
                <h2 className="text-lg font-bold mb-4 border-b border-zinc-800 pb-2">Inventory Summary</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-zinc-400 text-sm">Total Revenue Generated</p>
                        <p className="text-xl font-bold text-emerald-400">${totalRevenue.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-zinc-400 text-sm">Total Orders Processed</p>
                        <p className="text-xl font-bold">{orders.length}</p>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-zinc-400 text-sm mb-2">Category Breakdown:</p>
                    <ul className="space-y-1">
                        {pieData.map((item, i) => (
                            <li key={i} className="flex justify-between border-b border-zinc-800 py-1">
                                <span>{item.name}</span>
                                <span className="font-bold">{item.value} Item(s)</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 h-80">
                    <h3 className="mb-4 text-sm font-bold uppercase text-zinc-500">Revenue per Product</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={orders}>
                            <XAxis dataKey="productTitle" hide />
                            <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                            <Bar dataKey="priceId" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 h-80">
                    <h3 className="mb-4 text-sm font-bold uppercase text-zinc-500">Category Distribution</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <PieChart>
                            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                                {pieData.map((entry, index) => (
                                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsPage;