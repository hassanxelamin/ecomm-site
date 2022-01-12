import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export async function initiateCheckout({ lineItems } = {}) {

    const stripe = await stripePromise;

    console.log('made it this far');

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: "https://ecomm-site.vercel.app/cart/success?session_id={CHECKOUT_SESSION_ID}",
        cancelUrl: "https://ecomm-site.vercel.app/cart/"
    })
}