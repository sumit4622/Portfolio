import { useEffect, useRef, useState } from "react";
import About from "../src/Section/About";
import Work from "../src/Section/Work";
import Project from "../src/Section/Project";
import Sidebar from "../src/Sidebar/Sidebar";

export default function App() {
  const sections = ["about", "work", "project"];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: width * index,
      behavior: "smooth",});
    setActiveIndex(index);
    setShowMobileMenu(false);
  };

  // Handle mouse wheel → horizontal slide
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        scrollToIndex(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        scrollToIndex(activeIndex - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isMobile]);

  // Mobile layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Ranjesh Thakur</h1>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-gray-900 text-white z-40 pt-20 px-6">
            <Sidebar />
          </div>
        )}

        {/* Mobile Content */}
        <div className="pt-20">
          <About />
          <Work />
          <Project />
        </div>

        {/* Mobile Navigation Dots */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white px-4 py-2 rounded-full shadow-lg">
          <div className="flex gap-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(sections[index]);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600 scale-150"
                    : "bg-gray-400 scale-100"
                }`}
                aria-label={`Go to ${sections[index]} section`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar - 30% */}
      <div className="w-[30%] fixed h-full shadow-2xl z-10">
        <Sidebar />
      </div>

      {/* Main Content - 60% */}
      <div className="w-[60%] ml-[30%] relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-screen overflow-hidden scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <section className="w-full flex-shrink-0 scroll-snap-align-start">
            <About />
          </section>
          <section className="w-full flex-shrink-0 scroll-snap-align-start">
            <Work />
          </section>
          <section className="w-full flex-shrink-0 scroll-snap-align-start">
            <Project />
          </section>
        </div>
      </div>

      {/* Navigation Dots - 10% */}
      {/* Navigation Dots - Bottom Horizontal Center */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full flex justify-center">
  <div className="flex gap-4 pointer-events-auto bg-white px-4 py-3 rounded-full shadow-xl">
    {sections.map((section, index) => (
      <button
        key={index}
        onClick={() => scrollToIndex(index)}
        aria-label={`Go to ${section} section`}
        className={`
          rounded-full transition-all duration-300 
          ${
            activeIndex === index
              ? "bg-blue-600 w-5 h-5 scale-125 shadow-lg"
              : "bg-gray-400 w-4 h-4 scale-100 hover:bg-gray-500"
          }
        `}
      />
    ))}
  </div>
</div>


      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
