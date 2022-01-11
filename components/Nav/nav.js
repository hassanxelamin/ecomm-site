import { navStyles } from '/imports.js';
// import CartButton from '../CartButton/CartButton.js';
import { useCart } from '../../hooks/use-cart.js'
import { cartButtonStyles } from '/imports.js';
import Logo from '../Logo/Logo.js';
import Menu from '../Menu/Menu.js';
import Link from 'next/link';

const Nav = () => {

    const { totalItems } = useCart();

    return (
        <nav className={navStyles.container}>
            <Menu />
            <Logo />
            <div>
                <div>
                    <Link href="/cart">
                        <a className='flex items-center justify-center text-base text-[15px]'>
                            <div>
                                Bag
                            </div>
                            <div className={cartButtonStyles.navigationcounter}>
                                {totalItems}
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;