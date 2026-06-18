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


export const deleteWishlistItem = async (productId, token) => {
    const res = await fetch(`${baseURL}/wishlist/${productId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        throw new Error("Failed to delete item from wishlist");
    }

    return await res.json();
};