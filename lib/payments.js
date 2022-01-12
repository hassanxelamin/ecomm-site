import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export async function initiateCheckout({ lineItems } = {}) {

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: 'http://ecomm-site.vercel.app/cart?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl: 'http://ecomm-site.vercel.app/cart'
    })
}