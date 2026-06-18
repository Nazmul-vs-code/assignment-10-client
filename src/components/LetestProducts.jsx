import { getPublicProducts } from '@/lib/api/products';
import { ProductCard } from './ProductCard';

// 1. Ensure this is a SERVER COMPONENT (default in app/ folder)
// 2. Remove any "use client" from this file.
const LetestProducts = async () => {
    
    // Use try/catch to prevent the app from crashing if the API fails
    // let products = [];
    // try {
    //     products = await getPublicProducts();
    // } catch (error) {
    //     console.error("Failed to fetch products:", error);
    // }

    // Safeguard: Slice only if products is an array
    const latestProducts = Array.isArray(products) ? products.slice(0, 6) : [];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Latest Products</h2>
            
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {latestProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div> */}
        </section>
    );
};

export default LetestProducts;