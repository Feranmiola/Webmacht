'use client'
import React, { useState } from 'react'
import MobileIconWhite from './Icons/MobileIconWhite'
import WebIconGray from './Icons/WebIconGray'
import ShortLine from './Icons/ShortLine'
import CrossPlatformIconGray from './Icons/CrossPlatformIconGray'
import MobileIconGrey from './Icons/MobileIconGrey'
import WebIconWhite from './Icons/WebIconWhite'
import CrossPlatformIconWhite from './Icons/CrossPlatformIconWhite'

const Technologies = () => {
    const [activeTabs, setActiveTabs] = useState(1)
    return (
        <div className='md:h-[911px] max-md:py-10 w-full bg-[#F6FBFE] flex flex-col space-y-5 max-md:space-y-10 items-center justify-center'>
            <div className='h-[137px] flex flex-col items-center max-md:items-start px-5 justify-between'>
                <p className='text-datkGrey text-[56px] max-md:text-2xl font-semibold'>Technologien, die wir verwenden</p>
                <p className='text-datkGrey text-base text-center max-md:text-start md:w-[530px] max-sm:w-[90%]'>Von maßgeschneidertem Webdesign bis hin zu Full-Stack-Entwicklung helfen wir Unternehmen, in der digitalen Welt zu wachsen.</p>
            </div>

            <div className='md:h-[54px] rounded-[500px] flex flex-row max-md:flex-col max-md:space-y-1 md:items-center md:justify-center max-md:w-full max-md:items-start max-md:px-5 md:space-x-3'>
                <div
                    onClick={() => setActiveTabs(1)}
                    className={`w-[216px] h-[46px] transition ease-in-out rounded-[200px] flex items-center justify-center ${activeTabs === 1 ? 'bg-deep-purple' : 'bg-transparent cursor-pointer hover:border-deep-purple'} border-[1px] border-transparent  flex-row space-x-1`}>
                    {activeTabs === 1 ? (
                        <MobileIconWhite />
                    ) : (
                        <MobileIconGrey />
                    )}
                    <p className={`${activeTabs === 1 ? 'text-white font-medium' : 'text-[#080808B2] font-normal'} text-base`}>Mobile Anwendungen</p>
                </div>

                <div className={`${activeTabs === 3 ? 'opacity-0' : ''}`}>
                    <ShortLine />
                </div>


                <div
                    onClick={() => setActiveTabs(2)}
                    className={`w-[216px] h-[46px] transition ease-in-out rounded-[200px] flex items-center justify-center ${activeTabs === 2 ? 'bg-deep-purple' : 'bg-transparent cursor-pointer hover:border-deep-purple'} border-[1px] border-transparent  flex-row space-x-1`}>
                    {activeTabs === 2 ? (
                        <WebIconWhite />
                    ) : (
                        <WebIconGray />
                    )}
                    <p className={`${activeTabs === 2 ? 'text-white font-medium' : 'text-[#080808B2] font-normal'} text-base`}>Web-Plattformen</p>
                </div>

                <div className={`${activeTabs === 1 ? 'opacity-0' : ''}`}>
                    <ShortLine />
                </div>


                <div
                    onClick={() => setActiveTabs(3)}
                    className={`w-[216px] h-[46px] transition ease-in-out rounded-[200px] flex items-center justify-center ${activeTabs === 3 ? 'bg-deep-purple' : 'bg-transparent cursor-pointer hover:border-deep-purple'} border-[1px] border-transparent  flex-row space-x-1`}>

                    {activeTabs === 3 ? (
                        <CrossPlatformIconWhite />
                    ) : (
                        <CrossPlatformIconGray />
                    )}
                    <p className={`${activeTabs === 3 ? 'text-white font-medium' : 'text-[#080808B2] font-normal'} text-base`}>Plattformübergreifend</p>
                </div>
            </div>

            <img
                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1730816529/Group_6021_e10y86.webp'
                alt='Technologie-Icons'
                className='max-md:hidden'
            />


            <img
                src='https://res.cloudinary.com/debiu7z1b/image/upload/v1732211795/Frame_6020_evdedx.webp'
                alt='Technologie-Icons'
                className='md:hidden'
            />

        </div>
    )
}

export default Technologies
