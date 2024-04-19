import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="px-7 sm:px-6 lg:px-15 py-7 bg-gray-100">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-4 text-blue-700">Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="bg-gray-200 border border-gray-300 rounded-lg shadow-lg p-2 sm:p-6">
                                <div className="flex items-center justify-between mb-2 sm:mb-4">
                                    <h3 className="text-lg sm:text-xl font-semibold text-black">{skill.name}</h3>
                                    <span className="text-gray-600">{skill.percentage}%</span>
                                </div>
                                <div className="mb-2 sm:mb-4">
                                    <img src={skill.image.url} alt={skill.name} className="w-12 sm:w-16 h-12 sm:h-16 rounded-full" />
                                </div>
                                <p className="text-sm sm:text-base text-gray-700">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
