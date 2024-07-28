import Image from 'next/image'
import React from 'react'

export default function Fire() {
    return (
        <div className='py-16 px-4 pt-52 md:px-16 lg:px-32 bg-gray-50'>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                    <Image
                        src="/images/service/fire/fire safty.webp"
                        alt="Fire Safety Audit"
                        width={500}
                        height={500}
                        className='w-full h-auto object-cover rounded-lg  transition-transform duration-500 hover:scale-105'
                    />
                </div>
                <div className='lg:w-1/2 text-center lg:text-left'>
                    <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-red-700'>Fire Safety Audits</h1>
                    <p className='text-lg text-gray-800 mb-6'>
                        A Fire Safety Audit is a systematic evaluation of a building's fire safety measures and compliance with regulations.
                        Our experts conduct thorough assessments to identify potential fire hazards and provide recommendations
                        for enhancing fire safety protocols, ensuring the safety of occupants and property.
                    </p>
                    <div>
                        <h2 className='text-2xl font-bold mb-4 text-red-600'>Services</h2>
                        <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
                            <li>Fire Safety Risk Assessment</li>
                            <li>Fire Detection and Alarm System Evaluation</li>
                            <li>Fire Suppression System Inspection</li>
                            <li>Emergency Evacuation Plan Review</li>
                        </ul>
                    </div>
                    <div className='mt-8'>
                        <h2 className='text-2xl font-bold mb-4 text-red-600'>Team Credentials</h2>
                        <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
                            <li>Certified Fire Safety Engineers</li>
                            <li>Experienced Fire Risk Assessors</li>
                            <li>Compliance and Regulatory Experts</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
