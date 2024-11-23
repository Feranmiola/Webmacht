import React from 'react'

const Partner = () => {
    const partnerItems = [
        { number: '01', title: 'Exzellenz', description: 'Engagiert für die pünktliche Lieferung hochwertiger Produkte – jedes Mal.' },
        { number: '02', title: 'Zusammenarbeit', description: 'Wir arbeiten als Erweiterung Ihres Teams, um Ihre Vision zum Leben zu erwecken.' },
        { number: '03', title: 'Kundenorientierter Ansatz', description: 'Wir glauben an einen praktischen, personalisierten Ansatz für jeden Kunden.' },
        { number: '04', title: 'Innovation', description: 'Wir setzen ständig neue Maßstäbe im Webdesign und in der Webentwicklung.' },
    ]

    return (
        <div className='w-full bg-black flex items-center justify-center flex-col space-y-8 sm:space-y-12 md:space-y-16 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10'>
            <h2 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-semibold max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[783px] text-center leading-tight'>
                Ihr Partner für innovative Weblösungen
            </h2>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
                {partnerItems.map((item, index) => (
                    <div key={index} className='border-l border-[#1B1B1B] pl-4 sm:pl-5 py-4 sm:py-6 flex flex-col space-y-2 sm:space-y-3'>
                        <p className='text-white opacity-70 text-2xl sm:text-3xl md:text-[28px] font-thin'>{item.number}</p>
                        <p className='text-white text-lg sm:text-xl font-bold'>{item.title}</p>
                        <p className='text-base text-white'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Partner

