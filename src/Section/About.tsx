export default function About() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col justify-center px-10 lg:px-16 py-16 animate-fadeIn"
    >
      <h2 className="text-5xl font-bold mb-8 text-gray-900 tracking-tight">
        About Me
      </h2>
      <p
        className="text-gray-700 text-lg leading-relaxed max-w-3xl"
        style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
      >
        Full-stack developer focused on React, Python, and cloud deployment.
        Passionate about building scalable applications and delivering
        exceptional user experiences through clean code and modern design
        principles.
      </p>
      <p
        className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-6"
        style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
      >
        With expertise in both frontend and backend technologies, I create
        end-to-end solutions that solve real-world problems efficiently.
      </p>
    </section>
  );
}
