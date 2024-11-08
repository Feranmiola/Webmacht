'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ScrollArrow from './Icons/ScrollArrow'

const Starter = () => {
    return (
        <div className='homeBackground relative h-[911px] max-h-[100vh] w-full'>
            <div className='flex flex-col h-full justify-end pl-20 pb-[7rem]'>
                <div className='flex flex-col space-y-8'>
                    <p className='text-white text-[72px] font-semibold leading-[5rem] w-[772px]'>Empowering Digital Transformation for Businesses</p>
                    <p className='text-white w-[752px] text-base font-light'>Your trusted partner to deliver cutting-edge web development solutions tailored to your business needs. Crafting innovative digital experiences for businesses in Germany and across the globe.</p>
                    <div className='bg-deep-purple text-white text-base font-bold border-[1px] border-transparent rounded-[4px] flex items-center justify-center h-[48px] w-[162px] hover:border-white hover:bg-transparent cursor-pointer transition ease-in-out '>
                        Get In Touch
                    </div>
                </div>
            </div>
            <div className='absolute right-10 bottom-10 h-[82px] w-[52px] flex items-center justify-between flex-col'>
                <motion.div
                    className='px-2 rounded-full border-[1px] border-white overflow-hidden'
                    animate={{
                        height: ["52px", "62px", "52px"]
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0]
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    >
                        <ScrollArrow />
                    </motion.div>
                </motion.div>
                <p className='text-xs text-white opacity-70'>SCROLL</p>
            </div>
        </div>
    )
}

export default Starter