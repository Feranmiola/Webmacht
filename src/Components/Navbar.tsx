'use client'
import React from 'react'
import Webmacht from './Icons/Webmacht'
import { useRouter } from 'next-nprogress-bar';
import { smoothScrollTo } from './SmoothScrollTO';
const Navbar = () => {

    const handleClick = () => {
        smoothScrollTo('Contact');
      }


    const router = useRouter()
    return (
        <div className="navbar w-full h-[110px] bg-black flex">
            <div className="px-10 flex flex-row w-full h-full items-center justify-between">
                <div className="flex flex-row space-x-[5rem] items-center">
                    <div className=' cursor-pointer' onClick={() => router.push('/')}>
                        <Webmacht />
                    </div>
                </div>

                <div onClick={handleClick} className='flex max-md:hidden items-center justify-center px-2 py-1 cursor-pointer rounded-[4px] text-base font-medium text-white border-[1px] border-white hover:border-deep-purple hover:text-deep-purple transition ease-in-out'>
                    Kontakt aufnehmen
                </div>
            </div>

        </div>
    )
}

export default Navbar