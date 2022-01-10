import React from 'react'
import { navButton, navContent } from '/imports.js';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../../hooks/use-cart.js'
import { useContext } from 'react';
import { MenuContext } from '../navManager/NavManager.js';

const NavButton = () => {

    const { totalItems } = useCart();
    const { open, setOpen } = useContext(MenuContext)

    return (
        <div className={(open && true) ? 'pr-12 py-6' : navContent.button}>
            <div className={navButton.wrap}>
                <button className={navButton.button} onClick={() => setOpen(!open, console.log(open))}>
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