import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

// IDs of the main sections on the page for scrolling
const sectionIds = ["about", "contact", "interests", "resume"];

const ScrollArrow = () => {
  const [showTop, setShowTop] = useState(false); // Determines visibility of "scroll to top" button
  const [atBottom, setAtBottom] = useState(false); // Tracks if the user is at the bottom of the page

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Current vertical scroll position
      const windowHeight = window.innerHeight; // Height of the viewport
      const bodyHeight = document.body.scrollHeight; // Total page height

      // Show "scroll to top" button after scrolling down 300px
      setShowTop(scrollY > 300);

      // Detect if user has reached the bottom of the page (10px buffer)
      setAtBottom(scrollY + windowHeight >= bodyHeight - 10);
    };

    window.addEventListener("scroll", handleScroll); // Listen for scroll events
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, []);

  // Scroll to the next section or bottom of page
  const handleScrollDown = () => {
    if (atBottom) return; // Do nothing if already at bottom

    const scrollPosition = window.scrollY;
    const buffer = 50; // Small offset to detect next section

    // Find the next section below current scroll
    const nextSectionId = sectionIds.find((id) => {
      const el = document.getElementById(id);
      return el && el.offsetTop > scrollPosition + buffer;
    });

    if (nextSectionId) {
      const el = document.getElementById(nextSectionId);
      if (el) {
        const yOffset = -50; // Padding to avoid content touching top
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" }); // Smooth scroll to next section
      }
    } else {
      // If at last section, scroll to bottom of page
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  // Scroll smoothly to the top of the page
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex gap-3">
      {/* Scroll to top button: visible after scrolling down */}
      {showTop && (
        <button
          onClick={handleScrollTop}
          className="bg-[#424042] hover:bg-[#5a585a] text-yellow_vs rounded-full p-3 shadow-lg transition-all"
          aria-label="Back to top"
        >
          {/* Arrow bounces only when at bottom */}
          <ChevronUpIcon
            className={`h-6 w-6 ${atBottom ? "animate-bounce" : ""}`}
          />
        </button>
      )}

      {/* Scroll down button: hidden when at bottom */}
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