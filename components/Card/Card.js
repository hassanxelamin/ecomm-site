import React from 'react'
import { useCart } from '../../hooks/use-cart.js';
import { productCard, products } from '/imports.js';
import Link from 'next/link';

export default function Card() {

    const { addToCart } = useCart();

    return (
        <section className='main'>
            <ul className={productCard.grid}>
                {
                    products.map(products => {
                        const { id, title, image, price } = products;
                        return (
                            <li key={id} className={productCard.card}>
                                <Link href={`products/${id}`}>
                                    <a>
                                        <img src={image} className="object-cover" alt='t-shirt'></img>
                                        <div>
                                            <h3 className={productCard.metatitle}>{title}</h3>
                                            <p>${price}</p>
                                        </div>
                                    </a>
                                </Link>


                                {/* <p className='flex justify-center'>
                                    <button className={productCard.button} onClick={() => {
                                        addToCart({ id })
                                    }}>
                                        Add To Cart
                                    </button>
                                </p> */}

                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
