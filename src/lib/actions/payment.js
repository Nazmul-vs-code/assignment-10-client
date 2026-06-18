'use server'
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const subscription = async (data) => {
    const res = await fetch(`${baseURL}/subscription`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const resData = await res.json()
    return resData
}


export const savePayment = async (paymentData, token) => {
    const res = await fetch(`${baseURL}/payment`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}` // Assuming you need auth for the /payment endpoint
        },
        body: JSON.stringify(paymentData)
    });

    const resData = await res.json();
    return resData;
};
