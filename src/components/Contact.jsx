import React, { useState } from 'react';

function Contact({ socialHandles }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here to handle form submission, like sending the data to a server
        console.log('Form submitted:', formData);
        // Reset form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Contact Me</h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border-gray-300 border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 text-black"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
                </form>
                <div className="flex justify-center mt-8">
                    {/* Mapping through social handles to render icons with links */}
                    {socialHandles && socialHandles.map(handle => (
                        <a
                            key={handle.platform}
                            href={handle.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-4 hover:opacity-75 transition duration-300 ease-in-out"
                        >
                            <img
                                src={handle.image.url}
                                alt={handle.platform}
                                className="h-8"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
