import React from 'react';

const Services = ({ services }) => {
    return (
        <section id="services" className="px-4 md:px-12 lg:px-24 xl:px-36 py-7 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-blue-700 mb-10">Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10">
                    {services.map(service => (
                        <div key={service._id} className="bg-gray-200 border border-gray-300 shadow-md p-4 rounded-lg">
                            <img src={service.image.url} alt={service.name} className="mb-4 rounded-lg w-full h-auto " />
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">{service.name}</h3>
                            <p className="text-gray-700 mb-2">{service.desc}</p>
                            <p className="text-gray-700 font-semibold">{service.charge}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
