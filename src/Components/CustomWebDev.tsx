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
    const [selectedTab, setSelectedTab] = useState(1)
    const [hoverIndex, setHoverIndex] = useState(0)
    const [rotation, setRotation] = useState(0);


    const handleTabClick = (tabId: number) => {
        setSelectedTab(tabId === 6 && selectedTab === 6 ? 1 : tabId)
    }

    const handleNext = () => {
        if (selectedTab === 6) {
            setSelectedTab(1)
        } else { setSelectedTab(selectedTab + 1) }
    }

    return (
        <div className='bg-black w-full h-[1006px] flex items-center flex-col space-y-20 justify-center'>
            <div className='flex flex-row w-[1290px] h-[134px] items-center justify-between'>
                <p className='w-[654px] text-white text-[56px] font-semibold'>Umfassende Webentwicklungslösungen</p>
                <div className='flex flex-col w-[530px] h-full justify-between'>
                    <motion.div
                        className='w-max h-max'
                        onHoverStart={() => setRotation(rotation + 90)}
                        animate={{ rotate: rotation }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ display: "inline-block" }}
                    >
                        <WebmachtLogoSquare />
                    </motion.div>
                    <p className='text-white text-base w-full'>Von individuellem Website-Design bis hin zur Full-Stack-Entwicklung helfen wir Unternehmen, in der digitalen Welt erfolgreich zu sein.</p>
                </div>
            </div>

            <div id='tabs'
                className='w-[1289px] h-[560px] flex relative items-center justify-center'>
                <motion.div
                    onMouseEnter={() => setHoverIndex(1)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 1 ? <CustomDevIcon /> :

                                    <motion.div
                                        animate={{ rotate: hoverIndex === 1 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <CustomDevIconSmall />
                                    </motion.div>
                                }
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
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Individuelle Webentwicklung</p>
                                        <p className='text-sm text-white w-full'>Maßgeschneiderte Websites, individuelle Webanwendungen und Plattformen, die den spezifischen Anforderungen Ihres Unternehmens entsprechen, unabhängig davon, ob Sie ein Startup oder ein großes Unternehmen sind.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <BlueLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <BlueDot />
                                                <p className='text-white text-base'>Frontend-Entwicklung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <BlueDot />
                                                <p className='text-white text-base'>Backend-Entwicklung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <BlueDot />
                                                <p className='text-white text-base'>CMS-Entwicklung</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 1 ? 'opacity-100' : ''}`}>Individuelle Webentwicklung</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onMouseEnter={() => setHoverIndex(2)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 2 ? <DesignIconBig /> :
                                    <motion.div
                                        animate={{ rotate: hoverIndex === 2 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <UiDesignIcon />
                                    </motion.div>
                                }

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
                                        <p className='text-sm text-white w-full'>Unser Design-First-Ansatz stellt sicher, dass Ihre Kunden intuitive, ansprechende und visuell beeindruckende digitale Erlebnisse genießen.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <GreenLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>UX-Forschung & Wireframing</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>Benutzeroberflächen-Design</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <GreenDot />
                                                <p className='text-white text-base'>Prototyping und Testen</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 2 ? 'opacity-100' : ''}`}>UI/UX Design</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onMouseEnter={() => setHoverIndex(3)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 3 ? <EcommerceIconBig /> :
                                    <motion.div
                                        animate={{ rotate: hoverIndex === 3 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <EcommerceIcon />
                                    </motion.div>
                                }
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
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>E-Commerce-Lösungen</p>
                                        <p className='text-sm text-white w-full'>Starten Sie Ihren Online-Shop mit Zuversicht. Wir erstellen individuelle E-Commerce-Plattformen oder verbessern bestehende mit leistungsstarken Funktionen, um den Verkauf anzukurbeln.</p>
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
                                                <p className='text-white text-base'>Zahlungsgateway-Integration</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <OrangeDot />
                                                <p className='text-white text-base'>Individuelle Warenkorb-Lösungen</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 3 ? 'opacity-100' : ''}`}>E-Commerce-Lösungen</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onMouseEnter={() => setHoverIndex(4)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 4 ? <MobileIconBig /> :
                                    <motion.div
                                        animate={{ rotate: hoverIndex === 4 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <MobileIcon />
                                    </motion.div>
                                }
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
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Mobile App-Entwicklung</p>
                                        <p className='text-sm text-white w-full'>Wir entwickeln responsive, skalierbare mobile Anwendungen, die sich nahtlos in Ihr Unternehmen integrieren und Benutzer einbinden.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <RedLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>iOS & Android App-Entwicklung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>Plattformübergreifende Entwicklung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <RedDot />
                                                <p className='text-white text-base'>App-Wartung & Optimierung</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 4 ? 'opacity-100' : ''}`}>Mobile App-Entwicklung</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onMouseEnter={() => setHoverIndex(5)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 5 ? <APIIconBig /> :
                                    <motion.div
                                        animate={{ rotate: hoverIndex === 5 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <ApiIcon />
                                    </motion.div>
                                }
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
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>API-Integrationen</p>
                                        <p className='text-sm text-white w-full'>Wir ermöglichen nahtlose Verbindungen zwischen verschiedenen Systemen und Apps durch leistungsstarke API-Integrationen.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <PinkLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PinkDot />
                                                <p className='text-white text-base'>Drittanbieter-API-Integrationen</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PinkDot />
                                                <p className='text-white text-base'>Individuelle API-Entwicklung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center opacity-0 cursor-default'>
                                                <PinkDot />
                                                <p className='text-white text-base'>CMS-Entwicklung</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 5 ? 'opacity-100' : ''}`}>API-Integrationen</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    onMouseEnter={() => setHoverIndex(6)}
                    onMouseLeave={() => setHoverIndex(0)}
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
                                transition={{ duration: 0.01 }}
                            >
                                {selectedTab === 6 ? <MaintainanceIconBig /> :
                                    <motion.div
                                        animate={{ rotate: hoverIndex === 6 ? 45 : 0 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        style={{ display: "inline-block" }}
                                    >
                                        <MaintainanceIcon />
                                    </motion.div>
                                }
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
                                        <p className='text-white font-light leading-[4rem] text-[48px] w-full'>Wartung & Support</p>
                                        <p className='text-sm text-white w-full'>Wir bieten laufende Wartung und Support, um sicherzustellen, dass Ihre Plattform einwandfrei funktioniert.</p>
                                    </div>
                                    <div className='flex flex-col space-y-10'>
                                        <PurlpleLine />
                                        <div className='h-[130px] w-[443px] flex flex-col justify-between'>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Website-Sicherheitsupdates</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Regelmäßige Backups und Überwachung</p>
                                            </div>
                                            <div className='flex flex-row space-x-2 items-center'>
                                                <PurpleDot />
                                                <p className='text-white text-base'>Fehlerbehebung und Bugfixes</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className={`text-white text-[32px] opacity-70 whitespace-nowrap pl-20 rotate-90 w-full transition-all ease-in-out ${hoverIndex === 6 ? 'opacity-100' : ''}`}>Wartung & Support</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    className={`absolute cursor-pointer top-[20.3rem] z-50 transition ease-in-out ${selectedTab === 6 ? 'rotate-180' : 'rotate-0'}`}
                    animate={{
                        left: selectedTab === 1 ? '28.2rem' :
                            selectedTab === 2 ? '39.2rem' :
                                selectedTab === 3 ? '49.8rem' :
                                    selectedTab === 4 ? '60.2rem' :
                                        selectedTab === 5 ? '70.9rem' :
                                            '48.8rem'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    onClick={handleNext}
                >
                    <ForwardIcon />
                </motion.div>
            </div>
        </div>
    )
}

export default CustomWebDev