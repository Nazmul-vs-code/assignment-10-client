import { getPublicProducts } from "@/lib/api/products";
import { ProductCard } from "@/components/ProductCard";
import { Package, Sparkles } from "lucide-react";

const ProductsPage = async () => {
  const products = await getPublicProducts();

  return (
    <main className="relative mx-auto max-w-7xl w-[80%] px-4 py-12">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-red-400/10 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative mb-12">
        <div className="flex items-center gap-3">
          <Sparkles className="text-red-500" size={30} />

          <h1 className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
            Latest Inventory
          </h1>
        </div>

        <p className="mt-4 max-w-2xl text-lg text-neutral-600">
          Discover quality pre-loved items from our verified community of
          sellers.
        </p>

        <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-red-100 bg-white px-5 py-3 shadow-sm">
          <Package size={20} className="text-red-500" />
          <div>
            <p className="text-xs  uppercase tracking-wider text-black">
              Available Products
            </p>
            <p className="font-bold text-red-500">{products.length}</p>
          </div>
        </div>
      </div>

      {/* Products */}
      {products.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-red-200 bg-red-50/50 py-24 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <Package className="text-red-500" size={28} />
          </div>

          <h2 className="text-xl font-bold text-neutral-700">
            No Products Available
          </h2>

          <p className="mt-2 text-neutral-500">
            No products are currently available.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="transition-all duration-300 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ProductsPage;