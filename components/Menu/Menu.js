import React from 'react'
import { menuStyles } from '/imports.js';

export default function Menu() {

    return (
        <div className={menuStyles.navigationbutton}>
            <span className={menuStyles.navigationdash}>
                <span className={menuStyles.navigationdashes}></span>
                <span className={menuStyles.navigationdashes}></span>
                <span className={menuStyles.navigationdashes}></span>
            </span>
            <span className={menuStyles.navigationtext}>
                Menu
            </span>
        </div>
    )
}