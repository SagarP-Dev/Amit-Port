import { Link } from 'react-router-dom';
import { RiContactsFill } from "react-icons/ri";
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";

const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    }
    const handleClose = () => {
        setMenu(false);
    }
    return (
        <div className="bg-red-900 h-[70px] text-white  shadow-lg realtive w-full top-0 left-0 z-20">
            <div className="flex align-middle justify-between items-center max-w-4xl mx-auto px-4 h-full">
                <h1
                    // data-aos="zoom-out"
                    className="sm:text-3xl  text-white text-xl font-sans font-semibold">Amit<strong className="text-green-600 text-2xl tracking-wide">.</strong></h1>
                <nav>
                    <ul className=" hidden sm:flex gap-4 text-[#FFFFFF] font-semibold  cursor-pointer text-xl">
                        <li className="hover:text-gray-400 transition-all duration-300"><Link to="/">Home</Link></li>
                        <li className="hover:text-gray-400 transition-all duration-300"><Link to="/about">About</Link></li>
                        <li className="hover:text-gray-400 transition-all duration-300"><Link to="/project">Project</Link></li>
                    </ul>
                </nav>

                <div
                    // data-aos="zoom-out"
                    // data-aos-delay="100"
                    onClick={handleMenu} className="sm:hidden flex flex-col gap-1 cursor-pointer  right-4 top-4 z-30">
                    <span className={`block w-6 h-[2px] bg-white right-4 transition-all duration-300 ${menu ? "rotate-45 translate-y-2" : ""
                        }`} />
                    <span className={`block w-6 h-[2px] bg-white right-4 transition-all duration-300 ${menu ? "opacity-0" : ""
                        }`} />
                    <span className={`block w-6 h-[2px] bg-white right-4 transition-all duration-300 ${menu ? "-rotate-45 -translate-y-1" : ""
                        }`} />
                </div>
                <div className=" sm:block hidden group border-2 p-2 rounded-full text-green-600 border-green-600   hover:border-gray-300 cursor-pointer transition-all duration-300">
                    <Link to="/contact"><RiContactsFill className="group-hover:text-gray-300" /></Link>
                </div>
                {menu && (
                    <ul className="absolute top-[70px] left-0 w-full h-[220px] bg-red-900 text-white flex flex-col items-center justify-center gap-5 shadow-md z-20 text-xl border-t border-gray-100">
                        <li
                            data-aos="fade-up"
                            data-aos-anchor-paclement="top-center"
                            data-aos-delay="100"

                            onClick={handleClose} className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                            <Link to="/"><FaHome className='text-2xl' /></Link>
                        </li>
                        <li
                            data-aos="fade-up"
                            data-aos-anchor-paclement="top-center"
                            data-aos-delay="150"

                            onClick={handleClose} className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                            <Link to="/about"><MdOutlineRoundaboutLeft className='text-2xl' /></Link>
                        </li>
                        <li
                            data-aos="fade-up"
                            data-aos-anchor-paclement="top-center"
                            data-aos-delay="200"
                            onClick={handleClose} className="hover:text-gray-400 transition-all duration-300 cursor-pointer">
                            <Link to="/project"><GoProjectRoadmap className='text-2xl' /></Link>
                        </li>
                        <div

                            data-aos="fade-up"
                            data-aos-anchor-paclement="top-center"
                            data-aos-delay="250"
                            onClick={handleClose}
                            className=" sm:hidden group border-2 p-2 rounded-full text-green-600 border-green-600   hover:border-gray-300 cursor-pointer mx-auto"><Link to="/contact">
                                <RiContactsFill className="group-hover:text-gray-300"
                                /></Link></div>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar;
