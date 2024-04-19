import React from 'react';
import TypingAnimation from './TypingAnimation';

function Hero({ socialHandles }) {

    return (
        <section className="bg-gray-900 text-white py-12 md:py-24 lg:py-32 xl:py-40">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">Hello, There</h1>
                <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8">I'M JOHN DOE </p>
                <p className='mb-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold'> Web <TypingAnimation /></p>
                <div>
                    <a href="#" className="bg-yellow-500 text-white py-3 px-6 rounded-full hover:bg-yellow-800 transition duration-300 ease-in-out inline-block" > Download CV</a>
                </div>
            </div>
            <div className="flex justify-center md:justify-end pt-10 md:pt-20 lg:pt-24 xl:pt-32 pr-10">
                {/* Mapping through social handles to render icons with links */}
                {socialHandles && socialHandles.map(handle => (
                    <a key={handle.platform} href={handle.url} target="_blank" rel="noopener noreferrer" className="mr-4 hover:opacity-75 transition duration-300 ease-in-out" >
                        <img src={handle.image.url} alt={handle.platform} className="h-8"/>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Hero;
