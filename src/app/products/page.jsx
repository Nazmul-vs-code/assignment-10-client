import { getPublicProducts } from "@/lib/api/products";
import { ProductCard } from "@/components/ProductCard";
import Filtering from "@/components/Filtering";
import PaginationControls from "@/components/PaginationControls";

const ITEMS_PER_PAGE = 6;

const ProductsPage = async ({ searchParams }) => {
  const allProducts = await getPublicProducts();

  const productsList = Array.isArray(allProducts)
    ? allProducts
    : allProducts?.products || allProducts?.data || [];

  const params = await searchParams;

  const search = params?.search || "";
  const category = params?.category || "all";
  const currentPage = Number(params?.page) || 1;

  const filteredProducts = productsList.filter((product) => {
    const matchesSearch = product?.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product?.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(
    filteredProducts.length / ITEMS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="relative mx-auto max-w-7xl w-[80%] px-4 py-12">
      <h1 className="mb-8 text-4xl font-black text-red-600">
        Latest Inventory
      </h1>

      <Filtering />

      <div className="grid min-h-[400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <PaginationControls
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      )}
    </main>
  );
};

export default ProductsPage;