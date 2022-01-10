import React from 'react'
import Link from 'next/link';
import LOGOComponent from './svgLogo';

export default function NavLogo() {

    return (
        <div>
            <Link href="/">
                <a>
                    <LOGOComponent />
                </a>
            </Link>
        </div>
    )
}
