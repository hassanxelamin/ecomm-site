import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY)

export async function initiateCheckout({ lineItems } = {}) {

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        submit_type: 'donate',
        payment_method_types: ['card'],
        mode: 'payment',
        lineItems,
        successUrl: "https://ecomm-site.vercel.app/?session_id={CHECKOUT_SESSION_ID}",
        cancelUrl: "https://ecomm-site.vercel.app/"
    })
}