import React from 'react'
import { useCart } from '../../hooks/use-cart.js';
import { productCard, products } from '/imports.js';
import Link from 'next/link';

export default function Card() {

    const { addToCart } = useCart();

    return (
        <section className='main' id="card">
            <ul className={productCard.grid}>
                {
                    products.map(products => {
                        const { id, title, image, price } = products;
                        return (
                            <li key={id} className={productCard.card}>
                                <Link href={`products/${id}`}>
                                    <a>
                                        <img src={image} className="object-cover hover:opacity-90" alt='t-shirt'></img>
                                        <div className='absolute bottom-[8px] left-[16px]'>
                                            <a href=""><h3 className={productCard.metatitle}>{title}</h3></a>
                                            <p className='text-[16px]'>${price}</p>
                                        </div>
                                    </a>
                                </Link>

                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
