"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function Counter() {
    return (
        <section className="text-center py-32 px-16 bg-white">
            <div className='flex justify-center '>
                <h1 className="text-4xl font-serif text-green-800 pb-10 w-[40%] font-bold mb-8">Leading Sustainability in Building for over a decade</h1>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={5000} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Simulation & Modelling</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={100} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Auditing</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={500} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">Green Building Certification</span>
                </div>
                <div className="bg-green-800 text-white p-6 shadow-2xl rounded-lg flex-1 min-w-[200px]">
                    <span className="block text-4xl font-bold text-green-400">
                        <CountUp end={100} duration={1} suffix="+" />
                    </span>
                    <span className="mt-2 block">MEPF Projects</span>
                </div>
            </div>
        </section>
    )
}
