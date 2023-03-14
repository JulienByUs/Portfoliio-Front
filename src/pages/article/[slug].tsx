import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../../scripts/Single.module.js';
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import Image from "next/image";

const SingleProject = () => {
    const [blog, setBlog] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
    const [previousSlug, setPreviousSlug] = useState(null);
    const [nextSlug, setNextSlug] = useState(null);

    useEffect(() => {
        if (!slug) return;

        fetch(`https://julien-api.byus.dev/api/article/${slug}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Project not found: ${slug}`);
                }
                return response.json();
            })
            .then(data => setBlog(data))
            .catch(error => {
                console.error(error);
                router.push('/404');
            });
    }, [slug, router]);

    useEffect(() => {
        if (!slug || !blog) return;
        document.title = `Julien Estanis | Paris`;
    }, [slug, blog]);

    const handlePreviousClick = () => {
        router.push(`/article/${previousSlug}`);
    };

    const handleNextClick = () => {
        router.push(`/article/${nextSlug}`);
    };

    if (!blog) {
        return <main className="isolate"><div className="relative"><div className="py-24 sm:py-32">Loading...</div></div></main>;
    }

    //const totalArticles = blog.length;

    const pages = [
        { name: 'Blog', href: '/blog', current: false },
        { name: 'Article', href: '#', current: false },
        { name: "blog.title", href: '#', current: true },
    ]

    return (
        <>
            <main className="isolate">
                {/* Projects section */}
                <div className="relative">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">
                                            <nav className="flex" aria-label="Breadcrumb">
                                                <ol role="list" className="flex items-center space-x-4">
                                                    <li>
                                                        <div>
                                                            <Link href="/" className="text-gray-400 hover:text-gray-500">
                                                                <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                                                <span className="sr-only">Home</span>
                                                            </Link>
                                                        </div>
                                                    </li>
                                                    {pages.map((page) => (
                                                        <li key={page.name}>
                                                            <div className="flex items-center">
                                                                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                <Link
                                                                    href={page.href}
                                                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                                                    aria-current={page.current ? 'page' : undefined}
                                                                >
                                                                    {page.name} &nbsp;
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ol>
                                            </nav>
                                        </div>
                    </div>

                    <div className="py-24 sm:py-32">
                        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                            <svg
                                className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                                viewBox="0 0 1155 678"
                            >
                                <path
                                    fill="url(#9b2541ea-d39d-499b-bd42-aeea3e93f5ff)"
                                    fillOpacity=".3"
                                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                />
                                <defs>
                                    <linearGradient
                                        id="9b2541ea-d39d-499b-bd42-aeea3e93f5ff"
                                        x1="1155.49"
                                        x2="-78.208"
                                        y1=".177"
                                        y2="474.645"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#00AB6"/>
                                        <stop offset={1} stopColor="#00FFA3"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">
                                <div className="items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl leading-10">
                                    titre
                                </h1>
                                </div>
                            </div>

                        </div>
                        <Image
                            className="aspect-video rounded-xl bg-gray-50 object-cover"
                            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                            alt="App screenshot"
                            width={2432}
                            height={600}
                        />
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">

                            <div className="my-20 md:my-44">
                                <p className="text-2sm font-light tracking-tight text-gray-900 mt-5">body</p>
                            </div>
                            <div
                                className="absolute inset-x-0 top-[calc(70%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(70%-30rem)]">
                                <svg
                                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                >
                                    <path
                                        fill="url(#b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="b9e4a85f-ccd5-4151-8e84-ab55c66e5aa1"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#00AB6"/>
                                            <stop offset={1} stopColor="#00FFA3"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div>

                                <nav className="flex items-center justify-between px-4 sm:px-0 my-20 md:my-10">
                                    {/* Render pagination links */}
                                    <div className="mt-10 flex justify-center">

                                    </div>
                                </nav>
                            </div>
                        <div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </main>
            </>
    );
};

export default SingleProject;