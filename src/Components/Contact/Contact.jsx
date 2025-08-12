import { FaAddressBook, FaPhone, FaVoicemail } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col align-middle justify-center ">
      <div className="flex flex-col align-middle sm:justify-center sm:mx-auto ">
        <h1
          data-aos="zoom-out"

          className="text-3xl sm:text-4xl text-center mb-9">For Contact</h1>
        <div
          data-aos="fade-right"
          className="flex flex-row items-center  gap-3 ml-4 mb-4">
          <h1>
            <MdEmail className="text-6xl rounded-full border-2 p-3 border-gray-600 shadow-md text-orange-600" />
          </h1>
          <p className="sm:text-xl font-normal">Email: <strong>amitkumarmahapatra2@gmail.com</strong></p>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-delay="200"
          className="flex flex-row items-center gap-3  ml-4 mb-4">
          <h1>
            <FaAddressBook className="text-6xl rounded-full border-2 p-3 border-gray-600 shadow-md text-orange-600" />
          </h1>
          <p className="sm:text-xl font-normal">Address: <strong>At-Kalidaspur,Balasore,Odisha,India</strong>
          </p>
        </div>
        <div

          data-aos="zoom-out"
          data-aos-delay="300"
          className="flex flex-row items-center gap-3  ml-4 mb-4">
          <h1>
            <FaPhone className="text-6xl rounded-full border-2 p-3 border-gray-600 shadow-md text-orange-600" />
          </h1>
          <p className="text-xl font-normal">Phone: <strong>+91 9348695669</strong></p>
        </div>

      </div>
    </div>
  )
}

export default Contact
