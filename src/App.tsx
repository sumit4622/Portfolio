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
  
  // Prevents multiple wheel events from firing during an animation
  const isScrolling = useRef(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll logic
  const smoothScrollTo = (index: number) => {
    if (!containerRef.current || isScrolling.current) return;
    
    const target = containerRef.current.children[index] as HTMLElement;
    if (!target) return;

    isScrolling.current = true;
    setActiveIndex(index);

    containerRef.current.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth"
    });

    // Timeout matches the smooth scroll duration to unlock
    setTimeout(() => {
      isScrolling.current = false;
    }, 700); 
  };

  // Desktop Wheel Handler
  useEffect(() => {
    if (isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        smoothScrollTo(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        smoothScrollTo(activeIndex - 1);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }
    return () => container?.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isMobile]);

  // Mobile View
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Sumit Ray</h1>
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl"
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
          <div id="about"><About /></div>
          <div id="work"><Work /></div>
          <div id="project"><Project /></div>
        </div>

        {/* Mobile Pagination */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white px-4 py-2 rounded-full shadow-lg">
          <div className="flex gap-3">
            {sections.map((id, index) => (
              <button
                key={id}
                onClick={() => {
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-blue-600 scale-150" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="flex w-full h-screen bg-gray-50 overflow-hidden">
      <div className="w-[30%] h-full shadow-2xl z-10">
        <Sidebar />
      </div>

      <div className="w-[70%] relative h-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex h-full overflow-hidden"
        >
          <section className="w-full h-full flex-shrink-0"><About /></section>
          <section className="w-full h-full flex-shrink-0"><Work /></section>
          <section className="w-full h-full flex-shrink-0"><Project /></section>
        </div>

        {/* Desktop Pagination */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50">
          <div className="flex gap-4 bg-white px-6 py-3 rounded-full shadow-2xl border border-gray-100">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => smoothScrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-blue-600 w-8 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}