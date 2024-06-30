import React from 'react';

const ServiceCard = ({ title, icon, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transition-transform transform watercolor-hover h-full w-full">
            <div className="mb-4">
                <img src={icon} alt={`${title} icon`} className="h-24 w-24" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <a href="#" className="text-green-800 font-semibold">Know More</a>
        </div>
    );
};

export default ServiceCard;
