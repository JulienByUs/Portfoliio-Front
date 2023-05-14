export default function Home() {

    return (
        <>
            <main className="isolate overflow-clip">
                {/* Hero section */}
                <div className="relative">
                    <div className="py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div className="relative isolate overflow-hidden px-6 py-12 sm:px-24 xl:py-24">
                                <div
                                    className="overflow-hidden pb-2 text-[#0E0B3D] text-[38px] text-md-[54px] leading-[45px] leading-md-[64px]"
                                    >Obtenez
                                    un site internet <span
                                        className="sub-lighted text-[38px] text-md-[54px]">professionnel</span> et <span
                                        className="sub-lighted-bis text-[38px] text-md-[54px]">performant</span></div>
                                <p className="catchphrase overflow-hidden text-md text-center leading-10 text-gray-600">
                                    <div className="overflow-hidden pb-2">
                                        <div className="leading-6">Avec
                                            mon aide, vos idées prendront vie et se concrétiseront en des projets réels
                                            et fonctionnels.
                                        </div>
                                    </div>
                                </p>
                                <form className="mx-auto mt-10 flex max-w-md gap-x-4">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-[#171531]/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-[#171531] flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                    >
                                        Notify me
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                </div>
            </main>
        </>
    )
}
