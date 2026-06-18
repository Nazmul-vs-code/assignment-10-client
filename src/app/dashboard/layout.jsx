import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const layout = ({ children }) => {
    return (
        
        // 1. Ensure the parent container takes the full height
        <div className='md:flex min-h-screen'>
            {/* Sidebar will naturally take its w-64 width */}
            <Sidebar />
            
            {/* 2. flex-1 makes main grow to fill all remaining horizontal space */}
            <main className='flex-1 p-6'>
                <h2>navbar</h2>
                {children}
            </main>
        </div>
    );
};

export default layout;