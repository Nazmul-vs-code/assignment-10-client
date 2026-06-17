
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