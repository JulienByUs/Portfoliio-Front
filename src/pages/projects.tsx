import {useState, useEffect, useLayoutEffect} from 'react';
import Link from 'next/link';
import {ChevronRightIcon, HomeIcon} from "@heroicons/react/20/solid";
import { gsap, Power4 } from "gsap";
import Image from "next/image";


interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    catchphrase: string;
    herourl: string;
    length: number;
    role: string;
    closeDescription: string;
    thumbnail: string;
}
const Project = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const ul = document.querySelector('.parent');
        if (!ul) return;
        const liList = Array.from(ul.querySelectorAll('.first-class'));

        liList.forEach((li, index) => {
            gsap.fromTo(
                li,
                {x: 260, alpha: 0},
                {x: 0, alpha: 1,  delay: index * 0.3, duration: 0.5, ease: Power4.easeOut}
            );
            });
    }, []);


    useEffect(() => {
        fetch('https://julien-api.byus.dev/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error(error));
    }, []);


    const pages = [
        { name: 'Projects', href: '#', current: true }
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
                                                    {page.name}
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
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10">
                                    Projects
                                </h1>
                            </div>

                        </div>
                    <div className="overflow-y-hidden md:overflow-y-visible mx-auto max-w-7xl px-6 lg:px-8 my-1 flow-root sm:my-10">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">
                            <div className="parent inline-flex mt-3 sm:mt-13 lg:mt-13 relative justify-center">
                                {projects.map(project => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="first-class mb-8 md:mb-0 child inline-table w-[100vw] md:w-[35vw] text-gray-900 px-6 md:px-5 z-20">
                                        <div className="mx-auto">
                                            <figure className="mt-8 md:mt-16">
                                                <Link title={project.title} className="" href={`/project/${project.id}`}>
                                                    <Image
                                                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                                                        src={project.thumbnail}
                                                        alt=""
                                                    />
                                                </Link>
                                                <p className="text-3xl font-bold tracking-tight text-gray-900 my-2">{project.title}</p>
                                                <figcaption className="mb-4 flex gap-x-2 text-sm leading-2 md:leading-6 text-gray-500">
                                                    {project.catchphrase}
                                                </figcaption>
                                            </figure>
                                        </div>
                                    </div>

                                ))}

                                <div className="hidden md:block inline-flex absolute top-1/2 translate-y-[50%] z-10">
                                    <div className="text-3xl md:text-6xl font-light inline-table w-screen text-gray-300">
                                        KEEP SCROLLING
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        </>
    );
};

export default Project;