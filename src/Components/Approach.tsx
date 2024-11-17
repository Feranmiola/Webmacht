import React from 'react';
import ConsultationIcon from './Icons/ConsultationIcon';
import DesignIcon from './Icons/DesignIcon';
import LaunchIcon from './Icons/LaunchIcon';

const Approach = () => {
    return (
        <div className="relative bg-black pb-20">
            {/* Container für Sticky-Bereiche */}
            <div className="h-[2631px] w-full py-10">
                {/* Seite 1 */}
                <div className='sticky top-[110px] h-screen bg-black '>
                    <div id="page1" className="w-[1272px] h-[792px]  bg-[#090909] z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full '>
                            <div className='flex-row flex space-x-[6rem]'>
                                <img
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp"
                                    alt="Beratung & Entdeckung"
                                    className="h-[600px] w-[489px]"
                                />
                                <div className="flex flex-col h-[408.5px] justify-between">
                                    <p className="text-white font-light z-[9999] text-[56px]">Unser Ansatz</p>
                                    <div className="flex flex-col space-y-2">
                                        <ConsultationIcon />
                                        <div className="flex flex-col">
                                            <p className="text-white font-bold text-[36px]">Beratung & Entdeckung</p>
                                            <p className="text-white text-xl">Verständnis Ihrer Geschäftsziele und Vision.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 2 */}
                <div className='sticky top-[110px] h-screen bg-black '>
                    <div id="page2" className="w-[1272px] h-[792px]  bg-[#090909] z-20 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full '>
                            <div className='flex-row flex items-center space-x-[6rem]'>
                                <img
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp"
                                    alt="Design & Entwicklung"
                                    className="h-[600px] w-[489px]"
                                />
                                <div className="flex flex-col space-y-2">
                                    <DesignIcon />
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[36px]">Design & Entwicklung</p>
                                        <p className="text-white text-xl pr-10">Erstellung benutzerfreundlicher, maßgeschneiderter digitaler Lösungen.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seite 3 */}
                <div className='sticky top-[110px] h-screen bg-black '>
                    <div id="page3" className="w-[1272px] h-[792px]  bg-[#090909] z-30 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className='flex items-center w-full h-full '>
                            <div className='flex-row flex items-center space-x-[6rem]'>
                                <img
                                    src="https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp"
                                    alt="Start & Optimierung"
                                    className="h-[600px] w-[489px]"
                                />
                                <div className="flex h-full flex-col space-y-2">
                                    <LaunchIcon />
                                    <div className="flex flex-col">
                                        <p className="text-white font-bold text-[36px]">Start & Optimierung</p>
                                        <p className="text-white text-xl">Reibungslose Umsetzung mit fortlaufender Unterstützung und Optimierung.</p>
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
