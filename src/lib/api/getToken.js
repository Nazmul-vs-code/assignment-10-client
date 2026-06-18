'use server'

import { headers } from "next/headers"
import { auth } from "../auth"

export const getToken = async () => {


    const { token } = auth.api.getAccessToken({
        headers: await headers()
    })

    return token;
}

export const getJwtToken = async () => {
    'use server'

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    return token;
}

