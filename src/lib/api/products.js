'use server'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const getPublicProducts = async () => {
    try {
        const response = await fetch(`${baseURL}/products`, {
            // Optional: add cache: 'no-store' if you want fresh data every time
            cache: 'no-store' 
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const result = await response.json(); // <--- YOU MISSED THIS 'await'
        return result;
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Return empty array so the page doesn't crash
    }
}

// Get product details by id
export const getProductById = async (id) => {
    const response = await fetch(`${baseURL}/products/${id}`);
    return await response.json();
}