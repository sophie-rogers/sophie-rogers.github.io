import React, { useState, useEffect } from "react";

function Header() {
  // Scroll to About section with smooth animation & offset
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("About");
    if (!aboutSection) return;

    const yOffset = -100; // gap from top
    const start = window.pageYOffset;
    const end = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
    const distance = end - start;
    const duration = 1500; // 1.5 seconds

    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToAbout();
    }
  };

  // Scroll-to-top button
  const [showTop, setShowTop] = useState(false);

  const handleScroll = () => {
    setShowTop(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    const start = window.pageYOffset;
    const distance = -start;
    const duration = 1200;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * easedProgress);

      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="Header" className="mx-8 lg:mx-40 pt-40 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Column - Text */}
        <div className="lg:w-2/5 text-justify">
          <div className="flex flex-col">
            <code className="text-lightblue_vs">Hi, my name is</code>
            <code className="text-[#e6f1ff] text-7xl mt-5">Sophie Rogers</code>
            <br />
            <code className="text-lightblue_vs">
              I'm a PhD student at the University of Kent.
            </code>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end items-center">
          <img
            src={require("../assets/images/your-image.jpg")}
            alt="Sophie Rogers"
            className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      <br /><br /><br /><br />

      {/* Scroll Prompt - Centered */}
      <div className="flex flex-col items-center mt-20">
        <button
          type="button"
          onClick={scrollToAbout}
          onKeyDown={onKeyDown}
          className="flex flex-col items-center cursor-pointer focus:outline-none"
          aria-label="Scroll to About section"
          style={{ background: "transparent", border: "none" }}
        >
          <span className="text-lightblue_vs font-mono text-sm mb-2">
            Scroll down to About
          </span>
          <svg
            role="img"
            aria-hidden="true"
            className="w-5 h-5 text-lightblue_vs animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-lightblue_vs text-[#28121B] p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default Header;