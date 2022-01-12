import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export async function initiateCheckout({ lineItems } = {}) {

    const redirectURL =
        process.env.NODE.ENV === 'development'
            ? 'http://localhost:3000'
            : 'https://https://ecomm-site.vercel.app'

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: redirectURL + '?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl: redirectURL + '?status=cancel',
    })
}
































