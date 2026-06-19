'use client';

import React, { useState } from 'react';
import { Eye, Edit2, Trash2, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { deleteProduct, toggleProductStatus } from '@/lib/actions/product';
import Link from 'next/link';
import { Button } from '@heroui/react';

const MyProductCard = ({ product }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isToggling, setIsToggling] = useState(false);
    const router = useRouter();

    const handleToggle = async () => {
        setIsToggling(true);
        try {
            const res = await toggleProductStatus(product._id);
            if (res.status) {
                toast.success(`Status updated to ${res.status}`);
                router.refresh(); 
            } else {
                toast.error("Unauthorized or failed to update.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        } finally {
            setIsToggling(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this product?")) return;
        setIsDeleting(true);
        try {
            const res = await deleteProduct(id);
            if (res.deleted) {
                toast.success("Product deleted successfully!");
                router.refresh(); 
            } else {
                toast.error("Failed to delete product.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition mb-3">
            <div className="flex items-center gap-4">
                <img src={product.images[0]} alt={product.title} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                    <h3 className="font-bold text-white text-lg">{product.title}</h3>
                    <span className="text-blue-400 border border-blue-900/50 px-2 py-0.5 rounded text-xs">{product.category}</span>
                </div>
            </div>

            <div className="flex items-center gap-6">
                <div className="text-right">
                    <p className="text-emerald-500 font-bold text-lg">${product.price}</p>
                    <p className="text-zinc-500 text-sm">Stock: {product.stock || 0}</p>
                </div>

                {/* Status Toggle Button */}
                <Button 
                    size="sm" 
                    variant="secondary" 
                    isLoading={isToggling}
                    className={`${product.status === 'approved' ? 'text-emerald-500 ' : 'text-yellow-500'}`}
                    onClick={handleToggle}
                >
                    {product.status || 'pending'}
                </Button>

                <div className="flex gap-3 text-zinc-400">
                    <button className="hover:text-white transition"><Eye size={18} /></button>
                    <Link href={`/dashboard/seller/my-products/${product?._id}`}>
                        <button className="hover:text-blue-400 transition"><Edit2 size={18} /></button>
                    </Link>
                    <button 
                        onClick={() => handleDelete(product._id)}
                        disabled={isDeleting}
                        className="hover:text-red-500 transition"
                    >
                        {isDeleting ? <Loader2 size={18} className="animate-spin" /> : <Trash2 size={18} />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;