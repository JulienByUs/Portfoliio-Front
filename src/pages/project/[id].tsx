import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../../scripts/Single.module.js';
import Link from "next/link";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import {gsap} from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from "next/image";

// Make sure to register ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

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
}
const SingleProject = () => {
    const [project, setProject] = useState<Project | null>(null);
    const router = useRouter();
    const { id } = router.query;

    //GSAP
    useEffect(() => {
        const element1 = document.querySelector('.about-project .text-4xl');
        const element2 = document.querySelector('.about-project .text-2sm');
        const element3 = document.querySelector('.about-project img');
        const element4 = document.querySelector('.ring-img-g');

        const element5 = document.querySelector('.role');
        const element6 = document.querySelector('.ring-img-g');
        const element7 = document.querySelector('.project-role');

        const element8 = document.querySelector('.overview');
        const element9 = document.querySelector('.project-overview');

        const element10 = document.querySelector('.close-up');
        const element11 = document.querySelector('.project-text-close');
        const element12 = document.querySelector('.project-img-close');


        gsap.fromTo(
            element1,
            {x: -50, alpha: 0},
            {x: 0, alpha: 1, duration: 1}
        );

        gsap.fromTo(
            element2,
            {x: -50, alpha: 0},
            {x: 0, alpha: 1, duration: 1, delay: 1}
        );

        gsap.fromTo(
            element3,
            {x: 50, alpha: 0},
            {x: 0, alpha: 1, duration: 1, delay: 2}
        );

        gsap.fromTo(
            element4,
            {y: 50, alpha: 0},
            {y: 0, alpha: 1, duration: 1, delay: 3}
        );

        const animation = gsap.fromTo(
            element5,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element6,
            animation: animation,
            start: 'bottom 80%',
            end: '105% 100%',
            toggleActions: 'play none none reverse'
        });

        const animation2 = gsap.fromTo(
            element7,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element6,
            animation: animation2,
            start: 'bottom 80%',
            end: '105% 100%',
            toggleActions: 'play none none reverse'
        });

        const animation3 = gsap.fromTo(
            element8,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element7,
            animation: animation3,
            start: 'bottom 80%',
            end: '105% 100%',
            toggleActions: 'play none none reverse'
        });


        const animation4 = gsap.fromTo(
            element9,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element8,
            animation: animation4,
            start: '50% 80%',
            end: '120% 100%',
            toggleActions: 'play none none reverse'
        });


        const animation5 = gsap.fromTo(
            element10,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element9,
            animation: animation5,
            start: 'bottom 80%',
            end: '105% 100%',
            toggleActions: 'play none none reverse'
        });


        const animation6 = gsap.fromTo(
            element12,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element11,
            animation: animation6,
            start: '55% 80%',
            end: '120% 100%',
            toggleActions: 'play none none reverse'
        });

        const animation7 = gsap.fromTo(
            element11,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        );

        // Use ScrollTrigger to create a trigger for each element
        ScrollTrigger.create({
            trigger: element10,
            animation: animation7,
            start: '50% 80%',
            end: '120% 100%',
            toggleActions: 'play none none reverse'
        });


    }, []);

    useEffect(() => {
        if (!id) return;

        fetch(`https://julien-api.byus.dev/api/projects/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Project not found: ${id}`);
                }
                return response.json();
            })
            .then(data => setProject(data))
            .catch(error => {
                console.error(error);
                router.push('/404');
            });
    }, [id, router]);

    useEffect(() => {
        if (!id || !project || project.length === 0) return;
        document.title = `Julien Estanis | ${project.title} | Paris`;
    }, [id, project]);

    const handlePreviousClick = () => {
        const previousId = Number(id) - 1;
        router.push(`/project/${previousId}`);
    };

    const handleNextClick = () => {
        const nextId = Number(id) + 1;
        router.push(`/project/${nextId}`);
    };

    if (!project) {
        return <main className="isolate"><div className="relative"><div className="py-24 sm:py-32">Loading...</div></div></main>;
    }

    const pages = [
        { name: 'Projects', href: '/projects', current: false },
        { name: project.title, href: '#', current: true },
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
                        <div className="mx-auto max-w-7xl px-6 lg:px-8 about-project">
                            {project && (
                            <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">
                                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                                <div>
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl leading-10">
                                    {project.catchphrase}
                                </h1>
                                    <p className="text-2sm font-light tracking-tight text-gray-900 mt-5">{project.description}</p>
                                </div>
                                    <Image
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={project.herourl}
                                        alt="Reform"
                                        width={158}
                                        height={48}
                                    />
                                </div>
                            </div>
                            )}
                        </div>
                        <Image
                            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                            alt="App screenshot"
                            width={2432}
                            height={600}
                            className="ring-1 ring-gray-900/10 my-20 md:my-44 ring-img-g"
                        />
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:max-w-4xl text-left">
                            <div className="grid grid-cols-1 items-center gap-x-8 sm:gap-y-0 lg:gap-y-16 lg:grid-cols-2 items-baseline">
                                <div>
                                    <h2 className="role text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10">
                                        Role
                                    </h2>
                                </div>
                                <p className="text-2sm font-light tracking-tight text-gray-900 mt-5 project-role">{project.role}</p>
                            </div>

                            <div className="my-20 md:my-44">
                            <h3 className="overview text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 mb-10">
                                Overview
                            </h3>
                            <Image
                                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                alt="App screenshot"
                                width={2432}
                                height={600}
                                className="project-overview ring-1 ring-gray-900/10"
                            />
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
                            <div className="my-20 md:my-44">
                                <h3 className="close-up text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-10 mb-5">
                                    Close up look
                                </h3>
                                <p className="project-text-close text-2sm font-light tracking-tight text-gray-900 mb-10">{project.closeDescription}</p>
                                <Image
                                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={600}
                                    className="project-img-close ring-1 ring-gray-900/10"
                                />
                            </div>

                            <div>

                                <nav className="flex items-center justify-between px-4 sm:px-0 my-20 md:my-10">
                                    <div className="-mt-px flex w-0 flex-1">
                                        <button
                                            onClick={handlePreviousClick} disabled={Number(id) === 1}
                                            className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-[#00AB6D] hover:text-[#00AB6D]"
                                        >
                                            <ArrowLongLeftIcon className="mr-3 h-5 w-5 hover:text-[#00AB6D]" aria-hidden="true" />
                                            Previous
                                        </button>
                                    </div>

                                    <div className="-mt-px flex w-0 flex-1 justify-end">
                                        <button
                                            onClick={handleNextClick}
                                            className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-[#00AB6D] hover:text-[#00AB6D]"
                                        >
                                            Next
                                            <ArrowLongRightIcon className="ml-3 h-5 w-5 hover:text-[#00AB6D]" aria-hidden="true" />
                                        </button>
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