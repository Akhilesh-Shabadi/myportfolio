import React from 'react';

function Achievements() {
    return (
        <section className="flex justify-center items-center py-10 bg-gray-200 dark:bg-gray-700 w-full">
            <div className='max-w-screen-2xl mx-auto'>
                <h2 className="text-4xl text-center font-semibold text-gray-900 dark:text-white">Achievements</h2>
                <div className="mt-6 grid text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl text-gray-900 dark:text-gray-200">Completed Java Full Stack Course</h3>
                        <p className="mt-4 text-gray-700 dark:text-gray-300">Gained expertise in Core Java, SpringBoot, SQL, ReactJS, and MySQL.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl text-gray-900 dark:text-gray-200">Leetcode & HackerRank Problem Solving</h3>
                        <p className="mt-4 text-gray-700 dark:text-gray-300">Participated in coding challenges to sharpen problem-solving skills.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achievements;
