import { navStyles } from '/imports.js';
import CartButton from '../CartButton/CartButton.js';
import Logo from '../Logo/Logo.js';
import Menu from '../Menu/Menu.js';

const Nav = () => {

    return (
        <nav className={navStyles.container}>
            <Menu />
            <Logo />
            <CartButton />
        </nav>
    )
}

export default Nav;