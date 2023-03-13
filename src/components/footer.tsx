import React from 'react';
import styles from '../styles/Footer.module.css';
import Link from "next/link";

const Footer = () => {
    const navigation = {
        solutions: [
            { name: 'Julien Estanis', href: '#' },
            { name: 'estanisj@outlook.fr', href: '#' },
            { name: 'Based in Paris', href: '#' },
            { name: '© 2023 JJDE, Inc. All rights reserved.', href: '#' },
        ]
    }

    return (
        <footer className="bg-[#151515] mt-[-100px] z-10 relative" aria-labelledby="footer-heading">
            <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Lets work</h2>
                        <h2 className="text-3xl font-bold tracking-tight text-[#00AB6D] sm:text-4xl">Together <span className="text-white">?</span></h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact me</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Ready ?</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                        <li key="">
                                            <Link href="" className="text-sm leading-6 text-gray-300 hover:text-white">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                                            </Link>
                                        </li>
                                    <li key="">
                                        <Link href="" className="underline-offset-4 underline text-sm leading-6 text-[#02BF95] hover:text-white">
                                            Book a free call
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;