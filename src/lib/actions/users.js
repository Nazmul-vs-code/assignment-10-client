// src/lib/api/users.js

import { getJwtToken } from "../api/getToken";

export const updateUserStatus = async (userId, newStatus) => {
    // 1. Get the current token
    const token = await getJwtToken()
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
    });
    
    if (!res.ok) {
        throw new Error("Failed to update user status");
    }
    
    return await res.json();
};



export const deleteUser = async (userId) => {
    // Get the current token
    
    const token = await getJwtToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!res.ok) {
        throw new Error("Failed to delete user");
    }

    return await res.json();
};