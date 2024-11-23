'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BlueDot from './Icons/BlueDot'
import GreenDot from './Icons/GreenDot'
import OrangeDot from './Icons/OrangeDot'
import RedDot from './Icons/RedDot'
import PinkDot from './Icons/PinkDot'
import PurpleDot from './Icons/PurpleDot'
import WebDevIconMobile from './Icons/WebDevIconMobile'
import UiUxIconMobile from './Icons/UiUxIconMobile'
import ECommerceIconMoble from './Icons/ECommerceIconMoble'
import MobileIconMobile from './Icons/MobileIconMobile'
import APIIconMobile from './Icons/APIIconMobile'
import SetttingIconMobile from './Icons/SetttingIconMobile'
import BlueLineMobile from './Icons/BlueLineMobile'
import GreenLineMobile from './Icons/GreenLineMobile'
import OrangeLineMobile from './Icons/OrangeLineMobile'
import RedLineMobile from './Icons/RedLineMobile'
import PinkLineMobile from './Icons/PinkLineMobile'
import PurpleLineMobile from './Icons/PurpleLineMobile'

const tabData = [
    { id: 1, title: 'Individuelle Webentwicklung', icon: WebDevIconMobile, color: 'blue', line: BlueLineMobile, dot: BlueDot, description: 'Maßgeschneiderte Websites und Webanwendungen für Ihre spezifischen Anforderungen.', items: ['Frontend-Entwicklung', 'Backend-Entwicklung', 'CMS-Entwicklung'] },
    { id: 2, title: 'UI/UX Design', icon: UiUxIconMobile, color: 'green', line: GreenLineMobile, dot: GreenDot, description: 'Intuitive und ansprechende digitale Erlebnisse für Ihre Kunden.', items: ['UX-Forschung & Wireframing', 'Benutzeroberflächen-Design', 'Prototyping und Testen'] },
    { id: 3, title: 'E-Commerce-Lösungen', icon: ECommerceIconMoble, color: 'orange', line: OrangeLineMobile, dot: OrangeDot, description: 'Leistungsstarke E-Commerce-Plattformen für Ihren Online-Shop.', items: ['WooCommerce, Shopify, Magento', 'Zahlungsgateway-Integration', 'Individuelle Warenkorb-Lösungen'] },
    { id: 4, title: 'Mobile App-Entwicklung', icon: MobileIconMobile, color: 'red', line: RedLineMobile, dot: RedDot, description: 'Responsive und skalierbare mobile Anwendungen für Ihr Unternehmen.', items: ['iOS & Android App-Entwicklung', 'Plattformübergreifende Entwicklung', 'App-Wartung & Optimierung'] },
    { id: 5, title: 'API-Integrationen', icon: APIIconMobile, color: 'pink', line: PinkLineMobile, dot: PinkDot, description: 'Nahtlose Verbindungen zwischen verschiedenen Systemen und Apps.', items: ['Drittanbieter-API-Integrationen', 'Individuelle API-Entwicklung'] },
    { id: 6, title: 'Wartung & Support', icon: SetttingIconMobile, color: 'purple', line: PurpleLineMobile, dot: PurpleDot, description: 'Laufende Wartung und Support für Ihre digitale Plattform.', items: ['Website-Sicherheitsupdates', 'Regelmäßige Backups und Überwachung', 'Fehlerbehebung und Bugfixes'] },
];

const MobileCustomWebDev = () => {
    const [selectedTab, setSelectedTab] = useState(1)

    const handleTabClick = (tabId: number) => {
        setSelectedTab(tabId)
    }

    return (
        <div id='tabs' className='w-[100%] max-w-[356px] pb-20 h-[758.68px] flex flex-col -space-y-1 relative items-center justify-center lg:hidden mx-auto'>
            {tabData.map((tab) => (
                <motion.div
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    layout
                    transition={{ layout: { duration: 0.3, type: 'spring' } }}
                    className={`w-full ${selectedTab === tab.id ? 'h-[438.68px]' : 'h-[64px]'} mb-2`}
                >
                    <div className={`w-full h-full flex  border-l-[1.5px] border-l-[#1B1B1B] border-t-[1.5px] border-t-[#1B1B1B] rounded-[24px] ${selectedTab === tab.id ? 'bg-custom-gradient flex-col space-y-6 p-7' : 'gradient-container py-4 flex-row space-x-2 justify-start items-center px-4'}`}>
                        <AnimatePresence mode="wait">
                            <div className={`${(selectedTab === tab.id && (tab.id === 3 || tab.id === 4)) ? 'rotate-90' : ''} w-max h-max`}>
                                <tab.icon />
                            </div>
                        </AnimatePresence>
                        {selectedTab === tab.id ? (
                            <AnimatePresence>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex flex-col space-y-7'
                                >
                                    <div className='flex flex-col justify-between space-y-2'>
                                        <p className='text-white font-light text-2xl leading-tight w-full'>{tab.title}</p>
                                        <p className='text-xs text-white w-full'>{tab.description}</p>
                                    </div>
                                    <div className='flex flex-col space-y-7'>
                                        <tab.line />
                                        <div className='flex flex-col space-y-4'>
                                            {tab.items.map((item, index) => (
                                                <div key={index} className='flex flex-row space-x-2 items-center'>
                                                    <tab.dot />
                                                    <p className='text-white text-xs'>{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <p className='text-white text-sm whitespace-nowrap pl-2 w-full transition-all ease-in-out'>{tab.title}</p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default MobileCustomWebDev

