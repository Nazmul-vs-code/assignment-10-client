import MyProductCard from '@/components/dashboard/MyProductCard';
import { getAdminAllProducts } from '@/lib/api/products';
import React from 'react';

const AdminProductsPage = async () => {

    const allProducts = await getAdminAllProducts()
    console.log(allProducts , ' all products here ')
    return (
        <div>
            <h2 className=' mb-2.5 text-2xl font-semibold text-red-500'>

            Total products : {allProducts.length}
            </h2>
            {
                allProducts.map(p =><MyProductCard key={p._id} product={p}  /> )
            }
            
        </div>
    );
};

export default AdminProductsPage;