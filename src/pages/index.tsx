import Link from "next/link";
import {useEffect, useState} from "react";
import { gsap } from "gsap";
import Image from "next/image";


interface Category {
    id: number;
    name: string;
}
interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    categories: Category[];
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const element1 = document.querySelector('.catchphrase .pb-2 div');
        const element2 = document.querySelector('.description-main .pb-2 div');
        const element3 = document.querySelector('.title-main .pb-2 div');
        const element4 = document.querySelector(".w-screen .absolute");
        //const element5 = document.querySelector("header");

        gsap.fromTo(
            element1,
            {y: 80},
            {y: 0, duration: 1, ease: 'power1.out'}
        );

        gsap.fromTo(
            element2,
            {y: 80},
            {y: 0, duration: 1, delay: 3, ease: 'power1.out'}
        );

        gsap.fromTo(
            element3,
            {y: 80},
            {y: 0, duration: 1, delay: 2, ease: 'power1.out'}
        );

        gsap.fromTo(
            element4,
            {x: 200, alpha: 0},
            {x: 0, alpha: 1, duration: 1, delay: 3.5, ease: 'power1.out'}
        );

    });

    useEffect(() => {
        fetch('https://julien-api.byus.dev/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error(error));
    }, []);

    const stats = [
        {id: 1, name: 'Prototyping', value: ''},
        {id: 2, name: 'UX / UI', value: ''},
        {id: 3, name: 'Web development', value: ''},
    ]

    return (
        <>
            <main className="isolate overflow-clip">
                {/* Hero section */}
                <div className="relative">
                    <div className="py-24 sm:py-32">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
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
                                <p className="catchphrase overflow-hidden mt-6 text-sm leading-10 text-gray-600">
                                    <div className="pb-2 overflow-hidden">
                                        <div>
                                    I turn your drafts into, real projects
                                        </div>
                                    </div>
                                </p>
                                <h1 className="title-main overflow-hidden text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl leading-10">
                                    <div className="pb-2 overflow-hidden">
                                        <div>
                                    Website Design Da
                                        </div>
                                        </div>
                                </h1>
                                <p className="description-main overflow-hidden mt-6 text-md leading-6 text-gray-600">
                                    <div className="pb-2">
                                        <div>
                                    Im a webdesigner/developer and artistic director based in Paris.
                                    Using my strong expertise i have helped different companies to stand out !
                                        </div>
                                    </div>
                                    </p>
                            </div>
                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
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

                        <div className="w-screen relative h-[230px] md:h-[400px]">
                            <div className="absolute right-[-250px] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-[#00AB6D] rounded-[50%]"></div>
                        </div>

                    </div>
                </div>

                {/* Feature section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:block lg:block sm:hidden hidden">Featured</h2>
                        <h2 className="text-3xl font-bold tracking-tight text-[#00AB6D] sm:text-4xl md:block lg:block sm:hidden hidden">projects</h2>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:hidden lg:hidden sm:text-4xl" data-aos="fade-up">Featured
                            projects</h2>
                    </div>
                </div>

                <div className="parent inline-flex mt-3 sm:mt-13 lg:mt-13 relative">
                    {projects.map(project => (
                        <div key={project.id} className="child inline-table w-screen text-gray-900 px-6 z-20">
                            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                                <figure className="mt-6 md:mt-16">
                                    <p className="text-xl md:text-3xl font-bold tracking-tight text-gray-900 mb-2 mb-0">{project.title}</p>
                                    <div className="grid grid-rows-1 grid-flow-col gap-1">
                                        <figcaption className="mb-4 flex gap-x-2 text-xs md:text-sm leading-4 md:leading-6 text-gray-500">
                                            {project.description}
                                        </figcaption>
                                            {project.categories.map(category => (
                                                <p key={category.id} className="d-none md:d-block text-xs md:text-sm font-bold tracking-tight text-gray-900 uppercase text-right">{category.name}</p>
                                                ))}
                                    </div>
                                    <Link title={project.title} href={`/project/${project.id}`}>
                                        <Image
                                            className="aspect-video rounded-xl bg-gray-50 object-cover"
                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                                            alt="project-thumbnail"
                                            width={2432}
                                            height={600}
                                        />
                                    </Link>
                                </figure>
                            </div>
                        </div>
                    ))}

                    <div className="inline-flex absolute top-1/2 translate-y-[50%] z-10">
                        <div className="text-3xl md:text-6xl inline-table w-screen font-light text-gray-300">
                            KEEP SCROLLING
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl">
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

                {/* Services section */}
                <div className="service-container relative -z-10 mx-auto mt-32 sm:mt-96 px-6 sm:mt-56 lg:px-8 bg-[#151515] py-24 sm:py-32">
                    <div className="service-child mx-auto max-w-2xl lg:max-w-4xl">
                        <div className="md:grid grid-cols-2 grid-rows-1 grid-flow-col gap-1">
                            <div className="pr-44">
                                <h2 className="text-3xl font-bold tracking-tight text-[#00AB6D] sm:text-4xl md:block lg:block sm:hidden hidden">Services</h2>
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:block lg:block sm:hidden hidden">provided</h2>
                                <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:hidden lg:hidden sm:text-4xl">Services
                                    provided</h2>
                            </div>
                            <div className="">
                                <p className="mt-6 text-md leading-6 text-white text-left md:text-end">
                                    My goal is yo help you, accompany you in the realization of your blog type website,
                                    landing page, e-commerce and more...
                                </p>
                                <div className="py-24 sm:py-32">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
                                            {stats.map((stat) => (
                                                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                                    <Image src={stat.value}
                                                         className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
                                                           width={2432}
                                                           height={600}
                                                           alt="empty-alt"
                                                    />
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
