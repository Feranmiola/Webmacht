// Footer.jsx
'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WebmachtIconFooter from './Icons/WebmachtIconFooter'
import LocationIcon from './Icons/LocationIcon'
import EmailIcon from './Icons/EmailIcon'
import PhoneIcon from './Icons/PhoneIcon'
import LinkIcon from './Icons/LinkIcon'
import { useRouter } from 'next-nprogress-bar'

const Footer = () => {
    const router = useRouter()

    // State for each icon hover
    const [isWebmachtHovered, setWebmachtHovered] = useState(false)
    const [isLocationHovered, setLocationHovered] = useState(false)
    const [isEmailHovered, setEmailHovered] = useState(false)
    const [isPhoneHovered, setPhoneHovered] = useState(false)

    return (
        <div className='bg-datkGrey flex w-full h-[331px] flex-col space-y-3'>
            <div className='border-t-[1px] border-b-[1px] border-t-[#1B1B1B] flex items-center justify-center border-b-[#1B1B1B] w-full h-[294px]'>
                <div className='w-[1280px] h-full flex flex-row border-l-[1px] border-r-[#1B1B1B] border-r-[1px] border-l-[#1B1B1B]'>

                    {/* Webmacht Icon with Scale and Shimmer Effect */}
                    <div
                        className='h-full border-r-[1px] border-r-[#1B1B1B] w-[411px] items-center flex justify-center'
                        onMouseEnter={() => setWebmachtHovered(true)}
                        onMouseLeave={() => setWebmachtHovered(false)}
                    >
                        <motion.div
                            animate={isWebmachtHovered ? { scale: 1.1, filter: 'brightness(1.2)' } : { scale: 1, filter: 'brightness(1)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <WebmachtIconFooter />
                        </motion.div>
                    </div>

                    <div className='h-full border-r-[1px] border-r-[#1B1B1B] w-[434px] items-center flex justify-center flex-col'>

                        {/* Location Icon with Scale and Lift Effect */}
                        <div
                            className='w-full flex flex-row items-center justify-center space-x-2 border-b-[1px] border-b-[#1B1B1B] h-[147px]'
                            onMouseEnter={() => setLocationHovered(true)}
                            onMouseLeave={() => setLocationHovered(false)}
                        >
                            <motion.div
                                animate={isLocationHovered ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LocationIcon />
                            </motion.div>
                            <p className='text-base text-white opacity-70'>Zimmerstraße 78, 10117 Berlin, Deutschland</p>
                        </div>

                        <div className='flex flex-row items-center w-full h-[147px]'>

                            {/* Email Icon with 360 Rotation Effect */}
                            <div
                                className='flex items-center justify-center h-full space-x-2 w-[217px] border-r-[1px] border-r-[#1B1B1B]'
                                onMouseEnter={() => setEmailHovered(true)}
                                onMouseLeave={() => setEmailHovered(false)}
                            >
                                <motion.div
                                    animate={isEmailHovered ? { rotate: 360 } : { rotate: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <EmailIcon />
                                </motion.div>
                                <p className='text-base text-white opacity-70'>info@webmacht.de</p>
                            </div>

                            {/* Phone Icon with Shake Effect */}
                            <div
                                className='flex items-center justify-center h-full w-[217px]'
                                onMouseEnter={() => setPhoneHovered(true)}
                                onMouseLeave={() => setPhoneHovered(false)}
                            >
                                <motion.div
                                    animate={isPhoneHovered ? { x: [0, -2, 2, -2, 0] } : { x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <PhoneIcon />
                                </motion.div>
                                <p className='text-base text-white opacity-70'>+49 0 0900 090</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-[434px] h-full flex flex-col items-center justify-center'>
                        <div className='h-[68px] flex items-center pl-10 w-full border-b-[1px] border-b-[#1B1B1B]'>
                            <p className='text-base text-white tracking-wider opacity-70'>QUICK LINKS</p>
                        </div>
                        <div className='h-[226px] flex justify-center flex-col space-y-2 w-full pl-10'>
                            <div className='h-[153px] flex flex-col justify-between'>
                                <div
                                    onClick={() => router.push('/impressum')}
                                    className='flex cursor-pointer flex-row space-x-2 items-center'
                                >
                                    <p className='text-base text-white opacity-70'>Impressum</p>
                                    <LinkIcon />
                                </div>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <p className='text-base text-white opacity-70'>Privacy Policy</p>
                                    <LinkIcon />
                                </div>
                                <div className='flex flex-row space-x-2 items-center'>
                                    <p className='text-base text-white opacity-70'>Terms & Conditions</p>
                                    <LinkIcon />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
