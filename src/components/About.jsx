import React from 'react';

function About({ user }) {
    return (
        <section id="about" className="py-10 bg-gray-100">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-700">About Me</h2>
                    <p className="mt-2 text-lg text-gray-600">A little bit about who I am and what I do</p>
                </div>
                {user && (
                    <div className="flex flex-col md:flex-row items-center md:justify-center px-6">
                        <div className="w-full md:w-1/3 md:mr-10 mb-6 md:mb-0">
                            <img src={user.about?.avatar?.url} alt={user.about?.name} className="rounded-lg shadow-lg mx-auto md:mx-0 w-full" />
                        </div>
                        <div className="w-full md:w-2/3 ">
                            <h3 className="text-xl font-bold text-gray-800">{user.about?.name}</h3>
                            <p className="mt-2 text-gray-600">{user.about?.title}</p>
                            <p className="mt-2 text-gray-600">{user.about?.subTitle}</p>
                            <p className="mt-4 text-gray-700">{user.about?.description}</p>
                            <p className="mt-4 text-gray-700">Quote: {user.about?.quote}</p>
                            <p className="mt-4 text-gray-700">Years of Experience: {user.about?.exp_year}</p>
                            <p className="mt-4 text-gray-700">Address: {user.about?.address}</p>
                            <p className="mt-4 text-gray-700">Phone Number: {user.about?.phoneNumber}</p>
                            <p className="mt-4 text-gray-700">Email: {user.about?.contactEmail}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default About;
