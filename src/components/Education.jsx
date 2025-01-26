import React from 'react';

function Education() {
    return (
        <section id="education" className="py-10 bg-gray-100 dark:bg-gray-800 w-full">
            <div className="max-w-screen-2xl mx-auto px-4 flex flex-col lg:flex-row justify-around sm:items-center md:items-center lg:items-start">
                {/* Education section */}
                <div className="">
                    <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-8">Education</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all">
                            <p className='font-semibold text-indigo-500'>2019 - 2023</p>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">B.E</h3>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-gray-300">B.L.D.E.A's Engineering College</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400 mt-2">CGPA: <span className="font-medium text-indigo-500">{'7.06'}</span></p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all">
                            <p className='font-semibold text-indigo-500'>2017 - 2019</p>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Intermediate</h3>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-gray-300">P.D.J PU College</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400 mt-2">Percentage: <span className="font-medium text-indigo-500">{'61.5%'}</span></p>
                        </div>

                        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all">
                            <p className='font-semibold text-indigo-500'>2016 - 2017</p>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Schooling</h3>
                            <h5 className="text-xl font-medium text-gray-900 dark:text-gray-300">Sri Saraswathi High School</h5>
                            <p className="text-lg text-gray-700 dark:text-gray-400 mt-2">Percentage: <span className="font-medium text-indigo-500">{'66.08%'}</span></p>
                        </div>
                    </div>
                </div>

                {/* Course section */}
                <div className="lg:mt-0 sm:mt-4 md:mt-4">
                    <h2 className="text-4xl font-semibold text-center text-gray-900 dark:text-white mb-8">Course</h2>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-all lg:w-80 sm:w-80">
                        <p className='font-semibold text-indigo-500'>Nov 2023 - July 2024</p>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">Java Full Stack</h3>
                        <h5 className="text-xl font-medium text-gray-900 dark:text-gray-300">JSpiders</h5>
                        {/* <h1 className='h-9'></h1> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
