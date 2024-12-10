'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WebmachtIconFooter from './Icons/WebmachtIconFooter'
import LocationIcon from './Icons/LocationIcon'
import LinkIcon from './Icons/LinkIcon'
import { useRouter } from 'next-nprogress-bar'
import PhoneWhite from './Icons/PhoneWhite'
import MailIcon from './Icons/MailIcon'
import Webmacht from './Icons/Webmacht'

const Footer = () => {
    const router = useRouter()

    // State für jeden Icon-Hover
    const [isWebmachtHovered, setWebmachtHovered] = useState(false)
    const [isLocationHovered, setLocationHovered] = useState(false)
    const [isEmailHovered, setEmailHovered] = useState(false)
    const [isPhoneHovered, setPhoneHovered] = useState(false)

    return (
        <div className='bg-datkGrey flex w-full flex-col space-y-3'>
            <div className='md:hidden flex flex-col items-center justify-center border-t-[1px] border-b-[1px] border-t-[#1B1B1B] border-b-[#1B1B1B] py-10'>
                <div className='w-full max-w-[367px] flex flex-col space-y-5 px-5 justify-center border-l-[1px] border-r-[1px] border-l-[#1B1B1B] border-r-[#1B1B1B]'>
                    <Webmacht />
                    <div className='flex flex-row opacity-70 items-center space-x-2'>
                        <LocationIcon />
                        <p className='text-base text-white'>Struthstr. 1, 63607 Wächtersbach, Deutschland</p>
                    </div>

                    <a href="mailto:info@webmacht.de" className='flex flex-row opacity-70 items-center space-x-2 hover:opacity-100 transition-opacity'>
                        <MailIcon />
                        <p className='text-base text-white '>info@webmacht.de</p>
                    </a>
                    <a href="tel:+491756404044" className='flex flex-row opacity-70 items-center space-x-2 hover:opacity-100 transition-opacity'>
                        <PhoneWhite />
                        <p className='text-base text-white '>+49 175 640 4044</p>
                    </a>
                </div>

                <div className='w-full flex items-center justify-center border-t-[1px] border-b-[1px] border-t-[#1B1B1B] border-b-[#1B1B1B] py-5 mt-5'>
                    <div className='w-full max-w-[367px] items-center px-5 flex border-l-[1px] border-r-[1px] border-l-[#1B1B1B] border-r-[#1B1B1B]'>
                        <p className='text-base text-white tracking-wider opacity-70'>SCHNELLZUGRIFF</p>
                    </div>
                </div>

                <div className='w-full max-w-[367px] flex px-5 justify-center space-y-5 flex-col py-5 border-l-[1px] border-r-[1px] border-l-[#1B1B1B] border-r-[#1B1B1B]'>
                    <div
                        onClick={() => router.push('/impressum')}
                        className='flex flex-row opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 items-center'
                    >
                        <p className='text-base text-white '>Impressum</p>
                        <LinkIcon />
                    </div>
                    <div 
                        onClick={() => router.push('/data-protection')}
                        className='flex flex-row space-x-2 opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out items-center'>
                        <p className='text-base text-white '>Datenschutzerklärung</p>
                        <LinkIcon />
                    </div>
                    <div 
                        onClick={() => router.push('/allgemeine')}
                        className='flex flex-row space-x-2 opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out items-center'>
                        <p className='text-base text-white '>Allgemeine Geschäftsbedingungen</p>
                        <LinkIcon />
                    </div>
                </div>
            </div>

            <div className='hidden md:flex border-t-[1px] lg:h-[294px] border-b-[1px] border-t-[#1B1B1B] items-center justify-center border-b-[#1B1B1B] w-full'>
                <div className='w-full max-w-[1280px] lg:h-full flex flex-col lg:flex-row border-l-[1px] border-r-[#1B1B1B] border-r-[1px] border-l-[#1B1B1B]'>
                    <div
                        className='lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#1B1B1B] lg:w-[411px]  items-center flex justify-center py-8 lg:py-0'
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

                    <div className='lg:h-full border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#1B1B1B] lg:w-[434px] items-center flex justify-center flex-col'>
                        <div
                            className='w-full flex flex-row items-center justify-center opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 border-b-[1px] border-b-[#1B1B1B] py-8 lg:h-[147px]'
                            onMouseEnter={() => setLocationHovered(true)}
                            onMouseLeave={() => setLocationHovered(false)}
                        >
                            <motion.div
                                animate={isLocationHovered ? { scale: 1.1, y: -10 } : { scale: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LocationIcon />
                            </motion.div>
                            <p className='text-base text-white'>Struthstr. 1, 63607 Wächtersbach, Deutschland</p>
                        </div>

                        <div className='flex flex-col lg:flex-row items-center w-full lg:h-[147px]'>
                            <a
                                href="mailto:info@webmacht.de"
                                className='flex items-center justify-center py-8 lg:py-0 lg:h-full opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 w-full lg:w-[217px] border-b-[1px] lg:border-b-0 lg:border-r-[1px] border-[#1B1B1B]'
                                onMouseEnter={() => setEmailHovered(true)}
                                onMouseLeave={() => setEmailHovered(false)}
                            >
                                <motion.div
                                    animate={isEmailHovered ? { rotate: 360 } : { rotate: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    <MailIcon />
                                </motion.div>
                                <p className='text-base text-white '>info@webmacht.de</p>
                            </a>

                            <a
                                href="tel:+491756404044"
                                className='flex items-center justify-center opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out py-8 lg:py-0 lg:h-full w-full lg:w-[217px]'
                                onMouseEnter={() => setPhoneHovered(true)}
                                onMouseLeave={() => setPhoneHovered(false)}
                            >
                                <motion.div
                                    animate={isPhoneHovered ? { x: [0, -2, 2, -2, 0] } : { x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <PhoneWhite />
                                </motion.div>
                                <p className='text-base text-white '>+49 175 640 4044</p>
                            </a>
                        </div>
                    </div>

                    <div className='lg:w-[434px] flex flex-col items-center justify-center'>
                        <div className='py-8 lg:h-[68px] flex items-center justify-center md:justify-center lg:justify-start lg:pl-10 w-full border-b-[1px] border-b-[#1B1B1B]'>
                            <p className='text-base text-white tracking-wider opacity-70'>SCHNELLZUGRIFF</p>
                        </div>
                        <div className='py-8 lg:h-[226px] flex justify-center md:items-center lg:items-start flex-col space-y-6 lg:space-y-2 w-full lg:pl-10'>
                            <div className='flex flex-col justify-between items-center md:items-center lg:items-start space-y-6 lg:space-y-0 lg:h-[153px]'>
                                <div
                                    onClick={() => router.push('/impressum')}
                                    className='flex flex-row opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 items-center md:justify-center lg:justify-start w-full'
                                >
                                    <p className='text-base text-white text-center md:text-center lg:text-left'>Impressum</p>
                                    <LinkIcon />
                                </div>
                                <div
                                    onClick={() => router.push('/data-protection')}
                                    className='flex flex-row opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 items-center md:justify-center lg:justify-start w-full'
                                >
                                    <p className='text-base text-white text-center md:text-center lg:text-left'>Datenschutzerklärung</p>
                                    <LinkIcon />
                                </div>
                                <div
                                    onClick={() => router.push('/allgemeine')}
                                    className='flex flex-row opacity-70 hover:opacity-100 cursor-pointer transition ease-in-out space-x-2 items-center md:justify-center lg:justify-start w-full'
                                >
                                    <p className='text-base text-white text-center md:text-center lg:text-left'>Allgemeine Geschäftsbedingungen</p>
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

