import Image from 'next/image'
import React from 'react'

export default function Waste() {
  return (
    <div className='py-16 px-4 pt-52 md:px-16 lg:px-32 bg-gray-50'>
      <div className='flex flex-col lg:flex-row items-center gap-16'>
        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
          <Image
            src="/images/service/waste/waste audit.webp"
            alt="Waste Management"
            width={500}
            height={500}
            className='w-full h-auto object-cover rounded-lg  transition-transform duration-500 hover:scale-105'
          />
        </div>
        <div className='lg:w-1/2 text-center lg:text-left'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-green-700'>Waste Management</h1>
          <p className='text-lg text-gray-800 mb-6'>
            Sustainable Waste Management is a critical aspect of green building practices. It involves the systematic collection, separation, and recycling of waste materials to minimize environmental impact. Our comprehensive waste management services are designed to enhance sustainability, reduce waste, and promote recycling within your building.
          </p>
          <div>
            <h2 className='text-2xl font-bold mb-4 text-green-600'>Services</h2>
            <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
              <li>Waste Audits and Analysis</li>
              <li>Recycling Program Implementation</li>
              <li>Composting Solutions</li>
              <li>Hazardous Waste Management</li>
              <li>Construction Waste Reduction</li>
            </ul>
          </div>
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-green-600'>Team Credentials</h2>
            <ul className='list-disc list-inside text-lg text-gray-800 space-y-2'>
              <li>Certified Waste Management Professionals</li>
              <li>Environmental Engineers</li>
              <li>Sustainability Consultants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
