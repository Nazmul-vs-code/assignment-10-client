
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getWishlist = async (token) => {
    const res = await fetch(`${baseURL}/wishlist`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        cache: 'no-store' // Ensure we always get the latest list
    });

    if (!res.ok) {
        console.error("Failed to fetch wishlist");
        return [];
    }

    return await res.json();
};