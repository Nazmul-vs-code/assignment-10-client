'use client';

import React, { useEffect, useState } from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { getPublicProducts } from '@/lib/api/products';

const COLORS = ['#ef4444', '#f87171', '#fb923c', '#fca5a5', '#be123c']; // Soft reddish palette

const PopulerCategoryChart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndProcessData = async () => {
            try {
                const products = await getPublicProducts();
                const categoryCounts = products.reduce((acc, product) => {
                    const cat = product.category || 'Uncategorized';
                    acc[cat] = (acc[cat] || 0) + 1;
                    return acc;
                }, {});

                const formattedData = Object.keys(categoryCounts).map((key) => ({
                    name: key,
                    value: categoryCounts[key]
                }));

                setData(formattedData);
            } catch (error) {
                console.error("Error fetching category data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAndProcessData();
    }, []);

    if (loading) return <div className="text-zinc-500 text-center py-10">Loading chart...</div>;

    return (
        <div className="h-[350px] w-full p-4 bg-zinc-900 rounded-xl border border-zinc-800">
            {/* Colorful Soft-Red Heading */}
            <h2 className="text-red-400 font-bold mb-6 text-center text-xl tracking-wide uppercase drop-shadow-sm">
                Popular Categories
            </h2>

            <ResponsiveContainer width="100%" height="90%">
                <PieChart>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        label={({ name }) => name} // Shows name directly on the chart
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '8px' }} 
                    />
                    <Legend 
                        verticalAlign="bottom" 
                        height={36}
                        formatter={(value) => <span className="text-zinc-300 font-medium">{value}</span>}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PopulerCategoryChart;