import { NavBar } from '/imports.js';
import NavButton from './navButton/navButton.js'
import NavManager from './navManager/NavManager.js';
import NavContent from './navContent/navContent.js'
import NavLogo from './navLogo/navLogo.js';

const Nav = () => {

    return (
        <NavManager>
            <nav className={NavBar.container}>
                <NavLogo />
                <NavButton />
                <NavContent />
            </nav>
        </NavManager >
    )
}

export default Nav;