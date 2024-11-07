'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WebmachtLogoSquare from './Icons/WebmachtLogoSquare'
import CustomDevIcon from './Icons/CustomDevIcon'
import BlueLine from './Icons/BlueLine'
import BlueDot from './Icons/BlueDot'
import UiDesignIcon from './Icons/UiDesignIcon'
import EcommerceIcon from './Icons/EcommerceIcon'
import MobileIcon from './Icons/MobileIcon'
import ApiIcon from './Icons/ApiIcont'
import MaintainanceIcon from './Icons/MaintainanceIcon'
import ForwardIcon from './Icons/ForwardIcon'
import CustomDevIconSmall from './Icons/CustomDevIconSmall'
import DesignIconBig from './Icons/DesignIconBig'
import EcommerceIconBig from './Icons/EcommerceIconBig'
import MobileIconBig from './Icons/MobileIconBig'
import APIIconBig from './Icons/APIIconBig'
import MaintainanceIconBig from './Icons/MaintainanceIconBig'
import GreenLine from './Icons/GreenLine'
import GreenDot from './Icons/GreenDot'
import OrangeLine from './Icons/OrangeLine'
import OrangeDot from './Icons/OrangeDot'
import RedLine from './Icons/RedLine'
import RedDot from './Icons/RedDot'
import PinkLine from './Icons/PinkLine'
import PinkDot from './Icons/PinkDot'
import PurlpleLine from './Icons/PurlpleLine'
import PurpleDot from './Icons/PurpleDot'

const CustomWebDev = () => {
    const [selectedTab, setSelectedTab] = useState(2)

    const handleTabClick = (tabId: any) => {
        setSelectedTab(tabId === 6 && selectedTab === 6 ? 1 : tabId)
    }

    return (
        <div className='bg-black w-full h-[1006px] flex items-center flex-col space-y-10 justify-center'>
            <div className='flex flex-row w-[1290px] h-[134px] items-center justify-between'>
                <p className='w-[654px] text-white text-[56px] font-semibold'>Comprehensive Web Development Solutions</p>
                <div className='flex flex-col w-[530px] h-full justify-between'>
                    <WebmachtLogoSquare />
                    <p className='text-white text-base w-full'>From custom website design to full-stack development, we help businesses thrive in the digital world.</p>
                </div>
            </div>

            <div id='tabs' className='w-[1289px] h-[560px] flex relative items-center justify-center'>
                <motion.div
                    onClick={() => handleTabClick(1)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 1 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 1 ? 'bg-custom-gradient space-y-8 px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 1 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 1 ? <CustomDevIcon /> : <CustomDevIconSmall />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 1 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col space-y-8'
                                >
                                    <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Custom Web Development</p>
                                        <p className='text-sm text-white w-full'>Tailor-made websites, custom web apps, and platforms that meet the specific needs of your business, whether you&apos;re a startup or a large enterprise.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
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
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Custom Web Development</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => handleTabClick(2)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 2 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 2 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 2 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 2 ? <DesignIconBig /> : <UiDesignIcon />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 2 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col flex-1 justify-between'
                                >
                                    <div className='w-[443px] flex flex-col pt-10 justify-between space-y-3'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>UI/UX Design</p>
                                        <p className='text-sm text-white w-full'>Our design-first approach ensures that your customers enjoy intuitive, engaging, and visually stunning digital experiences.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <GreenLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>UX Research & Wireframing</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>User Interface Design</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>Prototyping and Testing</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>UI/UX Design</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => handleTabClick(3)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 3 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 3 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 3 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 3 ? <EcommerceIconBig /> : <EcommerceIcon />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 3 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col space-y-8'
                                >
                                    <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>E-Commerce Solutions</p>
                                        <p className='text-sm text-white w-full'>Launch your online store with confidence. We create custom eCommerce platforms or enhance existing ones with powerful features to drive sales.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <OrangeLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <OrangeDot />
                                                <p className='text-white text-base'>WooCommerce, Shopify, Magento</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <OrangeDot />
                                                <p className='text-white text-base'>Payment Gateway Integration</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <OrangeDot />
                                                <p className='text-white text-base'>Custom Shopping Cart Solutions</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>E-Commerce Solutions</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => handleTabClick(4)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 4 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 4 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 4 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 4 ? <MobileIconBig /> : <MobileIcon />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 4 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col space-y-8'
                                >
                                    <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Mobile App Development</p>
                                        <p className='text-sm text-white w-full'>We build responsive, scalable mobile applications that seamlessly integrate with your business and engage users.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <RedLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>iOS & Android App Development</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>Cross-platform Development</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>App Maintenance & Optimization</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Mobile App Development</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => handleTabClick(5)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 5 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 5 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 5 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 5 ? <APIIconBig /> : <ApiIcon />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 5 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col flex-1 justify-between'
                                >
                                    <div className='w-[443px] flex flex-col justify-between space-y-3 pt-10'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>API Integrations</p>
                                        <p className='text-sm text-white w-full'>We enable seamless connections between different systems and apps through powerful API integrations.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <PinkLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PinkDot />
                                                <p className='text-white text-base'>Third-party API integrations</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PinkDot />
                                                <p className='text-white text-base'>Custom API development</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center opacity-0 cursor-default'>
                                                <PinkDot />
                                                <p className='text-white text-base'>CMS Development</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>API Integrations</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onClick={() => handleTabClick(6)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`${selectedTab === 6 ? 'h-full w-[519px]' : 'w-[168px] h-[560px]'}`}
                >
                    <div className={`w-full h-full flex flex-col py-10 border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B]  rounded-[24px] ${selectedTab === 6 ? 'bg-custom-gradient justify-between px-10 ' : 'gradient-container space-y-10 items-center'}`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedTab === 6 ? 'big' : 'small'}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                {selectedTab === 6 ? <MaintainanceIconBig /> : <MaintainanceIcon />}
                            </motion.div>
                        </AnimatePresence>
                        {selectedTab === 6 ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col space-y-8'
                                >
                                    <div className='w-[443px] flex flex-col justify-between space-y-3'>
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Maintenance & Support</p>
                                        <p className='text-sm text-white w-full'>We provide ongoing maintenance and support to ensure your platform operates flawlessly.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <PurlpleLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Website Security Updates</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Regular Backups and Monitoring</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Troubleshooting and Bug Fixes</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full'>Maintenance & Support</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    className='absolute top-[20.3rem] z-50'
                    animate={{
                        left: `${28.2 + (selectedTab - 1) * 7.3}rem`,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <ForwardIcon />
                </motion.div>
            </div>
        </div>
    )
}

export default CustomWebDev