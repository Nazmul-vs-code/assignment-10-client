import { SellerProductFormModal } from '@/components/dashboard/SellerProductFormModal';
import React from 'react';

const SellerProductsPage = () => {
    return (
        // 1. Full height container with flexbox to center content
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-8 bg-gray-50">
            
            {/* 2. Page Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Create Product
                </h1>
                <p className="mt-2 text-lg text-gray-600">
                    Add a new item to your store inventory
                </p>
            </div>

            {/* 3. Modal Container (Centered) */}
            <div className="w-full max-w-md flex justify-center">
                <SellerProductFormModal />
            </div>

            {/* Optional: Add decorative background element or helper text */}
            <div className="mt-12 text-sm text-gray-400">
                Ensure all details are correct before saving.
            </div>
        </div>
    );
};

export default SellerProductsPage;