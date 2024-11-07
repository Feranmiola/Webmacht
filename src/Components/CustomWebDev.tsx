'use client'
import React, { useState } from 'react'
import WebmachtLogoSquare from './Icons/WebmachtLogoSquare'
import CustomDevIcon from './Icons/CustomDevIcon'
import BlueLine from './Icons/BlueLine'
import BlueDot from './Icons/BlueDot'
import UiDesignIcon from './Icons/UiDesignIcon'
import EcommerceIcon from './Icons/EcommerceIcon'
import MobileIcon from './Icons/MobileIcon'
import ApiIcon from './Icons/ApiIcont'
import MaintainanceIcon from './Icons/MaintainanceIcon'
import ForwardIcon from './Icons/ForwardIcon'
import CustomDevIconSmall from './Icons/CustomDevIconSmall'
import DesignIconBig from './Icons/DesignIconBig'

const CustomWebDev = () => {
    const [hoverIndec, setHoverIndex] = useState(0)
    const [selectedTab, setSelectedTab] = useState(2)


    return (
        <div className='bg-black w-full h-[1006px] flex items-center flex-col space-y-10 justify-center'>
            <div className='flex flex-row w-[1290px] h-[134px] items-center justify-between'>
                <p className='w-[654px] text-white text-[56px] font-semibold'>Comprehensive Web Development Solutions</p>
                <div className='flex flex-col w-[530px] h-full justify-between'>
                    <WebmachtLogoSquare />
                    <p className='text-white text-base w-full'>From custom website design to full-stack development, we help businesses thrive in the digital world.</p>
                </div>
            </div>

            <div className='w-[1289px] h-[560px] flex relative items-center justify-center'>


                <div
                    onClick={() => setSelectedTab(1)}
                    className={`${selectedTab === 1 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 1 ? 'bg-custom-gradient space-y-8 px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        {selectedTab === 1 ? (
                            <CustomDevIcon />
                        ) : (
                            <CustomDevIconSmall />
                        )}
                        {selectedTab === 1 ? (
                            <>
                                <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                    <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Custom Web Development</p>
                                    <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                                </div>
                                <div className='flex flex-col space-y-10'>
                                    <BlueLine />

                                    <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Frontend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Backend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>CMS Development</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Custom Web Development</p>
                            </>
                        )}
                    </div>
                </div>



                <div
                    onClick={() => setSelectedTab(2)}
                    className={`${selectedTab === 2 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 2 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>

                        {selectedTab === 2 ? (
                            <DesignIconBig />
                        ) : (
                            <UiDesignIcon />
                        )}
                        {selectedTab === 2 ? (
                            <>
                                <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                    <p className='text-white font-light leading-[4rem] text-[48px] w-full'>UI/UX Design</p>
                                    <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                                </div>
                                <div className='flex flex-col space-y-10'>
                                    <BlueLine />

                                    <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Frontend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Backend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>CMS Development</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>UI/UX Design</p>
                            </>
                        )}
                    </div>
                </div>




                <div
                    onClick={() => setSelectedTab(3)}
                    className={`${selectedTab === 3 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 3 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>

                        {selectedTab === 3 ? (
                            <DesignIconBig />
                        ) : (
                            <EcommerceIcon />
                        )}
                        {selectedTab === 3 ? (
                            <>
                                <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                    <p className='text-white font-light leading-[4rem] text-[48px] w-full'>E-Commerce Solutions</p>
                                    <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                                </div>
                                <div className='flex flex-col space-y-10'>
                                    <BlueLine />

                                    <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Frontend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>Backend Development</p>
                                        </div>

                                        <div className='flex flex-row space-x-2 items-center'>
                                            <BlueDot />
                                            <p className='text-white text-base'>CMS Development</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>E-Commerce Solutions</p>
                            </>
                        )}
                    </div>
                </div>




                <div
                    onClick={() => setSelectedTab(4)}
                    className={`${selectedTab === 4 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    {selectedTab === 4 ? (
                        <div className='h-full w-[519px] rounded-[24px] bg-custom-gradient border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  flex flex-col justify-evenly px-10 items-center'>
                            <div className='h-[275px] w-[443px] flex flex-col justify-between'>
                                <MobileIcon />
                                <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Mobile App Development</p>
                                <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                            </div>
                            <BlueLine />

                            <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Frontend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Backend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>CMS Development</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setHoverIndex(4)}
                            onMouseLeave={() => setHoverIndex(0)}
                            className='w-[168px] h-[560px]  gradient-container flex flex-col items-center pt-10 space-y-10 transition ease-in-out rounded-[24px] border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B] bg-[#080808]'>
                            <MobileIcon />
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Mobile App Development</p>
                        </div>
                    )}

                </div>


                <div
                    onClick={() => setSelectedTab(5)}
                    className={`${selectedTab === 5 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    {selectedTab === 5 ? (
                        <div className='h-full w-[519px] rounded-[24px] bg-custom-gradient border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  flex flex-col justify-evenly px-10 items-center'>
                            <div className='h-[275px] w-[443px] flex flex-col justify-between'>
                                <ApiIcon />
                                <p className='text-white font-light leading-[4rem] text-[48px] w-full'>API Integrations</p>
                                <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                            </div>
                            <BlueLine />

                            <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Frontend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Backend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>CMS Development</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setHoverIndex(5)}
                            onMouseLeave={() => setHoverIndex(0)}
                            className='w-[168px] h-[560px]  gradient-container flex flex-col items-center pt-10 space-y-10 transition ease-in-out rounded-[24px] border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B] bg-[#080808]'>
                            <ApiIcon />
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>API Integrations</p>
                        </div>
                    )}

                </div>



                <div
                    onClick={() => setSelectedTab(6)}
                    className={`${selectedTab === 6 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}>
                    {selectedTab === 6 ? (
                        <div className='h-full w-[519px] rounded-[24px] bg-custom-gradient border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  flex flex-col justify-evenly px-10 items-center'>
                            <div className='h-[275px] w-[443px] flex flex-col justify-between'>
                                <MaintainanceIcon />
                                <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Maintenance & Support</p>
                                <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you're a startup or a large enterprise.</p>
                            </div>
                            <BlueLine />

                            <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Frontend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>Backend Development</p>
                                </div>

                                <div className='flex flex-row space-x-2 items-center'>
                                    <BlueDot />
                                    <p className='text-white text-base'>CMS Development</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setHoverIndex(6)}
                            onMouseLeave={() => setHoverIndex(0)}
                            className='w-[168px] h-[560px]  gradient-container flex flex-col items-center pt-10 space-y-10 transition ease-in-out rounded-[24px] border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B] bg-[#080808]'>
                            <MaintainanceIcon />
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Maintenance & Support</p>
                        </div>
                    )}

                </div>

                <div className='absolute top-[20.3rem] left-[28.2rem] z-50'>
                    <ForwardIcon />
                </div>

            </div>
        </div>
    )
}

export default CustomWebDev