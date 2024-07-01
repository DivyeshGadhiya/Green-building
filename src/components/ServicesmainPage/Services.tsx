import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
    {
        title: 'Sustainability Reporting',
        icon: 'images/servicesmainpage/Reporting.png', // Update with your icon path
        description: 'Description for Sustainability Reporting',
    },
    {
        title: 'Decarbonisation Roadmap & Strategies',
        icon: 'images/servicesmainpage/cloudy.png', // Update with your icon path
        description: 'Description for Decarbonisation Roadmap & Strategies',
    },
    {
        title: 'Green Building Certifications',
        icon: 'images/servicesmainpage/property-contract.png', // Update with your icon path
        description: 'Description for Green Building Certifications',
    },
    {
        title: 'Building Performance Analysis',
        icon: 'images/servicesmainpage/home-inspection.png', // Update with your icon path
        description: 'Description for Building Performance Analysis',
    },
    {
        title: 'Product & Process Certification',
        icon: 'images/servicesmainpage/certificate.png', // Update with your icon path
        description: 'Description for Product & Process Certification',
    },
    {
        title: 'Green Auditing',
        icon: 'images/servicesmainpage/audit.png', // Update with your icon path
        description: 'Description for Green Auditing',
    },
    {
        title: 'Building Commissioning',
        icon: 'images/servicesmainpage/commission.png', // Update with your icon path
        description: 'Description for Building Commissioning',
    },
    {
        title: 'Waste Management Services',
        icon: '/images/servicesmainpage/waste.png', // Update with your icon path
        description: 'Description for Waste Management Services',
    },
];

const Services = () => {
    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#000]">Services</h2>
                <p className="text-center mb-12 text-[#000]">
                    Be it architects, property developers, town planners or corporate enterprises – when it comes to embedding
                    sustainability in their developments, Savvy Greens is the name they trust. Not one to rest on our laurels, we constantly
                    evolve to remain in sync with the fast-changing requirements of emerging markets and regulatory bodies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Services;
