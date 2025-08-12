import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setSuccessMsg(""); // Clear previous message

        const formData = new FormData(event.target);
        formData.append("access_key", "ab5c6877-a3ca-4012-b58b-a36fa42a56c5");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: json,
            });

            const result = await res.json();

            if (result.success) {
                setSuccessMsg("✅ Your message has been sent successfully!");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            } else {
                toast.error("❌ Submission failed. Please try again.");
            }
        } catch {
            toast.error("⚠️ Network error. Failed to submit.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-tl from-black via-gray-950 to-slate-900 text-white p-4 min-h-screen">
            <div className="flex gap-10 flex-col justify-center items-center align-middle min-h-screen">
                <div className="flex flex-col items-center mt-28">
                    <h1 
                     data-aos="fade-down"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1100"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-purple-500 to-violet-400 text-5xl font-semibold mb-2">
                        Contact Me
                    </h1>
                    <p 
                    
                     data-aos="zoom-out"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1200"
                    className="text-sm text-slate-400">
                        Available for freelance, collaborations, or just a quick hello.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    {successMsg && (
                        <div
                            className="text-green-400 bg-white/10 px-3 py-1 rounded-md text-center"
                            aria-live="polite"
                        >
                            {successMsg}
                        </div>
                    )}

                    <input
                     data-aos="zoom-in-up"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1300"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 rounded-md bg-transparent border border-white/30"
                        autoComplete="off"
                        required
                    />

                    <input
                     data-aos="zoom-in-up"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1400"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 rounded-md bg-transparent border border-white/30"
                        autoComplete="off"
                        required
                    />

                    <input
                     data-aos="zoom-in-up"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1500"
                        type="tel"
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2 rounded-md bg-transparent border border-white/30"
                        autoComplete="off"
                        required
                    />

                    <textarea
                     data-aos="zoom-in-up"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1600"
                        name="message"
                        placeholder="Enter Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-2 rounded-md bg-transparent border border-white/30"
                        rows={4}
                        autoComplete="off"
                        required
                    />

                    <button
                     data-aos="zoom-in-down"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1700"
                        type="submit"
                        disabled={loading}
                        className="border-none outline-none bg-red-400 px-4 py-2 rounded-md text-xl text-center hover:bg-red-500 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
                <div className="flex flex-col gap-8 items-center">
                    <h2 className="text-xl">or</h2>
                    <div className="inline-flex gap-3 text-5xl">
    <div className="relative group">
        <a 
         data-aos="zoom-in-right"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1800"
        href="mailto:amitkumarmahapatra2@gmail.com">
            <MdEmail className="text-red-600 shadow-[0_0_20px_rgba(225,225,225,0.9)] rounded-full p-2 hover:scale-110 transition-all duration-500" />
        </a>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            amitkumarmahapatra2@gmail.com
        </div>
    </div>

    <a 
     data-aos="zoom-in-left"
              data-aos-anchor-placement="left-center"
              data-aos-delay="1800"
    
    href="https://wa.me/message/S3IYCD7HTQZGB1">
        <FaWhatsapp className="text-green-700 shadow-[0_0_20px_rgba(225,225,225,0.9)] rounded-full p-2 hover:scale-110 cursor-pointer transition-all duration-500" />
    </a>
</div>

                </div>
            </div>
            <ToastContainer position="top-center" />
        </div>
    );
};

export default Contact;