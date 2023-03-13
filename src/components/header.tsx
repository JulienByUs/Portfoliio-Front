import React, {useEffect, useState} from 'react';
import styles from '../styles/Header.module.css';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import {Dialog} from "@headlessui/react";
import Head from "next/head";
import {useRouter} from "next/router";
import Image from "next/image";

const Header = () => {
        const router = useRouter();
        const { pathname } = router;

    useEffect(() => {
        if (pathname === '/') {
            document.title = `Julien Estanis | Web Designer & Web Developer | Paris`;
        } else {
            document.title = `Julien Estanis | ${pathname.charAt(1).toUpperCase() + pathname.slice(2)}`;
        }
    }, [pathname]);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ]
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Welcome to the portfolio of Julien Estanis, a web designer and developer based in Paris. View examples of his work and contact him for your next project." />
            <meta name="keywords" content="web design, website development, UX design, UI design, graphic design, responsive design, front-end development, back-end development, e-commerce, mobile development, SEO, HTML, CSS, JavaScript, WordPress, Drupal, Magento, Shopify, portfolio, Paris" />
            <meta name="author" content="Julien Estanis" />
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="canonical" href="https://www.julienestanis.fr" />
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <header className="z-10 relative">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">JJDE</span>
                <Image className="h-8 w-auto" src="" alt="" width={50} height={50} />
            </Link>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                    <Link title={item.name} key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt=""
                        width={2432}
                        height={600}
                    />
                </Link>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                            <Link
                                title={item.name}
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Dialog.Panel>
    </Dialog>
</header>
        </>
    );
};

export default Header;