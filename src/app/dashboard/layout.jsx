import Sidebar from '@/components/dashboard/Sidebar';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="md:flex h-screen overflow-hidden">
            <Sidebar />

            <main className="flex-1 h-full overflow-y-auto p-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;