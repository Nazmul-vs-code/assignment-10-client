import React from 'react';
import { Eye, Edit2, Trash2 } from 'lucide-react';

const MyProductCard = ({ product }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition mb-3">
            {/* Left side: Image and Info */}
            <div className="flex items-center gap-4">
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                    <h3 className="font-bold text-white text-lg">{product.title}</h3>
                    <div className="flex gap-2 text-xs mt-1">
                        <span className="text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded">{product.category}</span>
                        <span className="text-emerald-400 border border-emerald-900/50 px-2 py-0.5 rounded">New</span>
                        <span className="text-emerald-400 border border-emerald-900/50 px-2 py-0.5 rounded">Approved</span>
                    </div>
                </div>
            </div>

            {/* Right side: Price, Stock, and Actions */}
            <div className="flex items-center gap-8">
                <div className="text-right">
                    <p className="text-emerald-500 font-bold text-lg">${product.price}</p>
                    <p className="text-zinc-500 text-sm">Stock: {product.stock || 0}</p>
                </div>
                <div className="flex gap-3 text-zinc-400">
                    <button className="hover:text-white transition"><Eye size={18} /></button>
                    <button className="hover:text-blue-400 transition"><Edit2 size={18} /></button>
                    <button className="hover:text-red-500 transition"><Trash2 size={18} /></button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;