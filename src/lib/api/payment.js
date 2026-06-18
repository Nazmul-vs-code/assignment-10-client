const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getMyPayments = async (token) => {
    const res = await fetch(`${baseURL}/payments`, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        cache: 'no-store' // Ensure we get fresh data
    });

    if (!res.ok) {
        throw new Error("Failed to fetch payment history");
    }

    return await res.json();
};