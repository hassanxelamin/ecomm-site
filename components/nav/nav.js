import { FaShoppingCart } from 'react-icons/fa';
import { NavBar } from '/imports.js';
import { useCart } from '../../hooks/use-cart.js'
import Link from 'next/link';

const Nav = ({ price, items }) => {
    const { subtotal, totalItems, checkout } = useCart();
    return (
        <nav className={NavBar.container}>
            <Link href="/">
                <a>
                    Space Jelly Shop
                </a>
            </Link>
            <div>
                <Link href="/cart">
                    <a>
                        <FaShoppingCart />
                    </a>
                </Link>
                ${subtotal}
                <span>  &nbsp;  </span>
                {totalItems}
            </div>
        </nav>
    )
}

export default Nav;