import React from 'react'

const Partner = () => {
    return (
        <div className='w-full h-[777px] bg-black flex items-center justify-center flex-col space-y-16 '>
            <p className='text-white text-[56px] font-semibold w-[783px] text-center'>Ihr Partner für innovative Weblösungen</p>

            <div className='w-full flex items-center justify-center space-x-2'>
                <div className='border-l-[1px] w-[302px] h-[181px] pt-3 flex flex-col space-y-3 border-l-[#1B1B1B] px-5'>
                    <p className='text-white opacity-70 text-[28px] font-thin'>01</p>
                    <p className='text-white tex-base font-bold'>Exzellenz</p>
                    <p className='text-base w-[254px] text-white'>Engagiert für die pünktliche Lieferung hochwertiger Produkte – jedes Mal.</p>
                </div>
                <div className='border-l-[1px] w-[302px] h-[181px] pt-3 flex flex-col space-y-3 border-l-[#1B1B1B] px-5'>
                    <p className='text-white opacity-70 text-[28px] font-thin'>02</p>
                    <p className='text-white tex-base font-bold'>Zusammenarbeit</p>
                    <p className='text-base w-full text-white'>Wir arbeiten als Erweiterung Ihres Teams, um Ihre Vision zum Leben zu erwecken.</p>
                </div>
                <div className='border-l-[1px] w-[302px] h-[181px] pt-3 flex flex-col space-y-3 border-l-[#1B1B1B] px-5'>
                    <p className='text-white opacity-70 text-[28px] font-thin'>03</p>
                    <p className='text-white tex-base font-bold'>Kundenorientierter Ansatz</p>
                    <p className='text-base w-full text-white'>Wir glauben an einen praktischen, personalisierten Ansatz für jeden Kunden.</p>
                </div>
                <div className='border-l-[1px] w-[302px] h-[181px] pt-3 flex flex-col space-y-3 border-l-[#1B1B1B] px-5'>
                    <p className='text-white opacity-70 text-[28px] font-thin'>04</p>
                    <p className='text-white tex-base font-bold'>Innovation</p>
                    <p className='text-base w-full text-white'>Wir setzen ständig neue Maßstäbe im Webdesign und in der Webentwicklung.</p>
                </div>

            </div>

        </div>
    )
}

export default Partner
