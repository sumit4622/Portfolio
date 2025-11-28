export default function Sidebar() {
  return (
    <div className="h-full bg-gray-900 px-8 py-10 flex flex-col items-center text-white">
      {/* Profile Image */}
      <img
        src="https://via.placeholder.com/150"
        alt="Ranjesh Thakur Profile"
        className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-blue-500 shadow-lg"
      />

      {/* Name & Designation */}
      <h1 className="text-2xl font-bold mb-2 text-center tracking-wide">
        Ranjesh Thakur
      </h1>
      <p className="text-gray-300 text-base mb-8 tracking-wider">
        Full Stack Developer
      </p>

      {/* Contact Info */}
      <div className="w-full space-y-4 text-gray-300 text-sm mb-8">
        <div className="flex items-center gap-3">
          <span className="text-lg">📧</span>
          <span>ranjesh@example.com</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-lg">📞</span>
          <span>+977-98XXXXXXXX</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mt-auto">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 underline text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110 underline text-sm font-medium"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
