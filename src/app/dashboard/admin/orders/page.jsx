import MyOrdersCard from '@/components/dashboard/MyOrdersCard';
import { getAllOrders } from '@/lib/api/myOrders';
import React from 'react';

const AdminOrdersPage = async () => {
    // Fetch orders from the server
    const orders = await getAllOrders();

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-8">All Customer Orders</h1>
            
            {orders && orders.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {orders.map((order) => (
                        <MyOrdersCard 
                            key={order._id} 
                            order={order} 
                        />
                    ))}
                </div>
            ) : (
                <div className="text-zinc-500 text-center py-20">
                    No orders found.
                </div>
            )}
        </div>
    );
};

export default AdminOrdersPage;