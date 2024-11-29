"use client"

import { motion } from 'framer-motion'
import ScrollArrow from './Icons/ScrollArrow'

export default function Starter() {
    const text = "Förderung der digitalen Transformation für Unternehmen"

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
                delay: 0.5,
                duration: 0.8
            }
        }
    }

    return (
        <div className="homeBackground relative h-[911px] min-h-[100vh] w-full">
            <div className="flex flex-col h-full justify-end px-5 md:pl-10 lg:pl-20 pb-[3rem] md:pb-[5rem] lg:pb-[7rem]">
                <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                    <motion.p
                        className="text-white text-[32px] md:text-[48px] lg:text-[60px] xl:text-[72px] font-semibold leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4.5rem] xl:leading-[5rem] w-full md:w-[600px] lg:w-[700px] xl:w-[772px]"
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
                        className="text-white w-full md:w-[500px] lg:w-[650px] xl:w-[752px] text-sm md:text-base font-light"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Ihr vertrauenswürdiger Partner für die Bereitstellung modernster Webentwicklungslösungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens.
                        Innovative digitale Erlebnisse für Unternehmen in Deutschland und weltweit gestalten.
                    </motion.p>
                    <motion.button
                        className="bg-deep-purple text-white text-sm md:text-base font-bold border border-transparent rounded-[4px] h-[40px] md:h-[48px] px-3 md:px-4 w-max hover:border-white hover:bg-transparent transition-colors duration-300 ease-in-out"
                        aria-label="Get In Touch"
                        variants={fadeInVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Kontakt aufnehmen
                    </motion.button>
                </div>
            </div>
            <motion.div
                className="absolute hidden md:flex right-5 lg:right-10 bottom-5 lg:bottom-10 h-[82px] w-[52px] items-center justify-between flex-col"
                variants={fadeInVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="p-2 rounded-full border h-[46px] border-white overflow-hidden">
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
                <p className="text-xs text-white opacity-70">SCROLLEN</p>
            </motion.div>
        </div>
    )
}

