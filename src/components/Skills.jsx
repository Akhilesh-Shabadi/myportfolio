import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaJava, FaHtml5, FaCss3Alt } from 'react-icons/fa';  // Import specific icons
import { SiSpringboot, SiEclipseide, SiMysql, SiPostman, SiJavascript, SiBootstrap, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiMsqlServer } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";

function Skills() {
    const programmingLang = [
        { name: 'Java', icon: <FaJava size={30} /> },
        { name: 'JavaScript', icon: <SiJavascript size={30} /> },
    ];

    const frontendTech = [
        { name: 'HTML', icon: <FaHtml5 size={30} /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} /> },
    ];

    const runtimeEnvironments = [
        { name: 'NodeJS', icon: <FaNodeJs size={30} /> },
    ];

    const frameworks = [
        { name: 'ReactJS', icon: <FaReact size={30} /> },
        { name: 'Spring Boot', icon: <SiSpringboot size={30} /> },
    ];

    const cssFrameworks = [
        { name: 'Bootstrap', icon: <SiBootstrap size={30} /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss size={30} /> },
    ];

    const databases = [
        { name: 'SQL', icon: <FaDatabase size={30} /> },
        { name: 'MySQL', icon: <SiMysql size={30} /> },
        { name: 'MSSQL', icon: <DiMsqlServer size={30} /> },
    ];

    const tools = [
        { name: 'VS Code', icon: <VscVscode size={30} /> },
        { name: 'Eclipse', icon: <SiEclipseide size={30} /> },
        { name: 'STS4', icon: <BiLogoSpringBoot size={30} /> },
        { name: 'Postman', icon: <SiPostman size={30} /> },
    ];

    return (
        <section className="flex justify-center py-10 bg-gray-100 dark:bg-gray-800 w-full">
            <div className='max-w-screen-2xl'>
            <h2 className="text-4xl text-center font-semibold text-gray-900 dark:text-white mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Programming Languages */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Programming Languages</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-2">
                            {programmingLang.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frontend Technologies */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Frontend Technologies</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-2">
                            {frontendTech.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Runtime Environments */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Runtime Environments</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-1 md:grid-cols-1">
                            {runtimeEnvironments.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Frameworks</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-2">
                            {frameworks.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CSS Frameworks */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>CSS Frameworks</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-2">
                            {cssFrameworks.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Databases</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-3">
                            {databases.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="flex flex-col items-center">
                        <div className='text-2xl text-center text-gray-900 dark:text-white mb-4'>Tools</div>
                        <div className="flex flex-col items-center gap-6 grid lg:grid-cols-2 md:grid-cols-3">
                            {tools.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg text-center text-lg text-gray-900 dark:bg-gray-700 dark:text-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                >
                                    <div className="mb-4">{skill.icon}</div>
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
