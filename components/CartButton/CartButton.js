import React from 'react'
import { useCart } from '../../hooks/use-cart.js'
import { cartButtonStyless } from '/imports.js';
import Link from 'next/link';

const CartButton = () => {

    const { totalItems } = useCart();

    return (
        <div>
            <div>
                <Link href="/cart">
                    <a className='flex items-center justify-center text-base text-[15px]'>
                        <div>
                            Bag
                        </div>
                        <div className={cartButtonStyless.navigationcounter}>
                            {totalItems}
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CartButton;