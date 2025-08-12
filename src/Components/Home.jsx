import ImageGif from "../assets/download.png";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiBoxingRing } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='bg-gradient-to-tl from-black via-gray-950 to-slate-900  text-white p-4 min-h-screen'>
      <div className="flex sm:flex-row flex-col items-center text-shadow-lg  justify-around h-[100vh] sm:h-[92vh] sm:mt-0 mt-24">
        {/* Left Side */}
        <div
          className="flex text-center sm:text-left flex-col h-[280px] w-[410px] ">
          {/* self introduction part */}
          <div className="flex flex-col gap-1 ml-3 mt-3">
            <h1
              data-aos="fade-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1100"
              className="text-6xl font-semibold text-shadow-sm text-white"
            >
              Frontend
            </h1>
            <p
              data-aos="fade-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1200"
              className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-blue-500 to-purple-500 text-shadow-lg"
            >
              Developer
            </p>
            <p
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1100"
              className="text-sm mt-4 mb-4 font-serif leading-tight "
            >
              <strong className="text-gray-400">Computer Science And Engineering</strong>
            </p>
            <p
              data-aos="fade-right"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1100"
              className="text-sm text-gray-500">
              "Designing innovative and eco-conscious web applications
              <br /> with a modern touch."
            </p>
          </div>

          {/* Skills  */}
          <div className="flex justify-center sm:justify-start mt-5 gap-4">
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1300"
              className="bg-slate-800 p-1 rounded-md shadow-[0_0_20px_rgba(225,225,225,0.9)]">Bootstrap</div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1400"
              className="bg-slate-800 p-1 rounded-md shadow-[0_0_20px_rgba(225,225,225,0.9)] ">React</div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1500"
              className="bg-slate-800 p-1 rounded-sm shadow-[0_0_20px_rgba(225,225,225,0.9)] ">Tailwindcss</div>
            <div
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1600"
              className="bg-slate-800 p-1 rounded-sm shadow-[0_0_20px_rgba(225,225,225,0.9)]">Javascript</div>
          </div>

          <div className="inline-flex items-center sm:items-start flex-col gap-7 mt-7 ml-3">
            {/* Buttons */}
            <div className="flex items-center gap-2 ">
              <div className="flex  gap-5 cursor-pointer">
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="left-center"
                  data-aos-delay="1500"

                  className="flex items-center gap-3   bg-black shadow-md shadow-gray-600 w-24 text-center p-2 rounded-md">
                  <button className="hover:text-gray-400 hover:underline transition-all duration-500">
                    <Link to="/project">Project</Link>
                  </button>
                  <MdArrowOutward className="hover:text-gray-400 border rounded-sm" />
                </div>
                <div 
                data-aos="fade-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1500"
                className="flex items-center gap-3   bg-black shadow-md shadow-gray-600 w-24 text-center p-2 rounded-md">
                  <button className="hover:text-gray-400 hover:underline transition-all duration-500">
                    <Link to="/contact">Contact</Link>
                  </button>
                  <GiBoxingRing className="hover:text-gray-400 rounded-sm" />
                </div>
              </div>
            </div>

            {/* social buttons */}
            <div className="flex gap-3 cursor-pointer">
              <div 
              data-aos="fade-right"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1600"
              className=" group  shadow-[0_0_20px_rgba(225,225,225,0.9)] rounded-full p-2 hover:border-white border-gray-500 hover:scale-110 transition-all duration-500">
                <Link to="https://github.com/mr-amitkumar"><FaGithub className="group-hover:text-gray-400 group-hover:scale-110" /></Link>
              </div>
              <div 
              data-aos="zoom-in"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1700"
              className=" rounded-full p-2 group hover:border-white border-gray-500 hover:scale-110 transition-all duration-500  shadow-[0_0_20px_rgba(225,225,225,0.9)]">
                <Link to="https://www.linkedin.com/in/amit-kumar-mahapatra-7b4989274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <FaLinkedinIn className="group-hover:text-gray-400 group-hover:scale-110 " />
                </Link>
              </div>
              <div 
              data-aos="fade-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1800"
              className=" group  shadow-[0_0_20px_rgba(225,225,225,0.9)] rounded-full p-2 hover:border-white border-gray-500 hover:scale-110 transition-all duration-500">
                <Link to="https://www.instagram.com/mr_amitkumar.143?igsh=Z3hqZXFjYmtuZ2p5" >
                  <FaInstagram className="group-hover:text-gray-400 group-hover:scale-110" />
                </Link>

              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Image */}
        <div 
        data-aos="zoom-out"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1100"
        className="mt-20 flex items-center align-middle text-center sm:mt-0 sm:block sm:items-start sm:align-top sm:text-left">
          <img src={ImageGif} alt="Amit's GIF" className="sm:h-[400px] transition-all duration-500 " />
        </div>
      </div>
    </div >
  );
};

export default Home;
