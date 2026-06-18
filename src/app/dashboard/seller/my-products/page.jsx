import MyProductCard from '@/components/dashboard/MyProductCard';
import { getJwtToken } from '@/lib/api/getToken';
import { getMyProducts } from '@/lib/api/products';
import React from 'react';

const MyProductPage = async () => {
    const token = await getJwtToken();
    const myProducts = await getMyProducts(token);

    return (
        <div className="p-8 bg-black min-h-screen">
            <h1 className="text-2xl font-bold text-white mb-6">My Listed Products</h1>
            
            <div className="max-w-5xl">
                {myProducts.length > 0 ? (
                    myProducts.map((product) => (
                        <MyProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="text-zinc-500">No products listed yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyProductPage;