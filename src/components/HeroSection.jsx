import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMouse } from 'react-icons/fa';
import profileimg from '../assets/Akhilesh_Shabadi_Photo.jpg';
import '../css modules/HeroSection.css';
import akhilesh_shabadi_resume from '../assets/Akhilesh-Shabadi-E-Resume.pdf';

function HeroSection() {
    const [text, setText] = useState('');
    const fullText = "   am a web developer specializing in front-end and back-end technologies like React.js and Node.js.";

    async function tyb() {
        let i = fullText.length;
        const typingInterval = setInterval(() => {
            setText((prev) => prev.substring(0, prev.length - 1));
            i--;
            if (i === 0) {
                clearInterval(typingInterval);
                setTimeout(ty, 1000);
            }
        }, 50);
    }

    async function ty() {
        let i = 0;
        const typingInterval = setInterval(() => {
            setText((prev) => prev + fullText[i]);
            i++;
            if (i === fullText.length - 1) {
                clearInterval(typingInterval);
                setTimeout(tyb, 2000);
            }
        }, 100);
    }


    useEffect(() => {
        ty();
    }, []);

    const handleScroll = () => {
        const targetPosition = window.scrollY + window.innerHeight - 40;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 900;
        let startTime = null;

        const scrollAnimation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * progress);

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation);
            }
        };

        requestAnimationFrame(scrollAnimation);
    };

    return (
        <section id='home' className="max-h-max bg-gray-100 dark:bg-gray-800 py-20 pb-2 px-8 w-full">
            <div className='max-w-screen-2xl mx-auto flex items-center justify-center flex-col lg:flex-row lg:mt-32'>
                <div className="sm:text-center lg:ps-36 md:text-left lg:w-1/2 lg:text-left">
                    <h1 className="text-2xl inline mb-2 ps-1 lg:text-2xl text-gray-700 dark:text-gray-300">I am Akhliesh</h1>
                    <h2 className="text-2xl font-semibold mt-2 lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-black mb-4">
                        Hi, I am a Web Developer.
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4"> I{text} </p>

                    <div className="mt-6 flex sm:justify-center lg:justify-start items-center space-x-8 text-xl text-gray-700 dark:text-gray-300">
                        <a href={akhilesh_shabadi_resume} target="_blank" rel="noopener noreferrer" >
                            <button className="text-sm p-2 rounded bg-gray-600 text-gray-200 dark:bg-gray-100 dark:text-gray-900">
                                View Resume
                            </button>
                        </a>
                        <a href={akhilesh_shabadi_resume} download={akhilesh_shabadi_resume} className="text-white">
                            <button className="text-sm p-2 rounded bg-gray-600 text-gray-200 dark:bg-gray-100 dark:text-gray-900">
                                Download
                            </button>
                        </a>
                    </div>

                    <div className="mt-6 flex sm:justify-center lg:justify-start items-center space-x-6 text-xl text-gray-700 dark:text-gray-300">
                        <a href="tel:+7483959465"><FaPhoneAlt /></a>
                        <a href="mailto:akhileshshabadi@gmail.com"><FaEnvelope /></a>
                        <a href="https://linkedin.com/in/akhilesh-shabadi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://github.com/Akhilesh-Shabadi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </div>
                </div>

                <div className="image-section w-full lg:w-1/2 flex justify-center lg:justify-center mt-8 lg:mt-0">
                    <img
                        src={profileimg}
                        alt="Akhliesh Shabadi"
                        className="w-full max-w-[350px] h-[350px] lg:h-[400px] object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-110"
                    />
                </div>
            </div>
            <div className='flex justify-center items-center opacity-70'>
                <span className="mt-16 mb-0 p-2 flex rounded-2xl border border-black w-fit justify-center lg:justify-center items-center space-x-2 text-xl 
                text-gray-700 dark:text-gray-300 dark:border-white cursor-pointer" onClick={handleScroll}>
                    <FaMouse size={15} /><span>scorll</span>
                </span>
            </div>
        </section>
    );
}

export default HeroSection;
