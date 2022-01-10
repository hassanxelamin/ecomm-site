import { NavBar } from '/imports.js';
import NavButton from './navButton/navButton.js';
import NavLogo from './navLogo/navLogo.js';
import NavMenu from './navMenu/navMenu.js';

const Nav = () => {

    return (
        <nav className={NavBar.container}>
            <NavMenu />
            <NavLogo />
            <NavButton />
        </nav>
    )
}

export default Nav;