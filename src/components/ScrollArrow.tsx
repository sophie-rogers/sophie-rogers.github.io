import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

// IDs of the main sections on the page for scrolling
const sectionIds = ["about", "contact", "interests", "resume"];

const ScrollArrow = () => {
  const [showTop, setShowTop] = useState(false); // Show "scroll to top" button
  const [atBottom, setAtBottom] = useState(false); // Detect bottom of page

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      setShowTop(scrollY > 300);
      setAtBottom(scrollY + windowHeight >= bodyHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom smooth scroll function
  const smoothScrollTo = (targetY: number, duration = 1000) => {
    const startY = window.scrollY;
    const change = targetY - startY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutQuad
      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, startY + change * ease);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  // Scroll to the next section
  const handleScrollDown = () => {
    if (atBottom) return;

    const scrollPosition = window.scrollY;
    const buffer = 50;

    const nextSectionId = sectionIds.find((id) => {
      const el = document.getElementById(id);
      return el && el.offsetTop > scrollPosition + buffer;
    });

    if (nextSectionId) {
      const el = document.getElementById(nextSectionId);
      if (el) {
        const yOffset = -50;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        smoothScrollTo(y, 1000); // slower scroll
      }
    } else {
      smoothScrollTo(document.body.scrollHeight, 1000);
    }
  };

  // Scroll smoothly to top
  const handleScrollTop = () => {
    smoothScrollTo(0, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-3">
      {showTop && (
        <button
          onClick={handleScrollTop}
          className="bg-[#424042] hover:bg-[#5a585a] text-yellow_vs rounded-full p-3 shadow-lg transition-all"
          aria-label="Back to top"
        >
          <ChevronUpIcon className={`h-6 w-6 ${atBottom ? "animate-bounce" : ""}`} />
        </button>
      )}

      {!atBottom && (
        <button
          onClick={handleScrollDown}
          className="bg-[#424042] hover:bg-[#5a585a] text-yellow_vs rounded-full p-3 shadow-lg transition-all"
          aria-label="Scroll to next section"
        >
          <ChevronDownIcon className="h-6 w-6 animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ScrollArrow;