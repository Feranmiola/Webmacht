import React from 'react'

const Solutions = () => {
    return (
        <div className='bg-white flex flex-col space-y-20 max-md:space-y-5 items-center justify-center w-full py-20 max-md:py-10'>
            <p className='text-[#080808] text-center md:w-[782px] max-md:text-[24px] max-md:max-w-[90%] max-md:leading-[2.5rem] max-md:pt-10 max-md:text-left md:text-[40px] lg:text-[56px] md:leading-[3.5rem] lg:leading-[4rem] font-semibold'>
                Digitale Lösungen, maßgeschneidert für eine <span className='text-deep-purple'>Vielzahl von Branchen.</span>
            </p>
            <div className='w-[1256px] max-md:w-[90%] md:w-[90%] lg:w-[1256px] flex flex-col items-center md:justify-between'>
                <div className='w-full items-center justify-between flex flex-row max-md:flex-col max-md:space-y-0 md:flex-wrap lg:flex-nowrap md:gap-5 lg:gap-0'>
                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Gesundheitswesen</p>
                        <p className='text-base font-normal text-datkGrey'>Wir entwickeln sichere, HIPAA-konforme Plattformen, Patientenportale und Telemedizinlösungen.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>E-Commerce</p>
                        <p className='text-base font-normal text-datkGrey'>Individuelle Online-Shops mit benutzerfreundlichen Schnittstellen und nahtloser Zahlungsintegration.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Reise & Tourismus</p>
                        <p className='text-base font-normal text-datkGrey'>Individuelle Buchungsplattformen, Reise-Apps und Systeme zur Verwaltung von Reiserouten.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Finanzen</p>
                        <p className='text-base font-normal text-datkGrey'>Entwicklung robuster Fintech-Plattformen mit Sicherheits-, Compliance- und Analysefunktionen.</p>
                    </div>
                </div>

                <div className='w-full items-center justify-between flex flex-row max-md:flex-col max-md:space-y-0 md:flex-wrap lg:flex-nowrap md:gap-5 lg:gap-0 md:mt-5 lg:mt-0 max-md:mt-0'>
                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Bildung</p>
                        <p className='text-base font-normal text-datkGrey'>Interaktive E-Learning-Plattformen mit Echtzeit-Kollaborationstools für Schüler und Lehrer.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Immobilien</p>
                        <p className='text-base font-normal text-datkGrey'>Digitale Lösungen für Immobilienangebote, virtuelle Touren und CRM-Systeme.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Logistik</p>
                        <p className='text-base font-normal text-datkGrey'>End-to-End-Lösungen für Bestandsverwaltung, Sendungsverfolgung und Lieferkettenmanagement.</p>
                    </div>

                    <div className='flex flex-col  py-5 space-y-3 w-[302px] max-md:w-full md:w-[45%] lg:w-[302px] h-[180px] max-md:h-auto md:h-[160px] lg:h-[180px] max-md:space-y-2 '>
                        <p className='text-2xl font-bold max-md:text-xl text-[#080808]'>Einzelhandel</p>
                        <p className='text-base font-normal text-datkGrey'>Omnichannel-Einzelhandelsplattformen mit Bestandsverwaltung, POS-Integration und Tools für Kundenbindung.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Solutions

