import { useState } from "react";
import Calculator from "../assets/Calculator.png";
import Portfolio from "../assets/Portfolio.png";
import Cafesito from "../assets/Cafesito.png";
import Form from "../assets/Fonm.png";
import Tdl from "../assets/to-do-list.png";
import Stopwatch from "../assets/Stopwatch.png";
import { FaBootstrap, FaCss3, FaFigma, FaGit, FaHtml5, FaReact, FaProjectDiagram } from "react-icons/fa";
import { MdJavascript } from "react-icons/md";
import { SiVite, SiTailwindcss, SiVercel } from "react-icons/si";
import { PiCertificateBold } from "react-icons/pi";
import { VscTools } from "react-icons/vsc";
import C1 from "../assets/Certificate.png";
import C2 from "../assets/Certificate-2.png";

const Project = () => {
    const [activeTab, setActiveTab] = useState("Projects");

    const projects = [
        {
            image: Cafesito,
            id: 1,
            name: "Cafesito",
            description: "A cafe website built with React + Vite showcasing the menu, location, and contact info.",
            link: "https://cafesito.vercel.app/",
        },
        {
            image: Portfolio,
            id: 2,
            name: "Portfolio",
            description: "A personal portfolio website built using HTML and CSS that showcases my skills, projects, and contact information.",
            link: "https://personal-portfolio-one-phi-53.vercel.app/",
        },
        {
            image: Calculator,
            id: 3,
            name: "Calculator",
            description: "A basic calculator for arithmetic operations: addition, subtraction, multiplication, and division.",
            link: "https://calculator-theta-three-22.vercel.app/",
        },
        {
            image: Tdl,
            id: 4,
            name: "Todo List",
            description: "A simple Todo List app that allows users to add, delete, and mark tasks as completed. Uses local storage to persist data.",
            link: "https://to-do-list-in-js.vercel.app/",
        },
        {
            image: Form,
            id: 5,
            name: "Form fill-up",
            description: "A form fill-up app that allows users to enter name, email, and message. After submission, it shows confirmation.",
            link: "https://contact-from-with-message-email.vercel.app/",
        },
        {
            image: Stopwatch,
            id: 6,
            name: "Stopwatch",
            description: "A simple stopwatch made using JS, CSS, and HTML.",
            link: "https://stopwatch-using-js-sigma.vercel.app/",
        },
    ];

    const techStack = [
        { icons: <FaHtml5 />, name: "HTML" },
        { icons: <FaCss3 />, name: "CSS" },
        { icons: <MdJavascript />, name: "JavaScript" },
        { icons: <FaReact />, name: "React" },
        { icons: <SiVite />, name: "Vite" },
        { icons: <SiTailwindcss />, name: "Tailwind CSS" },
        { icons: <FaGit />, name: "Git" },
        { icons: <SiVercel />, name: "Vercel" },
        { icons: <FaBootstrap />, name: "Bootstrap" },
        { icons: <FaFigma />, name: "Figma" },
    ];

    const certificates = [
        { image: C1, title: "Web Developer Certificate", source: "Octanet Service Pvt. Ltd." },
        { image: C2, title: "Frontend Developer", source: "CloudCredit Service Pvt. Ltd." },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "Projects":
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                        {projects.map((proj) => (
                            <div
                                data-aos="zoom-in-right"
                                data-aos-anchor-placement="left-center"
                                data-aos-delay="1100"

                                key={proj.id} className="bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                                <img src={proj.image} alt={proj.name} className="h-48 w-full object-cover" />
                                <div className="p-4 flex flex-col justify-between flex-grow">
                                    <h3 className="text-lg sm:text-xl font-semibold">{proj.name}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{proj.description}</p>
                                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-green-500 hover:underline text-sm">
                                        Visit Project →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case "Certificate":
                return (
                    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certificates.map((cert, i) => (
                            <div
                                data-aos="zoom-in-right"
                                data-aos-anchor-placement="left-center"
                                data-aos-delay="1400"
                                key={i} className="bg-gradient-to-r from-slate-800 via-gray-900 to-black text-white rounded-md p-4 shadow-lg flex flex-col items-center">
                                <img src={cert.image} alt={cert.title} className="w-full h-52 object-contain rounded-md mb-4" />
                                <h3 className="text-base sm:text-lg font-semibold">{cert.title}</h3>
                                <p className="text-sm text-gray-300 text-center">Issued by: {cert.source}</p>
                            </div>
                        ))}
                    </div>
                );
            case "Tech Stack":
                return (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 text-center">
                        {techStack.map((tech, i) => (
                            <div
                                data-aos="zoom-in"
                                data-aos-anchor-placement="left-center"
                                data-aos-delay="1400" 
                                key={i} className="flex flex-col items-center justify-center bg-gradient-to-r from-violet-950 to-slate-950 text-white rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-300">
                                <div className="text-5xl sm:text-6xl mb-2 text-red-500">{tech.icons}</div>
                                <p className="text-sm font-semibold">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-gradient-to-tl from-black via-gray-950 to-slate-900 text-white px-4 py-6 min-h-screen">
            <div className="flex flex-col items-center pt-24">
                {/* Header */}
                <div className="text-center mb-6 px-2">
                    <h1

                        data-aos="fade-down"
                        data-aos-anchor-placement="left-center"
                        data-aos-delay="1100"
                        className="text-3xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-blue-400 to-pink-600 font-bold">
                        Portfolio Showcase
                    </h1>
                    <p
                        data-aos="zoom-in"
                        data-aos-anchor-placement="left-center"
                        data-aos-delay="1200"

                        className="text-xs sm:text-sm mt-2 text-slate-400">
                        Explore my journey through projects, certificates, and technical expertise.<br />
                        Each section represents a milestone in my continuous learning path.
                    </p>
                </div>

                {/* Tabs */}
                <div
                    data-aos="zoom-in"
                    data-aos-anchor-placement="left-center"
                    data-aos-delay="1400"
                    className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-6 w-full sm:w-auto justify-center items-center">
                    {[
                        { label: "Projects", icon: <FaProjectDiagram className="text-xl mr-2" /> },
                        { label: "Certificate", icon: <PiCertificateBold className="text-xl mr-2" /> },
                        { label: "Tech Stack", icon: <VscTools className="text-xl mr-2" /> },
                    ].map((tab) => (
                        <button

                            key={tab.label}
                            onClick={() => setActiveTab(tab.label)}
                            className={`flex items-center text-sm sm:text-base font-medium px-4 py-2 rounded-md transition-all duration-300 ${activeTab === tab.label
                                ? "bg-red-500 text-black"
                                : "hover:bg-red-500 hover:text-black"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white/10 backdrop-blur-xl rounded-md w-full max-w-6xl min-h-[500px] max-h-[600px] overflow-y-auto shadow-lg">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default Project;
