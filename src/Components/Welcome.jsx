import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import { FaBots, FaComputer } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im"; // Optional: Spinner icon

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen bg-black/40 backdrop-blur-3xl z-50 flex justify-center items-center transition-all duration-500">
      <div className="flex flex-col items-center text-white  p-6 max-w-md w-[90%] text-center  relative animate-fade-in">
        <div
          className="flex gap-3 text-4xl text-green-500 m-2">
          <FaCode className="rounded-full  p-1 shadow-[0_0_20px_rgba(225,225,225,0.9)]"
            data-aos="zoom-in"
            data-aos-anchor-placement="left-center"
            data-aos-delay="100"
          /> <FaBots className="rounded-full  p-1 shadow-[0_0_20px_rgba(225,225,225,0.9)]"
            data-aos="zoom-in"
            data-aos-anchor-placement="left-center"
            data-aos-delay="100"
          /> <FaComputer className="rounded-full  p-1 shadow-[0_0_20px_rgba(225,225,225,0.9)]"
            data-aos="zoom-in"
            data-aos-anchor-placement="left-center"
            data-aos-delay="100"
          />
        </div>

        <h1 className="text-5xl font-semibold mb-2 animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-violet-800 via-blue-500 to-pink-500 "
          data-aos="zoom-out"
          data-aos-anchor-placement="left-center"
          data-aos-delay="100"
        >Welcome to My Portfolio</h1>

        <div className="mt-4 flex items-center justify-center gap-2">
          <ImSpinner2 className="animate-spin text-green-400 text-2xl" />
          <span className="text-sm text-gray-300">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
