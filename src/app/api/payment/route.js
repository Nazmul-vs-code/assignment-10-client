import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { getUserSession } from '@/lib/api/session';


export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const formData = await request.formData()

    const productId = formData.get('productId');
    const PRICE_ID = formData.get('productPrice');
    const Author = formData.get('authorId');

    // console.log(Author , ' authorId ' , productId, ' product id')
    

    const user = await getUserSession()

    // console.log(PRICE_ID , ' price id ')
    // console.log(productId , ' price id ')

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data: {
            currency: 'usd',
            product_data: {
                name:"product"
            },
            unit_amount: PRICE_ID
          },
          quantity: 1,
        },
      ],
      metadata: {
        priceId : PRICE_ID,
        userId : user?.id,
        userEmail : user?.email,
        productId,
        Author,
        userEmail:user?.email,
      },
      mode: 'payment',
      success_url: `${origin}/products/${productId}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}