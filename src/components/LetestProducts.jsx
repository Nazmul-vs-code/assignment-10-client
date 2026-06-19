'use client'; // Required for client-side hooks

import { useEffect, useState } from 'react';
import { getPublicProducts } from '@/lib/api/products';
import { ProductCard } from './ProductCard';

const LetestProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the function inside useEffect to avoid unnecessary re-renders
        const fetchProducts = async () => {
            try {
                const data = await getPublicProducts();
                // Ensure we only set the state if data exists
                setProducts(Array.isArray(data) ? data.slice(0, 6) : []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []); // The empty array [] ensures this runs ONLY ONCE on mount

    if (loading) {
        return <div className="max-w-7xl mx-auto px-4 py-16">Loading latest products...</div>;
    }

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="text-zinc-500">No products available.</p>
                )}
            </div>
        </section>
    );
};

export default LetestProducts;