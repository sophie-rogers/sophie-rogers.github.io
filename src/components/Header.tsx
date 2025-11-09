import React, { HTMLAttributes, useState, useEffect } from "react";

// Props interface allows passing standard div attributes including id
interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ id, ...rest }) => {
  // State to track if the user has scrolled past 300px
  const [showTop, setShowTop] = useState(false);
  // State to control visibility of the "Scroll for more" text for fade effect
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowTop = window.scrollY > 300;
      setShowTop(shouldShowTop);

      // Toggle visibility for fade effect based on scroll position
      if (shouldShowTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Main container for the header section with padding
    <div id={id} {...rest} className="mx-8 lg:mx-40 pt-48 pb-48 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Column - Introductory text */}
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

        {/* Right Column - Profile image */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end items-center">
          <img
            src={require("../assets/images/your-image.jpg")}
            alt="Sophie Rogers"
            className="w-56 h-56 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Scroll prompt text aligned to bottom-right, near ScrollArrow */}
      <div
        className={`fixed bottom-10 right-24 z-50 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        } hidden lg:block`} // <--- hide on small screens
      >
        <span className="text-lightblue_vs font-mono text-sm">
          Scroll for more
        </span>
      </div>
    </div>
  );
};

export default Header;
