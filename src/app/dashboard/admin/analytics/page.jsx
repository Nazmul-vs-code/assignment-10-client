// app/dashboard/admin/page.js

import AdminDashboardStats from "@/components/dashboard/AdminDashboardStats";
import { getAllOrders } from "@/lib/api/myOrders";
import { getAdminAllProducts } from "@/lib/api/products";
import { getUsersData } from "@/lib/api/users";
import { ChartColumnStacked } from "lucide-react";


const AdminDashboardHomePage = async () => {
    const [users, products, orders] = await Promise.all([
        getUsersData(),
        getAdminAllProducts(),
        getAllOrders()
    ]);

    // Calculate metrics
    const stats = {
        totalUsers: users?.length || 0,
        totalProducts: products?.length || 0,
        totalOrders: orders?.length || 0,
        totalRevenue: orders?.reduce((acc, curr) => acc + (curr.priceId || 0), 0) || 0
    };

    return (
        <div className="p-6 bg-zinc-950 min-h-screen text-white">
            <div className="flex items-center gap-3 mb-8">
                <ChartColumnStacked size={32} className="text-red-600" />
                <h1 className="text-3xl font-bold">Admin Analytics</h1>
            </div>
            <AdminDashboardStats stats={stats} orders={orders} />
        </div>
    );
};

export default AdminDashboardHomePage;