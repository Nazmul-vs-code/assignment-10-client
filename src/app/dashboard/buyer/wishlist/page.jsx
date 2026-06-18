"use client";

import React, { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { getWishlist } from '@/lib/api/wishlist';
import { WishlistCard } from '@/components/dashboard/WishlistCard';

const BuyerWishListPage = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchList = async () => {
            const { data: session } = await authClient.token();
            if (session?.token) {
                const data = await getWishlist(session.token);
                setWishlist(data);
            }
            setLoading(false);
        };
        fetchList();
    }, []);

    if (loading) return <div className="text-zinc-400 p-10 text-center">Loading your wishlist...</div>;

    return (
        <div className="w-[80%] mx-auto py-12">
            <h1 className="text-3xl font-bold text-white mb-8">My Wishlist</h1>
            
            {wishlist.length === 0 ? (
                <p className="text-zinc-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {wishlist.map((item) => (
                        <WishlistCard key={item._id} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BuyerWishListPage;