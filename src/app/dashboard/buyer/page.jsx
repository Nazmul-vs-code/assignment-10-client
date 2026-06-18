import React from 'react';
import { getJwtToken } from '@/lib/api/getToken';
import { getMyPayments } from '@/lib/api/payment';
import { getWishlist } from '@/lib/api/wishlist';
import { DashboardRadarChart } from '@/components/dashboard/DashboardRadarChart';

const BuyerDashboardHomePage = async () => {
    const token = await getJwtToken();
    const payments = await getMyPayments(token);
    const wishlist = await getWishlist(token);

    // 1. Get unique categories from both payments and wishlist
    const allCategories = [
        ...new Set([...payments, ...wishlist].map(item => item.productCategory || "Product"))
    ];

    // 2. Transform data for Radar Chart
    const chartData = allCategories.map(cat => ({
        category: cat,
        amount: payments.filter(p => (p.productCategory || "Product") === cat).reduce((acc, curr) => acc + Number(curr.priceId), 0),
        wishlist: wishlist.filter(w => (w.productCategory || "Product") === cat).length,
    }));

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Detailed Payment History List */}
                <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
                    <h2 className="text-zinc-400 mb-4">Payment Breakdown</h2>
                    <div className="space-y-4">
                        {payments.map((p) => (
                            <div key={p._id} className="p-4 bg-black rounded-xl border border-zinc-800 text-sm">
                                <p className="font-bold text-emerald-500">${p.priceId}</p>
                                <p className="text-zinc-400">Status: {p.status}</p>
                                <p className="text-zinc-500 text-[10px]">Session: {p.sessionId.slice(0, 20)}...</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Radar Chart */}
                <DashboardRadarChart data={chartData} />
            </div>
        </div>
    );
};

export default BuyerDashboardHomePage;