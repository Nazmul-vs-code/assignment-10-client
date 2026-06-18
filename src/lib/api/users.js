import { authClient } from "@/lib/auth-client";
import { getJwtToken } from "./getToken";
const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getUsersData = async () => {
    // 1. Get the current token
    // const { data: tokenData } = await authClient.token();
    const token = await getJwtToken()

    // 2. Make the authenticated request
    const res = await fetch(`${baseURL}/admin/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

   

    return await res.json();
};