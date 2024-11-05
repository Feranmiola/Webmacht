import Image from 'next/image'
import React from 'react'
import ConsultationIcon from './Icons/ConsultationIcon'
import DesignIcon from './Icons/DesignIcon'
import LaunchIcon from './Icons/LaunchIcon'

const Approach = () => {
    return (
        <div className='flex flex-col space-y-10 items-center justify-center bg-black'>
            <div className='flex flex-row h-[792px] bg-[#090909] w-[1272px]  space-x-[6rem] items-center'>
                <img
                    src={'https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_44_fvvdqm.webp'}
                    alt='Consultation & Discovery'
                    className='h-[600px] w-[489px]'
                />

                <div className='flex flex-col space-y-2'>
                    <ConsultationIcon />
                    <div className='flex flex-col'>
                        <p className='text-white font-bold text-[36px]'>Consultation & Discovery</p>
                        <p className='text-white text-xl'>Understanding your business goals and vision.</p>
                    </div>

                </div>

            </div>

            <div className='flex flex-row h-[792px] bg-[#090909] w-[1272px]  space-x-[6rem] items-center'>
                <img
                    src={'https://res.cloudinary.com/debiu7z1b/image/upload/v1730806886/Frame_45_cysssl.webp'}
                    alt='Consultation & Discovery'
                    className='h-[600px] w-[489px]'
                />

                <div className='flex flex-col space-y-2'>
                    <DesignIcon />
                    <div className='flex flex-col'>
                        <p className='text-white font-bold text-[36px]'>Design & Development</p>
                        <p className='text-white text-xl'>Building custom, user-friendly digital solutions.</p>
                    </div>

                </div>

            </div>

            <div className='flex flex-row h-[792px] bg-[#090909] w-[1272px]  space-x-[6rem] items-center'>
                <img
                    src={'https://res.cloudinary.com/debiu7z1b/image/upload/v1730806887/Frame_46_llwwl9.webp'}
                    alt='Consultation & Discovery'
                    className='h-[600px] w-[489px]'
                />

                <div className='flex flex-col space-y-2'>
                    <LaunchIcon />
                    <div className='flex flex-col'>
                        <p className='text-white font-bold text-[36px]'>Launch & Optimization</p>
                        <p className='text-white text-xl'>Seamless execution with ongoing support and optimization.</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Approach