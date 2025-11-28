export default function Project() {
  const projects = [
    {
      title: "QR Attendance System",
      description:
        "Mobile + Web QR system for colleges with real-time tracking and analytics dashboard.",
      tech: "React Native, Node.js, MongoDB",
    },
    {
      title: "Forex Chart Analyzer",
      description:
        "AI-powered forex chart prediction tool using machine learning algorithms.",
      tech: "Python, TensorFlow, React",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-featured online store with payment integration and inventory management.",
      tech: "Next.js, Stripe, PostgreSQL",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team features.",
      tech: "React, Firebase, Tailwind",
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
            className="bg-white shadow-lg p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
              {project.title}
            </h3>
            <p
              className="text-gray-700 text-base mb-4 leading-relaxed"
              style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
            >
              {project.description}
            </p>
            <p className="text-sm text-blue-600 font-medium">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
