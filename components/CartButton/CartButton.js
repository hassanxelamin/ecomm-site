import React from 'react'

import { cartButtonStyles } from '/imports.js';
import Link from 'next/link';

const CartButton = () => {

    return (
        <div>
            <div>
                <Link href="/cart">
                    <a className='flex items-center justify-center text-base text-[15px]'>
                        <div>
                            Bag
                        </div>
                        <div className={cartButtonStyles.navigationcounter}>

                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default CartButton;