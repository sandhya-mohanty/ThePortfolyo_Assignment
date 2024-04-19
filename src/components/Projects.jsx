import React from 'react';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="px-4 md:px-32 py-7 bg-gray-100 relative">
            <div className='text-black mb-5 '>
                <h1 className='font-bold text-3xl md:text-5xl text-blue-700'>My Projects</h1>
            </div>
            <div className="mx-auto md:mx-0 md:-mx-10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <li key={index} className="p-2">
                            <div className="p-4 bg-gray-200 border border-gray-300 border-b-4 relative">
                                <div className="relative">
                                    <a href="#">
                                        <img src={project.image.url} alt={project.title} className='w-full h-auto' />
                                    </a>
                                </div>
                                <div className="pt-4">
                                    <h5 className='mb-2 font-semibold text-gray-700 text-base'>{project.title}</h5>
                                    <span className='text-gray-600 text-sm'>{project.description}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Projects;
