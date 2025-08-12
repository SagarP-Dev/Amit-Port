import { useState } from "react";
import { motion as Motion } from "framer-motion";
import Image from "../../assets/pics.jpg";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";

const About = () => {
    const [selected, setSelected] = useState(null);

    const educationDetails = {
        tenth: "Passed 10th from Modern Public School with 75% in 2019.",
        twelfth: "Passed 12th from Newtonian Higher Secondary School with 81% in 2021.",
        btech: "B.Tech in Computer Science from Srinix College, CGPA: 7.71.",
    };

    const educationItems = [
        { key: "tenth", label: "10th" },
        { key: "twelfth", label: "12th" },
        { key: "btech", label: "B.Tech" },
    ];

    const languages = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-xl mr-2" />, level: 90 },
        { name: "CSS", icon: <FaCss3 className="text-blue-600 text-xl mr-2" />, level: 85 },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-500 text-xl mr-2" />, level: 80 },
    ];

    const frameworks = [
        { name: "Bootstrap", icon: <FaBootstrap className="text-violet-600 text-xl mr-2" />, level: 75 },
        { name: "Tailwind CSS", icon: <BiLogoTailwindCss className="text-blue-600 text-xl mr-2" />, level: 80 },
        { name: "React", icon: <FaReact className="text-blue-400 text-xl mr-2" />, level: 78 },
    ];

    return (
        <div className="bg-gray-200 min-h-screen text-black">
            <div className="flex flex-col gap-4 justify-center items-center mx-auto px-4 max-w-4xl">

                <h1 
                
                 data-aos="fade-down"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="100"
                
                className="text-center mt-6 text-2xl sm:text-3xl font-semibold"
                >About Me</h1>

                <div
                    className="flex flex-col sm:flex-row gap-4 items-center"
                             >
                    <div className="flex flex-col gap-3 text-center sm:text-left max-w-2xl px-4">
                        <p 
                        
                         data-aos="zoom-in"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="200"
                        className="text-gray-800 text-lg sm:text-xl">
                            Hello! I'm <strong className="text-blue-600">Amit Kumar Mahapatra</strong>, a passionate <strong className="text-orange-600">web developer</strong> focused on <strong className="text-red-600">front-end technologies</strong>.
                        </p>
                        <p
                        
                         data-aos="zoom-in"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="300"
                        className="text-gray-800 text-lg sm:text-[19px]">
                            I specialize in <strong className="text-yellow-600">HTML, CSS, and JavaScript</strong>, and I'm eager to explore new frameworks to enhance projects.
                        </p>
                        <p 
                         data-aos="zoom-in"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="300"
                        
                        className="text-gray-800 text-[16px] sm:text-[18px]">
                            I enjoy <strong className="text-pink-600">collaboration and communication</strong>, and love contributing to projects that make an impact.
                        </p>
                    </div>
                    <div 
                    
                     data-aos="zoom-out"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="200"
                    className="border-2 p-3 rounded-full shadow-lg border-gray-400 mb-6">
                        <img src={Image} alt="" className="p-1 rounded-full sm:h-[250px] sm:w-[400px] h-[190px] w-[190px] object-cover" />
                    </div>
                </div>


                <Motion.div
                    className="flex flex-col gap-2 items-center mb-6 w-full"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                //   viewport={{ once: true }}
                >
                    <h1 className="font-semibold sm:text-3xl text-2xl">Skills</h1>

                    <div className="w-full max-w-xl mt-5 space-y-6">


                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Languages</h2>
                            {languages.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="flex items-center font-medium text-gray-700">
                                            {skill.icon} {skill.name}
                                        </span>
                                        <span className="text-sm text-gray-600">{skill.level}%</span>
                                    </div>
                                    <Motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 2 }}
                                        // viewport={{ once: true }}
                                        className="bg-blue-600 h-3 rounded-full"
                                        style={{ maxWidth: "100%" }}
                                    />
                                    <div className="w-full  h-3 rounded-full -mt-3 mb-4" />
                                </div>
                            ))}
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-gray-800">Frameworks & Libraries</h2>
                            {frameworks.map((skill, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="flex items-center font-medium text-gray-700">
                                            {skill.icon} {skill.name}
                                        </span>
                                        <span className="text-sm text-gray-600">{skill.level}%</span>
                                    </div>
                                    <Motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 2 }}
                                        // viewport={{ once: true }}
                                        className="bg-green-600 h-3 rounded-full"
                                        style={{ maxWidth: "100%" }}
                                    />
                                    <div className="w-full  h-3 rounded-full -mt-3 mb-4" />
                                </div>
                            ))}
                        </div>

                    </div>
                </Motion.div>

                <Motion.div
                    className="p-6 max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
                //   viewport={{ once: true }}
                >
                    <h1 className="text-2xl font-bold mb-4 text-center">Education</h1>

                    <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
                        {educationItems.map((item) => (
                            <Motion.div
                                key={item.key}
                                whileHover={{ scale: 1.05 }}
                                className="border rounded-lg p-4 cursor-pointer bg-gray-100 hover:bg-gray-400 transition"
                                onClick={() =>
                                    setSelected(selected === item.key ? null : item.key)
                                }
                            >
                                <h2 className="text-lg font-semibold">{item.label}</h2>
                                {selected === item.key && (
                                    <Motion.p
                                        className="mt-2 text-gray-700"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        {educationDetails[item.key]}
                                    </Motion.p>
                                )}
                            </Motion.div>
                        ))}
                    </div>
                </Motion.div>
            </div>
        </div>
    );
};

export default About;
