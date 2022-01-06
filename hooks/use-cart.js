import { useState } from 'react';
import { products } from '/imports.js';
import { initiateCheckout } from '../lib/payments.js'

const defaultCart = {
    products: {}
}

export default function useCart() {

    const [cart, updateCart] = useState(defaultCart);

    // Adds to shopping cart
    // This function is used to create our shopping cart. When someone
    // clicks "add to cart", it passes an id as a parameter. If a product 
    // with this id is already found in the cart, it adds 1 to the quantity
    // Otherwise, if parameter is empty, it creates a product with an id
    // and a quantity of one.
    function addToCart({ id } = {}) {
        updateCart(prev => {
            let cartState = { ...prev };

            if (cartState.products[id]) {
                cartState.products[id].quantity = cartState.products[id].quantity + 1;
            } else {
                cartState.products[id] = {
                    id,
                    quantity: 1
                }
            }
            return cartState;
        })
    };

    // Creates array to calculate total cost & quantity
    // 1: We created an object called "cartItems" to store the 
    //    independent values of the total cost and total quantity.
    //    Using the cart state as is, we use the "Object.keys" function
    //    and pass it "cart.products" to return an array of products keys.
    // 2: We, then, use the map() function to create an array of products.
    //    Using the'key' from Object.keys passed as an argument,
    //    We set a variable called product that uses the find() 
    //    function to locate products by matching the id with the key.
    // 3: We, then, return a spread pf the previous cart.products filterd by key,
    //    plus their pricePerItem equal to 'product.price'
    const cartItems = Object.keys(cart.products).map(key => {
        const product = products.find(({ id }) => `${id}` === `${key}`);
        return {
            ...cart.products[key],
            pricePerItem: product.price
        }
    });

    // Creates a subtotal
    // Here, we the reducer() function on the cartItems created above to return the sum
    // of the doncunstructed elements from arry. We pass it an accumulator arguement 
    // to keep track of running total, and also deconstructed pricePerItem and quantity
    // from cartItems so we can calculate to the running total amount.
    const subtotal = cartItems.reduce((accumulator, { pricePerItem, quantity }) => {
        return accumulator + (pricePerItem * quantity)
    }, 0);

    // Creates a total quantity
    // Here, we the reducer() function on the cartItems created above to return the sum
    // of the doncunstructed elements from arry. We pass it an accumulator arguement 
    // to keep track of running total, and also deconstructed quantity
    // from cartItems so we can calculate to the running total amount.
    const totalItems = cartItems.reduce((accumulator, { quantity }) => {
        return accumulator + quantity
    }, 0);

    // Redirects to checkout with total items & quantity
    // We are mapping through carItems so that for each item, we are 
    // returning an array of price: item.id & quantity: item.quantity
    // that will service as the lineItems for our stripe checkout process
    function checkout() {
        initiateCheckout({
            lineItems: cartItems.map(item => {
                return {
                    price: item.id,
                    quantity: item.quantity
                }
            })
        });
    };

    return {
        cart,
        updateCart,
        subtotal,
        totalItems,
        addToCart,
        checkout
    };
}