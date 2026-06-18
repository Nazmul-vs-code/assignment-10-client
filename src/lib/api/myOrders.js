'use server'

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