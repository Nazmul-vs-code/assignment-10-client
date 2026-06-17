import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers"; 
import { auth } from "./lib/auth";

export async function proxy(request) {
   const session = await auth.api.getSession({
    headers: await headers()
   }) 

   if(!session){
    return NextResponse.redirect(new URL('/signin', request.url))
   }

//    if(session?.user?.role=='seller' && session?.user?.plan=='free'){
//     return  NextResponse.redirect(new URL('/pricing', request.url))
//    }
}

export const config = {
    matcher: ['/profile' , '/dashboard/seller']
}
