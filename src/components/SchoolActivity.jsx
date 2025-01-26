import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css modules/SchoolActivity.css';
import projectimg from '../assets/download.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import t1 from '../assets/t1.jpg';
import t2 from '../assets/t2.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import r1 from '../assets/r1.jpg';
import r2 from '../assets/r2.jpg';
import r3 from '../assets/r3.jpg';
import r4 from '../assets/r4.jpg';

const SchoolActivity = () => {
    const [isDrawing, setIsDrawing] = useState(false);

    // Trigger the animation when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsDrawing(true);
        }, 500); // Delay the line drawing a little to make it more noticeable
    }, []);

    const { activityId } = useParams();

    const projects = [
        {
            id: 1,
            projectname: "School Activity Photo Collage",
            description: `As above mentioned we did AICTE activity for 2 weeks as prescribed by the University, our activity was based on “HELPING LOCAL SCHOOLS TO ACHIEVE GOOD RESULT”, We started it on 22nd of February and ended it on 6th of March. We handled 6th and 7th class students of Govt. Higher primary School, Ukumanal, A village in Vijayapur district.

To achieve good academic results, students need to have a comprehensive understanding of the subjects they are studying. It requires more than just memorizing facts. Students need to develop critical thinking skills, problem-solving abilities, and effective study habits. We provided students with the support they need to develop these skills and achieve their academic goals which is most necessary at the foundation level of education.

One of the most effective ways to help students achieve good results is to provide them with personalized attention and support. Another critical component of helping students achieve good results is to create a positive and supportive learning environment. We emphasized the importance of cultivating a classroom culture that values effort, hard work, and growth. We encouraged students to take risks, ask questions, and learn from their mistakes. By creating a safe and supportive environment, we were able to boost students' confidence, motivation, and engagement in their studies. 
`,
            img1: s1,
            img2: s2,
            img3: s3,
            img4: s4,
        },
        {
            id: 2,
            projectname: "Tourism Activity Photo Collage",
            description: `Tourism promotion innovative approaches is the necessity of applying innovative approaches in meeting tourists needs and preferences thus acting as sophisticated will for promoting tourism. To justify necessity of developing intelligent way for supporting and enhancing tourism promotion. Moreover, it poses positive impulses from introducing recommendation system to tourism industry.

The time has changed and that new innovative approaches must be introduced when addressing tourism promotion on national level. 

The aims of tourism planning include increased visitor satisfaction, increased economic benefits and the protection of basic cultural and natural resources.

We have visited tourist 4 places in Vijayapura. 

1. Adil Shahi summer resort, Kumatagi 
2. Begum talab 
3. Gagan mahal 
4. Bara Kaman 

Tourism promotion means trying to encourage the actual and potential customers to travel a destination through the spreading of information.`,
            img1: t1,
            img2: t2,
            img3: t3,
            img4: t4,
        },
        {
            id: 3,
            projectname: "Reduction of energy consumption Actvity Photo collage",
            description: `Under AICTE activity point program on social awareness related activities for the current academic year and motivate the students to inculcate the team work and self-confidence. Reducing our energy consumption – A big part of living more sustainably is reducing the amount of energy in daily routine life, which means there are lots of opportunities to be smarter with the use energy.

To educate people about reduction in energy consumption a group of 11 students visited the residential colonies and demonstrated about reduction in energy consumption. Students answered their queries.

Why do we need to reduce our energy consumption? A lot of the energy we use to power our residents comes by burning fossil fuels, such as coal, to produce electricity. This releases greenhouse gases into the atmosphere, which leads to global warming. By reducing the amount of energy, we use, we can develop healthier environment for our planet.

How can I reduce my energy consumption? Reducing your energy consumption doesn’t mean making huge changes to your life. In fact, small changes like remembering to turning off lights and appliances can make a big difference. `,
            img1: r1,
            img2: r2,
            img3: r3,
            img4: r4,
        },
    ];

    const project = projects.find((p) => p.id === parseInt(activityId));

    if (!project) {
        return <p>Project not found</p>;  // Fallback if no project is found
    }

    return (
        <section className="bg-yellow-300 dark:bg-gray-700 py-28">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white">
                    {project.projectname}
                </h2>
                {/* <p className="text-lg text-gray-700 dark:text-gray-400 mt-3">
                    Description: <span className="font-medium">{project.description}</span>
                </p> */}

                {/* Photo Collage */}
                <div className="mt-6 grid grid-cols-2 gap-6 justify-center relative">
                    {/* First Row */}
                    <div className="collage-image-container">
                        <img
                            src={project.img1}
                            alt="Photo 1"
                            className="collage-image w-full h-48 object-cover rounded-lg shadow-md collage-image-1"
                        />
                    </div>
                    <span className={`bg-gray-800 dark:bg-gray-100 line-divider-vertical ${isDrawing ? 'drawing' : ''}`}></span> {/* Vertical Line Divider between 1 and 2 */}
                    <div className="collage-image-container">
                        <img
                            src={project.img2}
                            alt="Photo 2"
                            className="collage-image w-full h-48 object-cover rounded-lg shadow-md collage-image-2"
                        />
                    </div>

                    {/* Horizontal Divider between 1 & 3 */}
                    <span className={`bg-gray-800 dark:bg-gray-100 line-divider-horizontal ${isDrawing ? 'drawing' : ''} absolute left-0 top-1/2 w-full`}></span>

                    {/* Second Row */}
                    <div className="collage-image-container">
                        <img
                            src={project.img3}
                            alt="Photo 3"
                            className="collage-image w-full h-48 object-cover rounded-lg shadow-md collage-image-3"
                        />
                    </div>
                    <div className="collage-image-container">
                        <img
                            src={project.img4}
                            alt="Photo 4"
                            className="collage-image w-full h-48 object-cover rounded-lg shadow-md collage-image-4"
                        />
                    </div>
                </div>

                {/* Description */}
                <h3 className="text-2xl text-gray-900 dark:text-white mt-8">Activity Description</h3>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-300 leading-relaxed tracking-wide text-justify whitespace-pre-wrap break-words">
                    {project.description}
                </p>
                {/* <h3 className="text-2xl text-gray-900 dark:text-white mt-8 ">Description</h3>
                <pre className="mt-2 font-semibold text-gray-800 dark:text-gray-300 overflow-x-auto leading-relaxed tracking-wide text-justify whitespace-pre-wrap break-words">
                    {project.description}
                </pre> */}
            </div>
        </section>
    );
};

export default SchoolActivity;
