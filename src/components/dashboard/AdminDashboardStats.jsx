// components/admin/DashboardStats.jsx
'use client';
import { Persons } from '@gravity-ui/icons';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AdminDashboardStats = ({ stats, orders }) => {
    // Transform orders into chart data (e.g., grouping by category)
    const data = [
        { name: 'Users', count: stats.totalUsers },
        { name: 'Products', count: stats.totalProducts },
        { name: 'Orders', count: stats.totalOrders },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                    <p className="text-zinc-500"><Persons className='text-red-600' /> Total Users</p>
                    <h2 className="text-3xl font-bold">{stats.totalUsers}</h2>
                </div>
                <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                    <p className="text-zinc-500"><BiMoneyWithdraw /> Total Revenue</p>
                    <h2 className="text-3xl font-semibold text-emerald-500">
                         {stats.totalRevenue}</h2>
                </div>
            </div>

            {/* Recharts Bar Graph */}
            <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 h-64">
                <h3 className="mb-4 font-semibold">System Distribution</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" stroke="#71717a" />
                        <YAxis stroke="#71717a" />
                        <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                        <Bar dataKey="count" fill="#3b82f6">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 2 ? '#10b981' : '#3b82f6'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashboardStats;