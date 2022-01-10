import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../hooks/use-cart.js'

const NavButton = () => {

    const { totalItems } = useCart();

    return (
        <div>
            <div>
                <button>
                    <a className='flex items-center justify-between w-8 text-base'>
                        <div>
                            <FaShoppingCart />
                        </div>
                        <div>
                            {totalItems}
                        </div>
                    </a>
                </button>
            </div>
        </div>
    )
}

export default NavButton;