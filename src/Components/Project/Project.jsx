import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import Calculator from "../../assets/Calculator.png";
import Portfolio from "../../assets/Portfolio.png";
import Cafesito from "../../assets/Cafesito.png";
import Form from "../../assets/Fonm.png";
import Tdl from "../../assets/to-do-list.png";
import Stopwatch from "../../assets/Stopwatch.png";

const Project = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            image: Cafesito,
            id: 1,
            name: "Cafesito",
            description:
                "A cafe website built with React + Vite showcasing the menu, location, and contact info.",
            link: "https://cafesito.vercel.app/",
            
        },
        {
            image: Portfolio,
            id: 2,
            name: "Portfolio",
            description:
                "A personal portfolio website built using HTML and CSS that showcases my skills, projects, and contact information.",
            link: "https://personal-portfolio-one-phi-53.vercel.app/",
            
        },
        {
            image: Calculator,
            id: 3,
            name: "Calculator",
            description:
                "A basic calculator for arithmetic operations: addition, subtraction, multiplication, and division.",
            link: "https://calculator-theta-three-22.vercel.app/",
        },
        {
            image: Tdl,
            id: 4,
            name: "Todo List",
            description:
                "A simple Todo List app that allows users to add, delete, and mark tasks as completed. Uses local storage to persist data.",
            link: "https://to-do-list-in-js.vercel.app/",
        },
        {
            image: Form,
            id: 5,
            name: "Form fill-up with email message",
            description:
                "A simple form fill-up application that allows users to enter their name, email, and a message. After submission, it displays confirmation.",
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

    return (
        <div className="bg-gray-200 text-black min-h-screen p-6 text-center">
            <h1 
             data-aos="zoom-in"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="200"
            
            className="text-2xl sm:text-3xl font-bold mb-6">Projects</h1>

            <div 
            
             data-aos="zoom-in"
                        data-aos-anchor-paclement="top-center"
                        data-aos-delay="200"
            className="sm:grid sm:grid-cols-3 sm:gap-4 gap-6 flex flex-col max-w-[900px] mx-auto">
                {projects.map((proj) => (
                    <div
                        key={proj.id}
                        onClick={() => setSelectedProject(proj)}
                        className="border rounded-lg p-4 cursor-pointer bg-white hover:bg-gray-100 transition"
                    >
                        <img
                            src={proj.image}
                            alt={proj.name}
                            className="h-40 w-full object-cover rounded mb-2"
                        />
                        <h2 className="text-xl font-semibold">{proj.name}</h2>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <Motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Motion.div
                            className="bg-white p-6 rounded-lg max-w-md w-[320px] shadow-lg text-left relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-2 right-3 text-black text-xl font-bold"
                            >
                                &times;
                            </button>
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.name}
                                className="h-40 w-full object-cover rounded mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">
                                {selectedProject.name}
                            </h2>
                            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 underline hover:text-violet-600"
                            >
                                View Project
                            </a>
                        </Motion.div>
                    </Motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Project;
