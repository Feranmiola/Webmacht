import React from 'react'
import WebmachtLogoSquare from './Icons/WebmachtLogoSquare'

const CustomWebDev = () => {
    return (
        <div className='bg-black w-full h-[1006px] flex items-center flex-col space-y-10 justify-center'>
            <div className='flex flex-row w-[1290px] h-[134px] items-center justify-between'>
                <p className='w-[654px] text-white text-[56px] font-semibold'>Comprehensive Web Development Solutions</ p>
                <div className='flex flex-col w-[530px] h-full justify-between'>
                    <WebmachtLogoSquare />
                    <p className='text-white text-base w-full'>From custom website design to full-stack development, we help businesses thrive in the digital world.</p>
                </div>
            </div>

        </div>
    )
}

export default CustomWebDev