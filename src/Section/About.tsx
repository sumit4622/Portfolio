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
        I am a 3rd year BSc (Hons) Computing and Information Technology student
        with a strong interest in full-stack web development. I primarily work
        with React and Python to build modern, scalable, and user-focused
        applications.
      </p>

      <p
        className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-6"
        style={{ lineHeight: "1.5", letterSpacing: "0.5px" }}
      >
        Through academic and personal projects, I have gained hands-on
        experience in developing end-to-end solutions, integrating APIs,
        managing databases, and deploying applications to the cloud. I enjoy
        solving real-world problems through clean code, thoughtful design, and
        continuous learning.
      </p>
    </section>
  );
}
