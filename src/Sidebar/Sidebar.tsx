import pp from "../image/pp-photo.jpg"
import { HiPhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// C:\Users\Legion\OneDrive\Desktop\Portfolio\Sumit-Portfolio\src\image\pp-photo.jpg

export default function Sidebar() {
  return (
    <div className="h-full bg-gray-900 px-8 py-10 flex flex-col items-center text-white">

      <img
        src={pp}
        alt="Sumit Ray"
        className="w-46 h-46 rounded-full object-fit mb-6 mt-6 border-4 border-blue-500 shadow-lg"
      />

      {/* Name & Designation */}
      <h1 className="text-2xl font-bold mb-2 text-center tracking-wide">
        Sumit Ray
      </h1>
      <p className="text-gray-300 text-base mb-2 tracking-wider">
        3rd Year BSc (Hons) CIT student
      </p>
      <p className="text-gray-300 text-base mb-8 tracking-wider">
        Full Stack Developer | Data Engineer
      </p>


      <div className="w-full space-y-4 text-gray-300 text-sm mb-8">
        <div className="flex items-center gap-3">
          <MdLocationOn className="text-lg text-red-500" />
          <span>Thapathali, Kathamandu</span>
        </div>
        <div className="flex items-center gap-3">
          <HiMail className="text-lg text-blue-500" />
          <span>Sumit.ray9299@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <HiPhone className="text-lg text-green-500" />
          <span>+977-9860122996</span>
        </div>
      </div>


      <div className="flex gap-6 mt-auto">
        <a
          href="https://github.com/sumit4622"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 underline text-sm font-medium"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-ray1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 underline text-sm font-medium"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
