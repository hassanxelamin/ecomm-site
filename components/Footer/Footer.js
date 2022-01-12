import React from 'react'
import { footerStyles } from '/imports.js';
import FooterLogo from './footerlogo.js';
import Insta from './insta.js';
import Twitter from './twitter.js';
import Arrow from './arrow.js';
import cn from "classnames";

export default function Footer() {
    return (
        <footer className={footerStyles.container}>
            <div className={footerStyles.paddinglit}>
                <FooterLogo />
            </div>
            <div className={cn(footerStyles.paddinglit, 'flex gap-x-8')}>
                <ul>
                    <li className="pb-[1rem]">
                        <a href="/">Shop</a>
                    </li>
                    <li className="pb-[1rem]">
                        <a href="/">Lookbook</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
                <ul>
                    <li className="pb-[1rem]">
                        <a href="/">Legal</a>
                    </li>
                    <li className="pb-[1rem]">
                        <a href="/">Shopping Bag</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>

            <div>
                <div className={footerStyles.paddinglit}><h2 className="pb-[0.5rem]">Subscribe to the newsletter</h2>
                    <form>
                        <input className={footerStyles.footerinput} placeholder="Your e-mail" required="" type="email" />
                        <button>
                            <Arrow />
                        </button>
                    </form>
                </div>
            </div>


            <div>
                <div>
                    <h2 className="pb-[0.5rem]">Social Media</h2>
                    <ul className='flex justify-around w-[94px]'>
                        <li>
                            <a href="/" rel="noopener" target="_blank">
                                <Insta />
                            </a>
                        </li>
                        <li>
                            <a href="/" rel="noopener" target="_blank">
                                <Twitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
