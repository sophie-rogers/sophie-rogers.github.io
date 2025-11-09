import React, { HTMLAttributes, useState, useEffect } from "react";

// Props interface allows passing standard div attributes including id
interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: React.FC<HeaderProps> = ({ id, ...rest }) => {
  const [showTop, setShowTop] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowTop = window.scrollY > 300;
      setShowTop(shouldShowTop);

      if (shouldShowTop) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id={id} {...rest} className="mx-8 lg:mx-40 pt-48 pb-64 relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* Left Column */}
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

        {/* Right Column */}
        <div className="lg:w-2/5 flex justify-center lg:justify-end items-center">
          <img
            src={require("../assets/images/your-image.jpg")}
            alt="Sophie Rogers"
            className="w-56 h-56 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Scroll prompt */}
      <div
        className={`fixed bottom-10 right-24 z-50 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
      >
        <span className="text-lightblue_vs font-mono text-sm">
          Scroll for more
        </span>
      </div>
    </div>
  );
};

export default Header;