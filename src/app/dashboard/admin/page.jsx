// app/dashboard/admin/page.js
import AdminDashboardStats from '@/components/dashboard/AdminDashboardStats';
import { getAllOrders } from '@/lib/api/myOrders';
import { getAdminAllProducts } from '@/lib/api/products';
import { getUsersData } from '@/lib/api/users';
// import DashboardStats from '@/components/admin/DashboardStats'; // We will create this

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
            <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
            <AdminDashboardStats stats={stats} orders={orders} />
        </div>
    );
};

export default AdminDashboardHomePage;