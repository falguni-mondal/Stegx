import React from 'react'
import { Link } from 'react-router-dom'

const HomeHeading = () => {
    return (
        <div className="heading-container lg:col-span-2 text-[#dedede] lg:mt-[3vmin]">
            <h1 className='heading-txt'>Talk in Pixels Not in Words.</h1>
            <p className='heading-paragraph'>Securely encode your confidential messages within images, ensuring privacy, stealth, and easy retrieval with our advanced steganography technology—fast, reliable, and undetectable.</p>
            <Link to="/docs" className='learn-more-btn block w-fit py-2.5 lg:py-2 px-8 lg:px-6 rounded-lg border-[#dedede] border font-bold whiteglow-hover transition-all duration-500'>Learn More</Link>
        </div>
    )
}

export default HomeHeading