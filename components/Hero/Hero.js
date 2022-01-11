import React from 'react'
import { heroStyles } from '/imports.js';
import cn from "classnames";
import Link from 'next/link';

export default function Hero() {
    return (
        <header className={heroStyles.container}>
            <div className='w-full h-screen flex justify-center px-10 relative'>
                <div className={heroStyles.imagecontainer}>
                    <div>
                        <div className={cn(heroStyles.newsize, 'text-white text-center absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] text-[500%] whitespace-nowrap')}>
                            <div className='mb-[-30px]'>
                                <span className={heroStyles.fonttwo}>Treat</span> <span className={heroStyles.fontone}>your skin</span>
                            </div>
                            <div>
                                <span className={heroStyles.fontone}>in every</span> <span className={heroStyles.fonttwo}>season</span>
                            </div>
                            <div className='flex justify-center uppercase mt-[10px]'>
                                <Link href="/">
                                    <a className={cn(heroStyles.new, 'border text-center flex justify-center w-fit rounded-3xl')}>
                                        Shop Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
