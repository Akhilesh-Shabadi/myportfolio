import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectv1 from '../assets/projectv1.mp4';
import projectv2 from '../assets/projectv2.mp4';

function ProjectDetails() {
    useEffect(() => window.scrollTo(0, 0), []);

    const { projectId } = useParams();

    const projects = [
        {
            id: 1,
            title: 'Movie Collection Website',
            buildWith: 'ReactJS',
            description: `I'm excited to share my latest project, a dynamic Movie Collection Website built using React.js! This web app allows users to manage their personal movie collections effortlessly with full CRUD functionality using Axios for seamless data handling in JSON format.

Key Features:
1. Add, View, Edit, and Update Movies: Users can easily add new movies, edit details, and update their collection.
2. Responsive Design: The app is fully responsive, offering a seamless experience across devices.
3. Real-time Notifications: Integrated React Toastify ensures smooth user experience by providing instant notifications for all actions.
4. This project was a great learning opportunity in leveraging React.js, Axios, and React Toastify for building efficient, responsive, and user-friendly applications.`,
            videoUrl: projectv1,
        },
        {
            id: 2,
            title: 'Comprehensive Bus Ticket Booking Application 🚌',
            buildWith: 'Java, SpringBoot, MySQL',
            description: `I’m excited to share my latest project, a comprehensive bus ticket booking application built using Spring Boot and Thymeleaf. This system consists of two distinct modules for agencies and customers, offering secure and user-friendly functionality for both.
-> General Overview:                                                   
        Application Type: Web-based bus ticket booking system
        Technology Stack:
        Spring Boot (backend framework)
        Thymeleaf (templating engine)
        Cloudinary (image storage)
        Razorpay (payment gateway)
-> Agency Module:
        OTP-Verified Email Confirmation: Secure account creation process using OTP verification.    
        Bus Management: Bus Image Upload to Cloudinary: Secure off-site storage for bus images.
        Route Management: Define routes with station-specific details, pricing, and timings.
        CRUD Operations: Create, read, update, and delete bus and route details.
-> Customer Module:
        User Management: ignup and Login: Secure user authentication.
        Account Management: Update personal details and manage preferences.
        Bus Booking: Search Functionality: Find buses based on origin, destination, and date.
        Dynamic Filtering: Filter results based on selected weekdays.
        Seat Booking: Secure booking with Razorpay payment integration.
        Booking History: View past bookings and details.
-> Technical Implementations:
        Security Measures:
            OTP Verification: Ensures secure account creation and prevents unauthorized access.
            Session Management: Role-based access control to restrict functionalities based on user roles.
        External Service Integration:
        Cloudinary: Efficient storage and management of bus images.
        Razorpay: Secure and seamless payment transactions.
-> Skills and Proficiencies Gained:
        Backend Development: Expertise in developing robust backend logic using Spring Boot.
        API Integration: Seamless integration of external services (Cloudinary, Razorpay) to enhance application 
            functionality.
        Security Practices: Implementing security measures like OTP verification and role-based access control.
        Web Application Development: Gained valuable experience in building scalable and user-friendly web applications.
`,
            videoUrl: projectv2,
        },
    ];

    const project = projects.find((p) => p.id === parseInt(projectId));

    if (!project) {
        return <p>Project not found</p>;  // Fallback if no project is found
    }

    return (
        <section className="bg-yellow-300 dark:bg-gray-700 py-28">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                <p className="text-lg text-gray-700 dark:text-gray-400 mt-3">
                    Built with: <span className="font-medium">{project.buildWith}</span>
                </p>
                {/* <pre className="mt-6 font-semibold text-gray-800 dark:text-gray-300 overflow-x-auto leading-relaxed tracking-wide text-justify whitespace-pre-wrap break-words">
                    {project.description}
                </pre> */}
                {/* <div className="mt-6">
                    <pre className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg text-sm text-gray-800 dark:text-gray-300 overflow-x-auto whitespace-pre-wrap break-words">
                        {project.description}
                    </pre>
                </div> */}
                <div className="mt-6">
                    <h3 className="text-2xl text-gray-900 dark:text-white">Project Video</h3>
                    <div className="mt-4">
                        <video controls className="w-full rounded-xl" autoPlay>
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                <h3 className="mt-8 text-2xl text-gray-900 dark:text-white">Description</h3>
                <pre className="mt-2 font-semibold text-gray-800 dark:text-gray-300 overflow-x-auto leading-relaxed tracking-wide text-justify whitespace-pre-wrap break-words">
                    {project.description}
                </pre>
            </div>
        </section>
    );
}

export default ProjectDetails;
