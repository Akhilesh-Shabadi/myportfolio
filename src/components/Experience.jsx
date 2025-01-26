import React from 'react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';

function Experience() {
    const experiences = [
        {
            title: "Junior Developer",
            company: "CTech Services",
            duration: "Sept 2024 - Present",
            description: "Developed user-facing features using ReactJS. Improved UI/UX and optimized web performance."
        }
    ];

    return (
        <section className="w-full flex justify-center py-10 bg-gray-200 dark:bg-gray-700" id="experience">
            <div className='max-w-7xl mx-auto'>
                <h2 className="text-4xl text-center font-semibold text-gray-900 dark:text-white mb-8">Experience</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center'>
                    <BuildingOfficeIcon className="lg:ms-80 h-32 w-32 text-gray-700 dark:text-gray-300 mx-auto sm:mx-0" />
                    <div className="max-w-6xl mx-auto">
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                                <h4 className="text-xl text-gray-600 dark:text-gray-300">{exp.company}</h4>
                                <p className="text-md text-gray-500 dark:text-gray-400">{exp.duration}</p>
                                <p className="mt-4 text-gray-700 dark:text-gray-300">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
