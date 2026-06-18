'use server'

import { getToken } from "../api/getToken";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const addWishList = async (productData , token) => {
    
    const res = await fetch(`${baseURL}/wishlist`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(productData)
    });
    
    return await res.json();
}