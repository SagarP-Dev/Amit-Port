import { FaRegFileAlt } from "react-icons/fa";
import Mypic from "../assets/pics.jpg";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


const About = () => {
    return (
        <div className="bg-gradient-to-tl from-black via-gray-950 to-slate-900  text-white p-4 min-h-screen">
            <div className="flex flex-col h-[150vh] sm:h-[90vh] items-center justify-center">
                <h1
                    data-aos="fade-down"
                    data-aos-anchor-placement="left-center"
                    data-aos-delay="1100"
                    className=" text-4xl text-yellow-400  mt-20 text-shadow-sm">About Me 👦</h1>
                <p
                    data-aos="zoom-in"
                    data-aos-anchor-placement="left-center"
                    data-aos-delay="1200"

                    className="text-gray-500 text-sm mt-3 mb-10">💠.Transforming ideas into digital way.💠 </p>
                <div className="flex sm:flex-row text-center sm:text-left flex-col justify-evenly gap-10 mt-4">
                    {/* Infromation section */}
                    <div className="flex flex-col sm:text-left text-center gap-2 w-[400px] mr-6">
                        <h1
                            data-aos="zoom-in-right"
                            data-aos-anchor-placement="left-center"
                            data-aos-delay="1400"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 text-3xl text-shadow-lg font-semibold">Hello, I'm</h1>
                        <h1
                            data-aos="zoom-in-left"
                            data-aos-anchor-placement="left-center"
                            data-aos-delay="1500"
                            className="font-semibold  text-3xl sm:text-4xl text-shadow-lg">Amit Kumar Mahapatra</h1>
                        <p
                            data-aos="zoom-out-down"
                            data-aos-anchor-placement="left-center"
                            data-aos-delay="1600"
                            className="text-gray-500 text-[15px] px-6 ml-5 sm:p-0 sm:ml-0 text-center sm:text-left sm:text-sm mt-4"> I am a Front-End Developer with hands-on experience in building responsive and interactive web interfaces using technologies like HTML5, CSS3, JavaScript (ES6+), and React.js. I focus on crafting reusable components, optimizing performance, and following best practices in UI/UX design. I'm also proficient with tools like Git for version control and Tailwind CSS for rapid UI development. My goal is to build scalable front-end solutions that are both efficient and user-centric.</p>

                        <div className="flex justify-center sm:justify-start gap-5 mt-6">
                            <div

                                data-aos="fade-right"
                                data-aos-anchor-placement="left-center"
                                data-aos-delay="1600"
                                className=" flex items-center gap-1 group hover:border-gray-500 outline-none bg-gradient-to-r from-violet-500  to-pink-500 p-2 rounded-md hover:bg-none hover:border cursor-pointer">
                                <FaRegFileAlt className="group-hover:underline " />
                                <button className="group-hover:underline"><Link href="/Amit-cv.pdf download" className="">Download Cv</Link></button>
                            </div>
                            <div

                                data-aos="fade-right"
                                data-aos-anchor-placement="left-center"
                                data-aos-delay="1500"
                                className=" flex items-center gap-1  group border border-gray-500 outline-none hover:bg-gradient-to-r from-violet-500  to-pink-500 p-2  rounded-md cursor-pointer duration-500 transition-all">
                                <button className="group-hover:underline duration-500 transition-all"><Link href="/Amit-cv.pdf download" className="">View Project</Link></button>
                                <MdArrowOutward className="group-hover:underline  border rounded-md" />
                            </div>

                        </div>
                    </div>
                    {/* Image section */}
                    <div 
                     data-aos="zoom-in-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1700"
                    
                    className="rounded-full p-5 flex justify-center sm:block sm:justify-start sm:shadow-[0_0_20px_rgba(225,225,225,0.9)]">
                        <img src={Mypic} alt="My Pic" className="sm:h-[300px] h-[200px]  rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
