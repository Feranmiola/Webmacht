import React from 'react'

const Solutions = () => {
    return (
        <div className='h-[799px] bg-white flex flex-col space-y-20 items-center justify-center w-full'>
            <p className='text-[#080808] text-center w-[782px] text-[56px] leading-[4rem] font-semibold'>Digital solutions tailored to a <span className='text-deep-purple'>wide range of industries.</span></p>
            <div className='w-[1256px] h-[376px] flex flex-col items-center justify-between'>
                <div className='w-full items-center justify-between flex flex-row'>
                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Healthcare</p>
                        <p className='text-base font-normal text-datkGrey'>We build secure, HIPAA-compliant healthcare platforms, patient portals, and telemedicine solutions.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>E-commerce</p>
                        <p className='text-base font-normal text-datkGrey'>Custom online stores with user-friendly interfaces and seamless payment integration.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Travel & Tourism</p>
                        <p className='text-base font-normal text-datkGrey'>Customized booking platforms, travel apps, and itinerary management systems.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Finance</p>
                        <p className='text-base font-normal text-datkGrey'>Develop robust fintech platforms with security, compliance, and analytics features.</p>
                    </div>
                </div>

                <div className='w-full items-center justify-between flex flex-row'>
                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Education</p>
                        <p className='text-base font-normal text-datkGrey'>Interactive e-learning platforms with real-time collaboration tools for students and teachers.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Real Estate</p>
                        <p className='text-base font-normal text-datkGrey'>Digital solutions for property listings, virtual tours, and CRM systems.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Logistics</p>
                        <p className='text-base font-normal text-datkGrey'>End-to-end solutions for inventory, shipment tracking, and supply chain management.</p>
                    </div>

                    <div className='flex flex-col px-5 py-5 space-y-3 w-[302px] h-[180px]'>
                        <p className='text-2xl font-bold text-[#080808]'>Retail</p>
                        <p className='text-base font-normal text-datkGrey'>Omnichannel retail platforms with inventory management, POS integration, and customer engagement tools.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Solutions