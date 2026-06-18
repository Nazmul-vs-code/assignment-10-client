// src/app/dashboard/admin/users/page.jsx (or wherever this file is)
import AllUsersCard from '@/components/dashboard/AllUsersCard';
import { getUsersData } from '@/lib/api/users';
import React from 'react';

const AdminUsersViewPage = async () => {
    const users = await getUsersData();
    
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
            {/* Pass the fetched users as a prop */}
            <AllUsersCard users={users} />
        </div>
    );
};

export default AdminUsersViewPage;