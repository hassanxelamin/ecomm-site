import React from 'react'
import { navMenu } from '/imports.js';

export default function NavMenu() {

    return (
        <div className={navMenu.navigationbutton}>
            <span className={navMenu.navigationdash}>
                <span className={navMenu.navigationdashes}></span>
                <span className={navMenu.navigationdashes}></span>
                <span className={navMenu.navigationdashes}></span>
            </span>
            <span className={navMenu.navigationtext}>
                Menu
            </span>
        </div>
    )
}