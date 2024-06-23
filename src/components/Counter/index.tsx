"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function Counter() {
    return (
        <section className="text-center py-32 max-md:py-16 px-16 bg-white">
            <div className='flex justify-center  '>
                <h1 className="text-4xl font-serif text-green-800 max-md:text-xl max-md:w-full pb-10 w-[80%] font-bold mb-8 max-sm:mb-4">Leading Sustainability in Building for over a decade</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]" data-aos="fade-up" data-aos-duration="500">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={5000} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Simulation & Modelling</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]"  data-aos="fade-up" data-aos-duration="1000">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={100} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Auditing</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]"  data-aos="fade-up" data-aos-duration="1500">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={500} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Green Building Certification</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]"  data-aos="fade-up" data-aos-duration="2000">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={100} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">MEPF Projects</span>
                </div>
            </div>
        </section>
    )
}
