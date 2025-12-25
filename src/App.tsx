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
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Custom smooth scroll function (faster 300ms)
  const smoothScrollTo = (element: HTMLElement, duration = 300) => {
    if (!element || !containerRef.current) return;
    const start = containerRef.current.scrollLeft;
    const end = element.offsetLeft;
    const change = end - start;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeInOut =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress; // ease-in-out
      containerRef.current!.scrollLeft = start + change * easeInOut;
      if (progress < 1) requestAnimationFrame(animateScroll);
    };
    requestAnimationFrame(animateScroll);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const target = containerRef.current.children[index] as HTMLElement;
    smoothScrollTo(target, 800); // faster smooth scroll
    setActiveIndex(index);
    setShowMobileMenu(false);
  };

  // Mouse wheel horizontal slide
  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && activeIndex < sections.length - 1)
        scrollToIndex(activeIndex + 1);
      else if (e.deltaY < 0 && activeIndex > 0) scrollToIndex(activeIndex - 1);
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isMobile]);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Sumit Ray</h1>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl"
              aria-label="Toggle menu"
            >
              {showMobileMenu ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="fixed inset-0 bg-gray-900 text-white z-40 pt-20 px-6">
            <Sidebar />
          </div>
        )}

        <div className="pt-20">
          <About />
          <Work />
          <Project />
        </div>

        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white px-4 py-2 rounded-full shadow-lg ">
          <div className="flex gap-3">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.getElementById(sections[index]);
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${activeIndex === index
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

  return (
    <div className="flex w-full min-h-screen bg-gray-50">
      {/* Sidebar - 30% */}
      <div className="w-[30%] fixed h-full shadow-2xl z-10">
        <Sidebar />
      </div>

      {/* Main Content - 70% */}
      <div className="w-[70%] ml-[30%] relative overflow-hidden">
        {/* Sections */}
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

        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none w-full flex justify-center">
          <div className="flex gap-4 pointer-events-auto bg-white px-4 py-3 rounded-full shadow-xl">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to ${section} section`}
                className={`
                  rounded-full transition-all duration-300 top-100
                  ${activeIndex === index
                    ? "bg-blue-600 w-5 h-5 scale-125 shadow-lg"
                    : "bg-gray-400 w-4 h-4 scale-100 hover:bg-gray-500"
                  }
                `}
              />
            ))}
          </div>
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
