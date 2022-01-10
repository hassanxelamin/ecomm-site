import React from 'react'
import { navContent } from '/imports.js';
import { useContext } from 'react';
import { MenuContext } from '../navManager/NavManager.js';
import Link from 'next/link';


export default function NavLogo() {

    const { open } = useContext(MenuContext)

    return (
        <div className={(open && true) ? 'pl-12' : navContent.button}>
            <Link href="/">
                <a>
                    Meraki
                </a>
            </Link>
        </div>
    )
}
