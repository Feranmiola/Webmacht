'use client'
import React from 'react'
import { smoothScrollTo } from './SmoothScrollTO';

const StartBuilding = () => {
    const handleClick = () => {
        smoothScrollTo('Contact');
      }
    return (
        <div className='bg-white my-10 h-[788px] w-full startBuilfingBG flex flex-col space-y-10 items-center justify-center md:h-[600px] lg:h-[788px]'>
            <p className='text-[80px] max-md:text-[48px] md:text-[60px] lg:text-[80px] max-md:w-full max-md:text-center md:text-center lg:text-left max-md:leading-[2.5rem] md:leading-[3.5rem] lg:leading-[5rem] text-datkGrey font-semibold md:max-w-[80%] lg:max-w-none'>
                <span className='text-deep-purple'>Beginnen Sie</span> mit uns zu bauen.
            </p>
            <div onClick={handleClick} className='bg-deep-purple text-white hover:text-deep-purple text-base font-bold border-[1px] border-transparent rounded-[4px] flex items-center justify-center h-[48px] px-4 hover:border-deep-purple hover:bg-transparent cursor-pointer transition ease-in-out md:text-lg lg:text-base md:h-[56px] lg:h-[48px] md:px-6 lg:px-4'>
                Kontakt aufnehmen
            </div>
        </div>
    )
}

export default StartBuilding

