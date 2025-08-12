import { Link } from "react-router-dom";
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-gray-800 h-[35vh] sm:h-[20vh] ">
            <div className="flex flex-row  gap-6 align-middle justify-between items-center max-w-4xl mx-auto px-4 h-full">
                <div className="flex flex-col ml-3 sm:ml-0 gap-3">
                    <nav>
                        <h1

                            data-aos="zoom-out"
                            data-aos-delay="100"
                                data-aos-anchor-placement="left-center"


                            className="text-white sm:text-[16px] text-[15px] ">Important Links!</h1>
                        <ul className="flex flex-col sm:flex-row sm:gap-2 gap-1 text-white font-semibold cursor-pointer sm:text-[16px] text-[17px] ">
                            <li
                                data-aos="zoom-out"
                                data-aos-anchor-placement="left-center"

                                data-aos-delay="300"

                                className="hover:text-gray-400 transition-all duration-300"><Link to="/">Home</Link></li>
                            <li
                                data-aos-anchor-placement="left-center"
                                data-aos="zoom-out"
                                data-aos-delay="400"

                                className="hover:text-gray-400 transition-all duration-300"><Link to="/about">About</Link></li>
                            <li
                                data-aos="zoom-out"
                                data-aos-delay="500"
                                data-aos-anchor-placement="left-center"

                                className="hover:text-gray-400 transition-all duration-300"><Link to="/project">Project</Link></li>
                            <li
                                data-aos="zoom-out"
                                data-aos-delay="600"
                                data-aos-anchor-placement="left-center"
                                className="hover:text-gray-400 transition-all duration-300"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col ml-4 mt-4 align-middle gap-3">
                    <h1
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-anchor-placement="left-center"


                        className="text-white sm:text-[16px] text-[15px]  ">Social Links</h1>
                    <ul className="flex sm:flex-row flex-col gap-4 text-white font-semibold cursor-pointer sm:text-[16px] text-[15px] ">
                        <li

                            data-aos="zoom-in"
                            data-aos-delay="200"
                            data-aos-anchor-placement="left-center"
                            className="hover:text-blue-400 transition-all duration-300"><a href="https://www.linkedin.com/in/amit-kumar-mahapatra-7b4989274"><FaLinkedin className="text-[15px]" /><p className="sm:block hidden text-[12px]">LinkedIn</p></a></li>
                        <li

                            data-aos="zoom-in"
                            data-aos-delay="300"
                            data-aos-anchor-placement="left-center"

                            className="hover:text-orange-400 transition-all duration-300"><a href="https://www.instagram.com/mr_amitkumar.143?igsh=Z3hqZXFjYmtuZ2p5"><FaInstagram className="text-[15px]" /><p className="sm:block hidden text-[12px]">Instagram</p></a></li>
                        <li
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            data-aos-anchor-placement="left-center"

                            className="hover:text-gray-400 transition-all duration-300"><a href="https://github.com/mr-amitkumar"><FaGithub className="text-[15px]" /><p className="sm:block hidden text-[12px]">GitHub</p></a></li>
                        <li

                            data-aos="zoom-in"
                            data-aos-delay="500"
                            data-aos-anchor-placement="left-center"
                            className="hover:text-green-400 transition-all duration-300"><a href="https://wa.me/message/S3IYCD7HTQZGB1 "><FaWhatsapp className="text-[15px]" /><p className="sm:block hidden text-[12px]">WhatsApp</p></a></li>
                    </ul>
                </div>
                <div className="flex flex-col align-middle text-center justify-center gap-2 mt-4">
                    <p
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-anchor-placement="left-center"

                        className="text-center text-gray-300 text-sm">© 2025 All rights reserved.</p>
                    <p
                        data-aos="zoom-out"
                        data-aos-delay="150"
                        data-aos-anchor-placement="left-center"

                        className="text-center text-gray-300 text-sm"> made by <strong className="text-yellow-400">Amit Kumar Mahapatra</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
