import { FaCode } from "react-icons/fa6";
import { FaHome } from "react-icons/fa"
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { RiContactsFill } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu(!menu);
    const closeMenu = () => setMenu(false);

    const links = ["Home", "About", "Project", "Contact"];

    return (
        <div className="fixed w-full p-4 h-[60px] z-50 bg-black/10 shadow-black/30 backdrop-blur-lg shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2 text-xl">
                    <FaCode className="text-green-600 text-2xl" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        AmitKumar.
                    </h1>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden sm:flex gap-6">
                    {links.map((item) => {
                        const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                        return (
                            <li key={item} className="group relative inline-block cursor-pointer">
                                <span className="h-0.5 w-0 top-6 absolute left-0 bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `font-medium ${isActive ? "text-purple-600" : "text-white hover:text-purple-600"
                                        }`
                                    }
                                >
                                    {item}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Hamburger Icon */}
                <div onClick={toggleMenu} className="sm:hidden flex flex-col gap-1 cursor-pointer z-30">
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menu ? "rotate-45 translate-y-1" : ""}`} />
                    <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menu ? "-rotate-45 -translate-y-1" : ""}`} />
                </div>
            </div>

            {/* Mobile Menu */}
            {menu && (
                <ul className="sm:hidden absolute top-[60px] left-0 w-full bg-black/80 shadow-black/30 backdrop-blur-3xl text-white shadow-md flex flex-col items-center gap-5 py-5 z-20 text-x">
                    <li onClick={closeMenu} className="hover:text-gray-400  gruop transition-all duration-300 cursor-pointer">
                        <Link to="/" className="group-hover:text-purple-600 flex gap-2"><FaHome className='text-2xl' />
                            <span className="group-hover:text-purple-600">Home</span>
                        </Link>

                    </li>
                    <li onClick={closeMenu} className="hover:text-gray-400  transition-all duration-300 cursor-pointer">
                        <Link className="group-hover:text-purple-600 flex gap-2" to="/about"><MdOutlineRoundaboutLeft className='text-2xl' />
                            <span className="group-hover:text-purple-600">About</span>
                        </Link>

                    </li>
                    <li onClick={closeMenu} className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                        <Link to="/project" className="group-hover:text-purple-600 flex gap-2"><GoProjectRoadmap className='text-2xl' />
                            <span className="group-hover:text-purple-600">Project</span>
                        </Link>

                    </li>
                    <li onClick={closeMenu} className="hover:text-gray-400  transition-all duration-300 cursor-pointer">
                        <Link to="/contact" className="group-hover:text-purple-600 flex gap-2"><RiContactsFill className="text-2xl" />
                            <span className="group-hover:text-purple-600">Contact</span>
                        </Link>

                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
