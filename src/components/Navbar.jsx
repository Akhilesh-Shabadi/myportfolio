import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Navbar({ setDarkMode, darkMode }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="p-4 pb-1 pt-5 bg-gray-200 dark:bg-gray-800 fixed top-0 left-0 right-0 z-50 ">
            <div className='max-w-screen-2xl mx-auto flex justify-between items-center'>
                <div className="text-2xl lg:ms-40 dark:text-white">Akhliesh Shabadi</div>

                <div className="md:hidden flex items-center space-x-4">
                    <div
                        className="cursor-pointer"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
                    </div>
                </div>

                <div className='flex justify-between items-center p-2 me-48 space-x-8 hidden md:flex dark:text-white'>
                    <a href="#home">
                        <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Home</button>
                    </a>
                    <a href="#education">
                        <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Education</button>
                    </a>
                    <a href="#experience">
                        <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Experience</button>
                    </a>
                    <a href="#projects">
                        <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Projects</button>
                        {/* <Link to="/projects" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2" >View Projects</Link> */}
                    </a>
                    <a href="#contact">
                        <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Contact</button>
                    </a>
                </div>

                {
                    isMobileMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white p-4">
                            <a href="#home" onClick={toggleMobileMenu}>
                                <button type="button" className="w-full text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2 py-3">Home</button>
                            </a>
                            <a href="#education" onClick={toggleMobileMenu}>
                                <button type="button" className="w-full text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2 py-3">About</button>
                            </a>
                            <a href="#experience" onClick={toggleMobileMenu}>
                                <button type="button" className="w-full text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2 py-3">Experience</button>
                            </a>
                            <a href="#projects" onClick={toggleMobileMenu}>
                                <button type="button" className="w-full text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2 py-3">Projects</button>
                            </a>
                            <a href="#contact">
                                <button type="button" className="text-lg transform transition duration-300 hover:scale-110 cursor-pointer px-2">Contact</button>
                            </a>
                        </div>
                    )
                }
            </div>
            {/* <div
                className="bg-blue-400 p-2 rounded-full cursor-pointer fixed top-20 right-5 transform transition duration-300 hover:scale-105"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
            </div> */}
            <div
                className="bg-blue-400 p-2 rounded-l-[20px] cursor-pointer fixed top-24 right-[-18px] transform transition duration-500 ease-in-out hover:translate-x-[-18px]"
                onClick={() => setDarkMode(prev => !prev)}
            >
                {darkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
            </div>
        </nav>
    );
}

export default Navbar;
