import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(`${process.env.STRIPE_SECRET_KEY}`)

export async function initiateCheckout({ lineItems } = {}) {

    console.log(`${process.env.STRIPE_SECRET_KEY}`)

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin
    })
}