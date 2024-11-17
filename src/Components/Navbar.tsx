'use client'
import React from 'react'
import Webmacht from './Icons/Webmacht'
import { useRouter } from 'next-nprogress-bar';
const Navbar = () => {
    const router = useRouter()
    return (
        <div className="navbar w-full h-[110px] bg-black flex">
            <div className="px-10 flex flex-row w-full h-full items-center justify-between">
                <div className="flex flex-row space-x-[5rem] items-center">
                    <div className=' cursor-pointer' onClick={() => router.push('/')}>
                        <Webmacht />
                    </div>
                    {/* <div className="flex flex-row items-center space-x-10">
                        <p className="text-base text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">About</p>
                        <p className="text-base text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">Services</p>
                        <p className="text-base text-white opacity-70 hover:opacity-100 font-medium hover:underline underline-offset-4 decoration-deep-purple cursor-pointer transition ease-in-out">Industries We Serve</p>
                    </div> */}
                </div>

                <div className='flex items-center justify-center px-2 py-1 cursor-pointer rounded-[4px] text-base font-medium text-white border-[1px] border-white hover:border-deep-purple hover:text-deep-purple transition ease-in-out'>
                    Kontakt aufnehmen
                </div>
            </div>

        </div>
    )
}

export default Navbar