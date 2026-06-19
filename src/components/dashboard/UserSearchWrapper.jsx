'use client';

import React, { useState } from 'react';
import AllUsersCard from '@/components/dashboard/AllUsersCard';
import { Search } from 'lucide-react';

const UserSearchWrapper = ({ initialUsers }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter logic: search by name
    const filteredUsers = initialUsers.filter((user) =>
        user.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-neutral-400" size={20} />
                <input
                    type="text"
                    placeholder="Search users by name..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Display filtered results */}
            <AllUsersCard users={filteredUsers} />
        </div>
    );
};

export default UserSearchWrapper;