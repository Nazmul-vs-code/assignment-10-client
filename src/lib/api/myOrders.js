'use server'

import { authClient } from "../auth-client";
import { getJwtToken } from "./getToken";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getMyOrders = async (token) => {
    try {
        const res = await fetch(`${baseURL}/my-orders`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            cache: 'no-store' // Ensures you always get fresh data from the server
        });

        if (!res.ok) {
            throw new Error("Failed to fetch orders");
        }

        return await res.json();
    } catch (error) {
        console.error("Error in getMyOrders:", error);
        return []; // Return empty array on failure
    }
};


export const getAllOrders = async () => {
    // const { data: token } = await authClient.token();
    
    const token = await getJwtToken()
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    });

    return await res.json();
};