'use server'

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const createProduct = async (product) => {
    const res = await fetch(`${baseURL}/seller/product`, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(product)
    })

    const data = await res.json()
    return data
}