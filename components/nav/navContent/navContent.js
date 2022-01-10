import React, { useContext } from 'react';
import { navContent } from '../../../imports';
import { MenuContext } from '../navManager/NavManager';

const NavContent = () => {

    const { open, setOpen } = useContext(MenuContext)

    return (
        <div className={(open && true) ? navContent.navMenu : ''}>
            <div className={(open && true) ? navContent.open : navContent.inside}>
                <div className='container'>
                    <ul>
                        <button onClick={() => setOpen(!open, console.log(open))}>
                            x
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavContent;
