// import { useNavigate } from "react-router-dom";
import norvic from "../image/norvic.jpeg";
import Anweshan from "../image/Anweshan.png";

export default function Work() {
  // const navigate = useNavigate();

  const experiences = [
    {
      image: norvic,
      title: "IT Intern",
      company: "Norvic International Hospital",
      period: " Aug 2023 - May 2024",
      description:
        "Worked as an IT Intern supporting system administration and IT support tasks, including troubleshooting hardware/software issues, maintaining systems and networks, assisting users, and supporting basic server and data management in a hospital environment.",
      link: "/work/abc-company",
    },
    {
      image: Anweshan,
      title: "Web Developer Intern",
      company: "Anweshan",
      period: "Jan 2025 - May 2025",
      description:
        "Worked as a Web Developer Intern using React for frontend development, Git and GitHub for version control, and Firebase for backend services, authentication, and data management.",
      link: "/work/xyz-startup",
    },
  ];

  return (
    <section
      id="work"
      className="h-screen flex flex-col justify-center px-10 lg:px-16 py-16 animate-fadeIn"
    >
      <h2 className="text-5xl font-bold mb-10 text-gray-900 tracking-tight">
        Work Experience
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
          >
            
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="w-14 h-14 object-contain rounded-md"
                />
                <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
                  {exp.title}
                  <span className="text-gray-500"> — {exp.company}</span>
                </h3>
              </div>

              <p className="text-blue-600 font-medium mb-4 text-base">
                {exp.period}
              </p>

              <p
                className="text-gray-700 text-base leading-relaxed mb-6"
                style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
              >
                {exp.description}
              </p>

              
              <button
                onClick={() => navigate(exp.link)}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
