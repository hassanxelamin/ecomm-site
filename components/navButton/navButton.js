import React from 'react'
import { useCart } from '../../hooks/use-cart.js'
import { navButton } from '/imports.js';
import Link from 'next/link';

const NavButton = () => {

    const { totalItems, checkout } = useCart();

    return (
        <div>
            <div>
                <Link href="/cart">
                    <a className='flex items-center justify-center text-base text-[15px]'>
                        <div>
                            Bag
                        </div>
                        <div className={navButton.navigationcounter}>
                            {totalItems}
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default NavButton;