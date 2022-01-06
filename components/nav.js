import { FaShoppingCart } from 'react-icons/fa';
import { NavBar } from '/imports.js';
import { useCart } from '../hooks/use-cart.js'

const Nav = ({ price, items }) => {
    const { subtotal, totalItems, checkout } = useCart();
    return (
        <nav className={NavBar.container}>
            <div>
                Space Jelly Shop
            </div>
            <div>
                <button onClick={checkout}>
                    <FaShoppingCart />
                </button>
                ${subtotal}
                <span>  &nbsp;  </span>
                {totalItems}
            </div>
        </nav>
    )
}

export default Nav;