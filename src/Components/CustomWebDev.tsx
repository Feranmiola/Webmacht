import React from 'react'
import WebmachtLogoSquare from './Icons/WebmachtLogoSquare'
import CustomDevIcon from './Icons/CustomDevIcon'
import BlueLine from './Icons/BlueLine'
import BlueDot from './Icons/BlueDot'

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

            <div className='w-[1289px] h-[560px] flex relative items-start justify-start'>
                <div className='h-full w-[519px] rounded-[24px] border-[1.5px] border-[#1B1B1B] bg-[#080808] flex flex-col justify-evenly items-center'>
                    <div className='h-[275px] w-[443px] flex flex-col justify-between'>
                        <CustomDevIcon />
                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Custom Web Development</p>
                        <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you’re a startup or a large enterprise.</p>
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

            </div>

        </div>
    )
}

export default CustomWebDev