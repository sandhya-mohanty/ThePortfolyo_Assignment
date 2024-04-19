import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { FaTimes } from 'react-icons/fa';

const Header = ({ user }) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    const content = (
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-white transition">
                <ul className='text-2xl p-10 text-black '>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#">Home</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#about">About</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#timeline">Timeline</a>
                    </li>
                    <li className="my-4 py-7 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#services">Services</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#testimonial">Testimonial</a>
                    </li>
                    <li className="my-4 py-4 hover:bg-slate-800 border-b border-slate-800 hover:rounded">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className='h-10vh flex justify-between text-black lg:py-5 px-10 py-4'>
                <div className='flex items-center flex-1'>
                    <span className='md:text-3xl font-bold text-lg '>{user.about?.name}'s Portfolio</span>
                </div>
                <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
                    <div className='flex-10'>
                        <ul className='flex gap-8 mr-16 text-[20px]'>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#">Home</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#about">About</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#skills">Skills</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#timeline">Timeline</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#projects">Projects</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#services">Services</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#testimonial">Testimonial</a> </li>
                            <li className='hover:text-blue-700 hover:border-b'> <a href="#contact">Contact</a> </li>
                        </ul>
                    </div>
                </div>
                <div> {click && content} </div>
                <div>
                    <button className='block sm:hidden transition' onClick={handleClick}>
                        {click ? <FaTimes/> : <CiMenuFries/>}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Header;
