import Image from 'next/image'
import React from 'react'

export default function Water() {
  return (
    <div className='py-16 px-4 pt-52 md:px-16 lg:px-32 bg-gray-50'>
      <div className='flex flex-col lg:flex-row items-center gap-16'>
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
          <Image
            src="/images/service/water/water audit.png"
            alt="Water Audit"
            width={500}
            height={500}
            className='w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105'
          />
        </div>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-green-700'>Water Audit</h1>
          <p className='text-lg text-gray-800 mb-6'>
            This Water Audit Report provides an in-depth analysis of the water consumption patterns, efficiency, and conservation opportunities within the green building. The audit identifies potential areas for water savings, offers recommendations for improving water efficiency, and highlights best practices for sustainable water management.
          </p>
          
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-green-600'>Services</h2>
            <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
              <li>Water Audits and Analysis</li>
              <li>Water-Efficient Fixture Recommendations</li>
              <li>Leak Detection and Repair</li>
              <li>Rainwater Harvesting Systems</li>
              <li>Greywater Recycling Solutions</li>
            </ul>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-green-600'>Team Credentials</h2>
            <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
              <li>Certified Water Management Professionals</li>
              <li>Environmental Engineers</li>
              <li>Sustainability Consultants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
