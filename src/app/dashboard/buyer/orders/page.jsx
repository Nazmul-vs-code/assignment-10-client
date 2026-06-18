import { getMyPayments } from '@/lib/api/payment';
import { getJwtToken } from '@/lib/api/getToken';
import React from 'react';
import { Package, CreditCard, Tag } from 'lucide-react';

const BuyerOrderPage = async () => {
    const token = await getJwtToken();
    const orders = await getMyPayments(token);

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-8">My Orders</h1>
            
            {orders.length === 0 ? (
                <p className="text-zinc-500">You haven't placed any orders yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map((order) => (
                        <div key={order._id} className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 hover:border-zinc-700 transition">
                            <img 
                                src={order.productImage} 
                                alt={order.productTitle} 
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-xl font-bold mb-2">{order.productTitle}</h2>
                            
                            <div className="space-y-2 text-sm text-zinc-400">
                                <div className="flex items-center gap-2">
                                    <Tag size={16} className="text-emerald-500" />
                                    {order.productCategory}
                                </div>
                                <div className="flex items-center gap-2">
                                    <CreditCard size={16} className="text-emerald-500" />
                                    ${Number(order.priceId).toLocaleString()}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Package size={16} className="text-emerald-500" />
                                    Status: <span className="text-emerald-400 capitalize">{order.status}</span>
                                </div>
                            </div>
                            
                            <p className="text-[10px] text-zinc-600 mt-4 font-mono truncate">
                                ID: {order.sessionId}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BuyerOrderPage;