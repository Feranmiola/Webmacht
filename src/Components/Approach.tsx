import React from 'react';
import Image from 'next/image';
import ConsultationIcon from './Icons/ConsultationIcon';
import DesignIcon from './Icons/DesignIcon';
import LaunchIcon from './Icons/LaunchIcon';

const Approach = () => {
    return (
        <div className="relative bg-black pb-20 xl:pb-[20rem]">
            {/* Mobile version */}
            <div className='flex flex-col space-y-10 md:hidden w-full p-10'>
                <p className="text-white font-light z-[9999] text-[24px]">Unser Ansatz</p>

                <div className='flex flex-col h-[463.99px] items-center justify-between'>
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp"
                        alt="Beratung & Entdeckung"
                        className="h-[265px] w-[358px]"
                        width={358}
                        height={265}
                    />
                    <div className="flex flex-col space-y-2">
                        <ConsultationIcon />
                        <div className="flex flex-col">
                            <p className="text-white font-bold text-2xl">Beratung & Entdeckung</p>
                            <p className="text-white text-base">Verständnis Ihrer Geschäftsziele und Vision.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-[463.99px] items-center justify-between'>
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp"
                        alt="Design & Entwicklung"
                        className="h-[265px] w-[358px]"
                        width={358}
                        height={265}
                    />
                    <div className="flex flex-col space-y-2">
                        <DesignIcon />
                        <div className="flex flex-col">
                            <p className="text-white font-bold text-2xl">Design & Entwicklung</p>
                            <p className="text-white text-base">Erstellung benutzerfreundlicher, maßgeschneiderter digitaler Lösungen.</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col h-[463.99px] items-center justify-between'>
                    <Image
                        src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp"
                        alt="Start & Optimierung"
                        className="h-[265px] w-[358px]"
                        width={358}
                        height={265}
                    />
                    <div className="flex flex-col space-y-2">
                        <LaunchIcon />
                        <div className="flex flex-col">
                            <p className="text-white font-bold text-2xl">Start & Optimierung</p>
                            <p className="text-white text-base">Reibungslose Umsetzung mit fortlaufender Unterstützung und Optimierung.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medium screen version (non-sticky) */}
            <div className="hidden md:block lg:hidden h-screen w-full py-10 px-6">
                <p className="text-white font-light text-3xl mb-10">Unser Ansatz</p>

                <div className="space-y-20">
                    <div className="flex flex-row items-center space-x-8">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp"
                            alt="Beratung & Entdeckung"
                            className="h-[400px] w-[326px]"
                            width={326}
                            height={400}
                        />
                        <div className="flex flex-col space-y-4">
                            <ConsultationIcon />
                            <div className="flex flex-col">
                                <p className="text-white font-bold text-3xl">Beratung & Entdeckung</p>
                                <p className="text-white text-lg">Verständnis Ihrer Geschäftsziele und Vision.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center space-x-8">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp"
                            alt="Design & Entwicklung"
                            className="h-[400px] w-[326px]"
                            width={326}
                            height={400}
                        />
                        <div className="flex flex-col space-y-4">
                            <DesignIcon />
                            <div className="flex flex-col">
                                <p className="text-white font-bold text-3xl">Design & Entwicklung</p>
                                <p className="text-white text-lg">Erstellung benutzerfreundlicher, maßgeschneiderter digitaler Lösungen.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-row items-center space-x-8">
                        <Image
                            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp"
                            alt="Start & Optimierung"
                            className="h-[400px] w-[326px]"
                            width={326}
                            height={400}
                        />
                        <div className="flex flex-col space-y-4">
                            <LaunchIcon />
                            <div className="flex flex-col">
                                <p className="text-white font-bold text-3xl">Start & Optimierung</p>
                                <p className="text-white text-lg">Reibungslose Umsetzung mit fortlaufender Unterstützung und Optimierung.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large screen version (sticky) */}
            <div className="h-[2631px] min-h-screen hidden lg:block xl:hidden w-full py-10">
                {/* Seite 1 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page1" className="w-full max-w-[1272px] h-[792px] bg-[#090909] z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex space-x-24 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp"
                                    alt="Beratung & Entdeckung"
                                    className="h-[600px] w-[489px]"
                                    width={489}
                                    height={600}
                                />
                                <div className="flex flex-col h-[408.5px] justify-between">
                                    <p className="text-white font-light z-[9999] text-5xl">Unser Ansatz</p>
                                    <div className="flex flex-col space-y-2">
                                        <ConsultationIcon />
                                        <div className="flex flex-col">
                                            <p className="text-white font-bold text-4xl">Beratung & Entdeckung</p>
                                            <p className="text-white text-xl">Verständnis Ihrer Geschäftsziele und Vision.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 2 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page2" className="w-full max-w-[1272px] h-[792px] bg-[#090909] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex items-center space-x-24 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp"
                                    alt="Design & Entwicklung"
                                    className="h-[600px] w-[489px]"
                                    width={489}
                                    height={600}
                                />
                                <div className="flex flex-col space-y-2">
                                    <DesignIcon />
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-4xl">Design & Entwicklung</p>
                                        <p className="text-white text-xl pr-10">Erstellung benutzerfreundlicher, maßgeschneiderter digitaler Lösungen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 3 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page3" className="w-full max-w-[1272px] h-[792px] bg-[#090909] z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex items-center space-x-24 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp"
                                    alt="Start & Optimierung"
                                    className="h-[600px] w-[489px]"
                                    width={489}
                                    height={600}
                                />
                                <div className="flex h-full flex-col space-y-2">
                                    <LaunchIcon />
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-4xl">Start & Optimierung</p>
                                        <p className="text-white text-xl">Reibungslose Umsetzung mit fortlaufender Unterstützung und Optimierung.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* XL screen version (sticky) */}
            <div className="h-[3000px] min-h-screen hidden xl:block w-full py-10">
                {/* Seite 1 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page1" className="w-full max-w-[1536px] h-[900px] bg-[#090909] z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex space-x-32 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp"
                                    alt="Beratung & Entdeckung"
                                    className="h-[700px] w-[571px]"
                                    width={571}
                                    height={700}
                                />
                                <div className="flex flex-col h-[480px] justify-between">
                                    <p className="text-white font-light z-[9999] text-[64px]">Unser Ansatz</p>
                                    <div className="flex flex-col space-y-4">
                                        <ConsultationIcon/>
                                        <div className="flex flex-col">
                                            <p className="text-white font-bold text-[48px]">Beratung & Entdeckung</p>
                                            <p className="text-white text-2xl">Verständnis Ihrer Geschäftsziele und Vision.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 2 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page2" className="w-full max-w-[1536px] h-[900px] bg-[#090909] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex items-center space-x-32 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp"
                                    alt="Design & Entwicklung"
                                    className="h-[700px] w-[571px]"
                                    width={571}
                                    height={700}
                                />
                                <div className="flex flex-col space-y-4">
                                    <DesignIcon/>
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[48px]">Design & Entwicklung</p>
                                        <p className="text-white text-2xl pr-10">Erstellung benutzerfreundlicher, maßgeschneiderter digitaler Lösungen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 3 */}
                <div className='sticky top-[110px] h-screen bg-black'>
                    <div id="page3" className="w-full max-w-[1536px] h-[900px] bg-[#090909] z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full'>
                            <div className='flex-row flex items-center space-x-32 px-0'>
                                <Image
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp"
                                    alt="Start & Optimierung"
                                    className="h-[700px] w-[571px]"
                                    width={571}
                                    height={700}
                                />
                                <div className="flex h-full flex-col space-y-4">
                                    <LaunchIcon />
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[48px]">Start & Optimierung</p>
                                        <p className="text-white text-2xl">Reibungslose Umsetzung mit fortlaufender Unterstützung und Optimierung.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Approach;