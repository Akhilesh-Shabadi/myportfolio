import React from 'react';
import { useNavigate } from 'react-router-dom';
import projectimg1 from '../assets/project1.png';
import projectimg2 from '../assets/project2.png';

function Projects() {
    const navigate = useNavigate();

    const navigateToProject = (projectId) => {
        navigate(`/project/${projectId}`);
    };

    return (
        <section id="projects" className="py-10 bg-gray-200 dark:bg-gray-700 w-full">
            <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
                {/* Project Card 1 */}
                <div
                    className="relative bg-contain h-56 bg-center rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105"
                    style={{ backgroundImage: `url(${projectimg1})` }}
                    onClick={() => navigateToProject(1)} >
                    <div className="relative group h-full">
                        <div
                            className="invisible group-hover:visible absolute bottom-0 w-full bg-black opacity-50 rounded-lg flex justify-center items-center transform 
                            translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <button className="text-white text-2xl font-bold py-2 px-6 rounded-lg">
                                View project ↗
                            </button>
                        </div>
                    </div>
                </div>

                {/* Project Card 2 */}
                <div
                    className="relative bg-contain h-56 bg-center rounded-lg shadow-lg cursor-pointer transform transition-all hover:scale-105"
                    style={{ backgroundImage: `url(${projectimg2})` }}
                    onClick={() => navigateToProject(2)}
                >
                    <div className="relative group h-full">
                        <div
                            className="invisible group-hover:visible absolute bottom-0 w-full bg-black opacity-50 rounded-lg flex justify-center items-center transform 
                            translate-y-12 group-hover:translate-y-0 transition-transform duration-300"
                        >
                            <button className="text-white text-2xl font-bold py-2 px-6 rounded-lg">
                                View project ↗
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;