import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import { FcClock } from 'react-icons/fc';

const MyOrdersCard = ({ order }) => {
    const statusColors = {
        completed: "text-emerald-500",
        delivered: "text-emerald-400",
        cancelled: "text-red-400",
        pending: "text-amber-400"
    };

    return (
        <div className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition flex gap-4">
            {/* Product Image */}
            {order.productImage && (
                <img 
                    src={order.productImage[0]} 
                    alt={order.productTitle} 
                    className="w-20 h-20 rounded-lg object-cover"
                />
            )}

            {/* Content Container */}
            <div className="flex-1 flex justify-between items-start">
                <div>
                    <h3 className="font-bold text-green-400 text-lg">{order.productTitle}</h3>
                    
                    {/* Buyer Info Row */}
                    <div className="flex items-center text-red-500 gap-2 mt-2 text-sm">
                        <FaCircleUser className="" />
                        <p>Buyer: {order.userEmail}</p>
                    </div>

                    {/* Date/Time Row */}
                    <div className="flex items-center gap-2 mt-1 text-accent text-xs">
                        <FcClock />
                        <p>{new Date(order.createdAt).toLocaleDateString()} • Qty: 1</p>
                    </div>

                    <p className="text-zinc-700 text-[10px] mt-2 font-mono">
                        ID: #{order.sessionId.slice(0, 10).toUpperCase()}
                    </p>
                </div>

                {/* Status and Price */}
                <div className="text-right">
                    <span className={`font-semibold text-sm uppercase ${statusColors[order.status] || 'text-zinc-400'}`}>
                        {order.status}
                    </span>
                    <p className="text-2xl font-black text-white mt-1">
                        ${order.priceId}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersCard;