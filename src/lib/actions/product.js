
import { authClient } from "../auth-client"

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

export const createProduct = async (product) => {

    // const token = await getToken()
    const {data:token} = await authClient.token()
    // console.log(token, ' jwt token here ')

    const res = await fetch(`${baseURL}/seller/product`, {
        method: 'POST',
        headers: {
            'content-type':'application/json',
            'authorization' : `Bearer ${token?.token}`,
        },
        body: JSON.stringify(product)
    })

    const data = await res.json()
    return data
}


// Delete
export const deleteProduct = async (id) => {
    const { data: token } = await authClient.token()
    const res = await fetch(`${baseURL}/seller/product/${id}`, {
        method: 'DELETE',
        headers: {
            'authorization': `Bearer ${token?.token}`,
        },
    })
    return await res.json()
}



// Update (PATCH)
export const updateProduct = async (id, updatedData) => {
    const { data: token } = await authClient.token()
    const res = await fetch(`${baseURL}/seller/product/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token?.token}`,
        },
        body: JSON.stringify(updatedData)
    })
    return await res.json()
}


export const toggleProductStatus = async (id) => {
    const { data: token } = await authClient.token();
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/admin/products/toggle-status/${id}`, {
        method: 'PATCH',
        headers: {
            'authorization': `Bearer ${token?.token}`,
        },
    });

    return await res.json();
};