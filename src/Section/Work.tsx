export default function Work() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "ABC Company",
      period: "2023 – Present",
      description:
        "Developed web apps, optimised APIs, built full-stack features using React, Node.js, and PostgreSQL. Led a team of 3 developers.",
    },
    {
      title: "Junior Developer",
      company: "XYZ Startup",
      period: "2021 – 2023",
      description:
        "Built responsive web applications and integrated third-party APIs. Improved application performance by 40%.",
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
            className="bg-white shadow-lg p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">
              {exp.title} — {exp.company}
            </h3>
            <p className="text-blue-600 font-medium mb-4 text-base">
              {exp.period}
            </p>
            <p
              className="text-gray-700 text-base leading-relaxed"
              style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
            >
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
