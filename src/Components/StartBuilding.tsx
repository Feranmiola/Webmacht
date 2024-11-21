import React from 'react'

const StartBuilding = () => {
    return (
        <div className='bg-white my-10 h-[788px] w-full startBuilfingBG flex flex-col space-y-10 items-center justify-center'>
            <p className='text-[80px] max-md:text-[48px] max-md:w-full max-md:text-center max-md:leading-[2.5rem] text-datkGrey font-semibold'><span className='text-deep-purple'>Beginnen Sie</span> mit uns zu bauen.</p>
            <div className='bg-deep-purple text-white hover:text-deep-purple text-base font-bold border-[1px] border-transparent rounded-[4px] flex items-center justify-center h-[48px] px-4 hover:border-deep-purple hover:bg-transparent cursor-pointer transition ease-in-out '>
                Kontakt aufnehmen
            </div>
        </div>
    )
}

export default StartBuilding
