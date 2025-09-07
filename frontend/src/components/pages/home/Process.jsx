import React from 'react'

const Process = ({heading, desc, img}) => {
    return (
        <div key={img} className="encrypt-desc text-[#dedede] lg:ml-[5.8vw] flex lg:block flex-col items-center">
            <img className='w-[8vw] lg:w-[2.2vw] h-[8vw] lg:h-[2.2vw] object-cover' src={img} alt="" />

            <div className='neue-txt flex lg:block flex-col items-center text-center lg:text-left'>
                <h3 className='text-[4.5vw] lg:text-[1.23vw] font-bold mb-1 mt-2 tracking-tight'>{heading}</h3>
                <p className='w-[70%] lg:w-[21ch] text-[4vw] lg:text-[1.15vw] leading-tight lg:leading-none tracking-tighter text-[#cfcfcf]'>{desc}</p>
            </div>
        </div>
    )
}

export default Process