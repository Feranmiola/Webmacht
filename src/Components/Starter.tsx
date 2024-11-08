"use client"

import { motion } from 'framer-motion'
import ScrollArrow from './Icons/ScrollArrow'

export default function Starter() {
    const text = "Empowering Digital Transformation for Businesses"

    const sentenceVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.05
            }
        }
    }

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5, // Adjust this delay based on the length of your main text
                duration: 0.8
            }
        }
    }

    return (
        <div className="homeBackground relative h-[911px] max-h-[100vh] w-full">
            <div className="flex flex-col h-full justify-end pl-20 pb-[7rem]">
                <div className="flex flex-col space-y-8">
                    <motion.p
                        className="text-white text-[72px] font-semibold leading-[5rem] w-[772px]"
                        variants={sentenceVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {text.split("").map((char, index) => (
                            <motion.span key={`${char}-${index}`} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.p>
                    <motion.p
                        className="text-white w-[752px] text-base font-light"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Your trusted partner to deliver cutting-edge web development solutions tailored to your business needs.
                        Crafting innovative digital experiences for businesses in Germany and across the globe.
                    </motion.p>
                    <motion.button
                        className="bg-deep-purple text-white text-base font-bold border border-transparent rounded-[4px] h-[48px] w-[162px] hover:border-white hover:bg-transparent transition-colors duration-300 ease-in-out"
                        aria-label="Get In Touch"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Get In Touch
                    </motion.button>
                </div>
            </div>
            <motion.div
                className="absolute right-10 bottom-10 h-[82px] w-[52px] flex items-center justify-between flex-col"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="px-2 rounded-full border border-white overflow-hidden"
                    animate={{
                        height: [52, 62, 52],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    >
                        <ScrollArrow />
                    </motion.div>
                </motion.div>
                <p className="text-xs text-white opacity-70">SCROLL</p>
            </motion.div>
        </div>
    )
}