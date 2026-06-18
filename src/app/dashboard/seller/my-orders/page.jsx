import MyOrdersCard from '@/components/dashboard/MyOrdersCard';
import { getJwtToken } from '@/lib/api/getToken';
import { getMyOrders } from '@/lib/api/myOrders';
import React from 'react';

const MyOrderPage = async () => {
    const token = await getJwtToken();
    const myOrders = await getMyOrders(token);

    return (
        <div className="p-8 bg-black min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-6">Orders Received</h1>
            <div className="flex flex-col gap-4">
                {myOrders.length > 0 ? (
                    myOrders.map((order) => (
                        <MyOrdersCard key={order._id} order={order} />
                    ))
                ) : (
                    <p className="text-zinc-500">No orders received yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrderPage;