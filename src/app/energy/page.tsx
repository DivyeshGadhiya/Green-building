import Image from 'next/image';
import React from 'react';

export default function Energy() {
    return (
        <div className='pt-32 md:pt-32 lg:pt-52 px-4 md:px-16 lg:px-32 bg-gray-100'>
            <div className='flex flex-col lg:flex-row items-center gap-16'>
                
            </div>
            <div className='mt-16 lg:mt-24'>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                        <Image
                            src="/images/service/energy/energy.png"
                            alt="Energy"
                            width={1500}
                            height={500}
                            className='w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105'
                        />
                    </div>
                    <div className='text-center lg:text-left lg:w-1/2'>
                        <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-green-700'>New Buildings Energy</h1>
                        <ul className='list-disc list-inside text-lg text-gray-800 space-y-4 px-4 lg:px-0'>
                            <li>Evaluate the energy performance of the building and enable necessary modifications in the design before construction.</li>
                            <li>Understand the requirement of efficient design and development during the building design process.</li>
                            <li>Comparative analysis of different technologies for various end uses.</li>
                            <li>Ensure compliance with relevant standards and practices (e.g. ASHRAE 90.1).</li>
                            <li>Enable Integrated Design approach.</li>
                            <li>Reduce first costs through Right-Sizing.</li>
                            <li>Greater predictability of O & M Costs.</li>
                            <li>Glimpse into building's energy consumption post-occupancy beforehand.</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-16'>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='w-full lg:w-1/2 flex justify-center lg:justify-start'>
                            <Image
                                src="/images/service/energy/Energy audit.jpeg"
                                alt="Energy Audit"
                                width={500}
                                height={500}
                                className='w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105'
                            />
                        </div>
                        <div className='text-center lg:text-left lg:w-1/2'>
                            <h1 className='text-4xl lg:text-5xl font-bold mb-8 text-green-700'>Existing Buildings Energy</h1>
                            <ul className='list-disc list-inside text-lg text-gray-800 space-y-4 px-4 lg:px-0'>
                                <li>Evaluate the energy performance of a building in operation.</li>
                                <li>Calibrated energy model built based on actual data from the site and assumptions.</li>
                                <li>Once calibrated, the model behaves much like the actual building.</li>
                                <li>Allows cost benefit analysis of several ECMs and technologies.</li>
                                <li>Foresee benefits of better controls, optimized operations.</li>
                                <li>Faster decision making by providing estimated reduction in energy & hence money.</li>
                                <li>Powerful tool when considered as part of ASHRAE level III energy audit.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
