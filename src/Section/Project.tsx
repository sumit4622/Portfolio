// import { useNavigate } from "react-router-dom";

export default function Project() {
  // const navigate = useNavigate();

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management.",
      tech: "Next.js, Stripe, PostgreSQL",
      link: "/projects/ecommerce",
    },

    {
      title: "Online Bidding Application",
      description:
        "Full-stack real-time auction system with role-based access, admin approval workflow, and live bidding using WebSockets.",
      tech: "React, Django, WebSockets, JWT",
    },
    
    {
      title: "Smart Air Monitoring System",
      description:
        "IoT-based air quality monitoring system that collects real-time sensor data, visualizes pollution levels, and triggers alerts when thresholds are exceeded.",
      tech: "IoT, Python, Sensors, MQTT, Data Visualization",
      link: "/projects/smart-air-monitoring",
    },
  ];

  return (
    <section
      id="project"
      className="h-screen flex flex-col justify-center px-10 lg:px-16 py-16 animate-fadeIn"
    >
      <h2 className="text-5xl font-bold mb-10 text-gray-900 tracking-tight">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-white shadow-lg p-8 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                {project.title}
              </h3>

              <p
                className="text-gray-700 text-base mb-6 leading-relaxed"
                style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
              >
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <p className="text-sm text-blue-600 font-medium">
                  {project.tech}
                </p>

                {/* View More Button */}
                <button
                  onClick={() => navigate(project.link)}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
