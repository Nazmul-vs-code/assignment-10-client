'use server'

import { headers } from "next/headers"
import { auth } from "../auth"

export const getToken = async () => {


    const { token } = auth.api.getAccessToken({
        headers: await headers()
    })

    return token;
}