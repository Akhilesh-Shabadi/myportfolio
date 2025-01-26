import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoMdPin } from "react-icons/io";
import toast from 'react-hot-toast';

function Contact() {

    const [errorMessage, setErrorMessages] = useState({});
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const updatesetFormData = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateMobileNumber = async (number, type = 'main') => {
        const regex = /^(?!.*0000)?[6-9]\d{9}$/;
        let errorMessage = '';

        if (number && number.length !== 10) {
            errorMessage = 'Invalid number: Must be 10 digits long.';
        } else if (number && !regex.test(number)) {
            errorMessage = 'Invalid number: Must start with 6, 7, 8, or 9.';
        } else if (/0000/.test(number)) {
            errorMessage = 'Invalid number: Cannot contain more than three consecutive zeros.';
        } else if (/11111/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive One's.";
        } else if (/22222/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Tow's.";
        } else if (/33333/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Three's.";
        } else if (/44444/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Four's.";
        } else if (/55555/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Five's.";
        } else if (/66666/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Six's.";
        } else if (/77777/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Seven's.";
        } else if (/88888/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Eight's.";
        } else if (/99999/.test(number)) {
            errorMessage = "Invalid number: Cannot contain more than four consecutive Nine's.";
        }

        // else if(!validator.isMobilePhone(number, 'en-IN')) {
        //     errorMessage = 'Invalid NUMBER';
        // }

        setErrorMessages((prev) => ({
            ...prev,
            mobilenumber: type === 'main' ? errorMessage : prev.mobilenumber,
        }));

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        updatesetFormData(name, value);
        if (name === 'phone') {
            validateMobileNumber(value);
            updatesetFormData(name, value);
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form data submitted:', formData);
        toast("Email service no longer aviable, Sorry!!.");
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <section className="w-full py-10 bg-gray-700 dark:bg-zinc-900" id="contact">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-semibold text-center text-gray-100 dark:text-white mb-3"><u>Hire me</u></h2>
                <p className="text-center text-lg text-gray-200 dark:text-gray-300 mb-8">
                    Ready to take on exciting challenges and bring fresh perspectives to your projects. With a diverse skill set in web
                    development, design, and problem-solving, I am eager to contribute to your success. Let's work together to create
                    innovative and effective solutions!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="bg-gray-400 dark:bg-gray-700 p-6 rounded-xl shadow-md space-y-3">
                        <h3 className="text-2xl font-semibold text-gray-950 dark:text-white mb-4">Address</h3>
                        {/* <p className="text-gray-950 dark:text-gray-300 mb-2">545 Mavis Island</p> */}
                        <div className='flex items-start space-x-3'>
                            <a href='https://www.google.com/maps/place/Vijayapura,+Karnataka/@16.8297972,75.6763376,13z/data=!3m1!4b1!4m6!3m5!1s0x3bc6557d98aa706f:
                            0xedd4a1794e8fe8d2!8m2!3d16.8301708!4d75.710031!16zL20vMDNra3Z6?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D' target="_blank" rel="noopener noreferrer"
                                className='flex items-center w-max space-x-3'>
                                <div className="text-white p-2 rounded-full bg-gradient-to-tr from-purple-700 to-black" >
                                    <IoMdPin size={15} />
                                </div>
                                <div>
                                    <p className="text-gray-950 dark:text-gray-300">Jorapur peth, Banagar galli,</p>
                                    <p className="text-gray-950 dark:text-gray-300">Vijayapura, Karnataka, 586101</p>
                                </div>
                            </a>
                        </div>
                        {/* <p className="text-gray-950 dark:text-gray-300 mb-2">Chicago, IL 99191</p> */}
                        <div className=''>
                            <a href="tel:+7483959465" rel="noopener noreferrer" target="_blank" className='flex items-center w-max space-x-3'>
                                <div className="text-white p-2 rounded-full bg-gradient-to-tr from-purple-700 to-black" >
                                    <FaPhoneAlt size={15} />
                                </div>
                                <p className="text-gray-950 dark:text-gray-300">
                                    (+91) 7483959465
                                </p>
                            </a>
                        </div>
                        <div className=''>
                            <a href="mailto:akhileshshabadi@gmail.com" target="_blank" rel="noopener noreferrer" className='flex items-center w-max space-x-3'>
                                <div className="text-white p-2 rounded-full bg-gradient-to-tr from-purple-700 to-black" >
                                    <FaEnvelope size={15} />
                                </div>
                                <p className="text-gray-950 dark:text-gray-300">
                                    akhileshshabadi@gmail.com
                                </p>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-400 dark:bg-gray-700 p-6 rounded-xl shadow-md">
                        <h3 className="text-2xl font-semibold text-gray-950 dark:text-white mb-4">Contact Form</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col">
                                    <label htmlFor="firstName" className="text-gray-950 dark:text-gray-300">First name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500"
                                    // required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="lastName" className="text-gray-950 dark:text-gray-300">Last name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500"
                                    // required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="email" className="text-gray-950 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500"
                                // required
                                />
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="phone" className="text-gray-950 dark:text-gray-300">Phone number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500"
                                    // required
                                    maxLength='10'
                                />
                                {errorMessage.mobilenumber && <small className='text-center text-yellow-300'>{errorMessage.mobilenumber}</small>}
                            </div>
                            <div className="flex flex-col mt-6">
                                <label htmlFor="message" className="text-gray-950 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500"
                                    rows="2"
                                // required
                                />
                            </div>
                            <button type="submit" className="w-full mt-6 p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-800 transition-all">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
