import { NavBar } from '/imports.js';
import NavButton from './navButton/navButton.js';
import NavLogo from './navLogo/navLogo.js';

const Nav = () => {

    return (
        <nav className={NavBar.container}>
            <NavLogo />
            <NavButton />
        </nav>
    )
}

export default Nav;