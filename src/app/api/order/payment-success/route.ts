import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY,{
    apiVersion:"2025-05-28.basil"
})

export const POST = async (request:Request) =>{
    const signature = request.headers.get("stripe-signature")

    if(!signature){
        return NextResponse.error()
    }
    
    const text = await request.text()

    const event = stripe.webhooks.constructEvent(
        text,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET_KEY,
    )

    if(event.type === "checkout.session.completed"){
        const sessionWithLineItems = await stripe.checkout.sessions.listLineItems(
            event.data.object.id,
            {
                expand:["line_items"],
            }
        )

        const lineItems = sessionWithLineItems.data
    }

    return NextResponse.json({received:true})

}