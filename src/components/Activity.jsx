import React from 'react';
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

function Experience() {
    const activity = [
        {
            title: "Helping local school to archive good results enhance their enrolment in higher / technical / vocational education",
            company: "CTech Services",
            duration: "Sept 2024 - Present",
            description: "Developed user-facing features using ReactJS. Improved UI/UX and optimized web performance.",
            id: 1
        },
        {
            title: "Tourism promotion innovative approach",
            company: "CTech Services",
            duration: "Sept 2024 - Present",
            description: "Developed user-facing features using ReactJS. Improved UI/UX and optimized web performance.",
            id: 2
        },
        {
            title: "Reduction of energy consumption",
            company: "CTech Services",
            duration: "Sept 2024 - Present",
            description: "Developed user-facing features using ReactJS. Improved UI/UX and optimized web performance.",
            id: 3
        }
    ];

    const navigate = useNavigate();

    const navigateToProject = (activityId) => {
        navigate(`/schoolactivity/${activityId}`);
    };

    return (
        <section className="w-full flex justify-center py-10 bg-gray-100 dark:bg-gray-800" id="experience">
            <div className='max-w-7xl mx-auto'>
                <h2 className="text-4xl text-center font-semibold text-gray-900 dark:text-white mb-8">AICT Activity</h2>
                <div className="max-w-6xl mx-auto">
                    {activity.map((exp, index) => (
                        <div
                            key={index} onClick={() => navigateToProject(exp.id)}
                            className="group cursor-pointer flex items-center justify-between mb-6 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>

                            <span className="text-gray-900 dark:text-white">
                                <GoArrowDownRight size={30} className="group-hover:hidden" />
                                <GoArrowUpRight size={30} className="hidden group-hover:block" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
