import Image from "../../assets/pics.jpg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const Home = () => {
    return (
        <div className="bg-gray-200 h-[90vh] sm:h-[88.7vh] text-white">
            <div className="flex flex-col sm:flex-row   gap-2 sm:gap-6 align-middle justify-center items-center h-full">
                <div className="flex flex-col gap-1 sm:gap-2 text-center sm:text-left max-w-2xl px-4">
                    <h1

                        data-aos="zoom-out"
                        data-aos-delay="150"
                        className="text-orange-600 text-3xl sm:text-4xl font-semibold">Hey 👋,</h1>
                    <p

                        data-aos="zoom-out"
                        // data-aos-anchor-placement="bottom-center"
                        data-aos-delay="200"
                        className="text-gray-700 text-2xl sm:text-3xl">I'm <strong className="text-red-600">Amit Kumar Mahapatra,</strong></p>
                    <p
                        data-aos="zoom-in"
                        // data-aos-anchor-placement="bottom-center"

                        data-aos-delay="250"
                        className="text-gray-700 text-xl sm:text-2xl">
                        <strong className="text-green-600">Web Developer (Front-end developer)</strong> | Problem Solver | Quick Learner
                    </p>
                    <p

                        data-aos="zoom-in"
                        // data-aos-anchor-placement="bottom-center"

                        data-aos-delay="300"
                        className="text-gray-700">building the Frontend of Websites and <strong className="text-blue-600">web-applications</strong> that lead to the success of the overall product</p>

                    <Link to="/project" className="flex align-middle items-center mx-auto mt-2 ">
                        <button
                            // data-aos-anchor-placement="left-center"
                            data-aos="zoom-in"
                            data-aos-delay="350"
                            className="bg-orange-500 flex justify-center align-middle px-3 py-2 rounded-md shadow-lg text-black font-semibold hover:bg-orange-400 sm:text-xl transition-all duration-300">


                            Go To Projects <MdArrowOutward className="items-center ml-2 rounded-full  text-2xl sm:text-3xl p-1 border-black border-2" />


                        </button>
                    </Link>

                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-anchor-placement="left-center"


                    className="border-2 p-2  rounded-full text-gray-600 shadow-md shadow-gray-600 border-gray-600 sm:mt-0 mt-4 sm:mb-0 mb-4 ">
                    <img src={Image} alt="" className="h-[190px] sm:h-[220px] p-2 rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default Home;
