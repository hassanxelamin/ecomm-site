import React from 'react'
import { heroStyles } from '/imports.js';

export default function Hero() {
    return (
        <header className={heroStyles.container}>
            <div className='w-full h-screen flex justify-center px-10'>
                <div className={heroStyles.imagecontainer}>
                </div>
            </div>
        </header>
    )
}
