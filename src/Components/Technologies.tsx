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
        <div className='h-[911px] w-full bg-[#F6FBFE] flex flex-col space-y-5 items-center justify-center'>
            <div className='h-[137px] flex flex-col items-center justify-between'>
                <p className='text-datkGrey text-[56px] font-semibold'>Technologien, die wir verwenden</p>
                <p className='text-datkGrey text-base text-center w-[530px]'>Von maßgeschneidertem Webdesign bis hin zu Full-Stack-Entwicklung helfen wir Unternehmen, in der digitalen Welt zu wachsen.</p>
            </div>

            <div className='h-[54px] rounded-[500px] flex flex-row items-center justify-center space-x-3'>
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
            />

        </div>
    )
}

export default Technologies
