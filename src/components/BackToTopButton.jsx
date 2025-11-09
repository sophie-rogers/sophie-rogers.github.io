import React from "react";
import { ChevronUpIcon } from "@heroicons/react/solid";

// Component for a "Back to Top" button
const BackToTopButton = () => {
  // Function to scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Container fixed to the bottom-right of the viewport
    <div className="fixed bottom-8 right-8 z-50">
      {/* Button that triggers scrolling to the top */}
      <button
        onClick={scrollToTop}
        className="bg-[#424042] hover:bg-[#5a585a] text-yellow_vs rounded-full p-3 shadow-lg transition-all"
      >
        {/* Up arrow icon inside the button */}
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTopButton;