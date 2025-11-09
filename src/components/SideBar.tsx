import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const sidebarGif = require("../assets/images/chickens.gif");

interface SideBarProps {
  width: number; // Width of the sidebar in pixels
}

const SideBar: React.FC<SideBarProps> = ({ width }) => {
  const [showWebList, setShowWebList] = useState(true); // Toggle visibility of web projects list
  const [showProjectsList, setShowProjectsList] = useState(true); // Toggle visibility of main projects list

  const defaultColor = "#9A465F"; // Default color for social icons
  const hoverColor = "#EC678D"; // Hover color for social icons

  // Component for external social links
  const SocialIcon: React.FC<{ children: React.ReactNode; href: string }> = ({ children, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors">
      {children}
    </a>
  );

  return (
    <div className="flex h-full relative">
      {/* Vertical social activity bar */}
      <div className="bg-[#191215] w-16 flex flex-col items-center py-4 space-y-4">
        {/* GitHub link */}
        <SocialIcon href="https://github.com/sophie-rogers">
          <svg
            className="w-8 h-8"
            fill={defaultColor}
            viewBox="0 0 24 24"
            onMouseEnter={(e) => (e.currentTarget.style.fill = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.fill = defaultColor)}
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </SocialIcon>

        {/* LinkedIn link */}
        <SocialIcon href="https://uk.linkedin.com/in/rogerssophie">
          <svg
            className="w-8 h-8"
            fill={defaultColor}
            viewBox="0 0 24 24"
            onMouseEnter={(e) => (e.currentTarget.style.fill = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.fill = defaultColor)}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </SocialIcon>

        {/* Email link */}
        <SocialIcon href="mailto:S.Rogers@kent.ac.uk">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke={defaultColor}
            viewBox="0 0 24 24"
            strokeWidth={2}
            onMouseEnter={(e) => (e.currentTarget.style.stroke = hoverColor)}
            onMouseLeave={(e) => (e.currentTarget.style.stroke = defaultColor)}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </SocialIcon>
      </div>

      {/* Main sidebar container */}
      <div className="flex flex-col h-full bg-[#191215] relative" style={{ width }}>
        <div className="flex-grow overflow-auto px-4 mt-5 text-[#a2aabc]">
          {/* Toggle Projects list */}
          <div
            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold py-1"
            onClick={() => setShowProjectsList(!showProjectsList)}
          >
            {showProjectsList ? <ChevronDownIcon className="w-6 mr-1" /> : <ChevronRightIcon className="w-6 mr-1" />}
            <p>Projects</p>
          </div>

          {/* Nested Web projects list */}
          {showProjectsList && (
            <>
              <div
                className="flex items-center ml-5 hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold py-1"
                onClick={() => setShowWebList(!showWebList)}
              >
                {showWebList ? <ChevronDownIcon className="w-6 mr-1" /> : <ChevronRightIcon className="w-6 mr-1" />}
                <p>PhD Computer Science</p>
              </div>
              {showWebList && <WebList />}
            </>
          )}
        </div>

        {/* GIF at the bottom of the sidebar */}
       <div className="w-full absolute bottom-0 left-0">
         <img
           src={require("../assets/images/chickens.gif")}
           alt="Chickens"
           className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] rounded-xl"
         />
       </div>
      </div>
    </div>
  );
};

export default SideBar;

// Component for listing web projects inside the sidebar
const WebList: React.FC = () => {
  const webProjects = [
    { name: "Ethics of AI in Healthcare Lecture", href: "/documents/ethicshealthcarelecture.pdf" },
    { name: "Research Poster", href: "/documents/researchposter.pdf" },
    { name: "Research Protocol", href: "/documents/placeholder.pdf" },
  ];

  return (
    <div className="flex flex-col ml-8 text-[#a2aabc]">
      {webProjects.map((proj, idx) => (
        <a
          key={idx}
          href={proj.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Each project item displays an icon and the project name */}
          <div className="flex items-center hover:bg-[#2b2a2a] py-1">
            <img
              src={idx % 2 === 0 ? JSIcon : TSIcon} // Alternate between JS and TS icons
              alt={`${proj.name} Icon`}
              className="w-6 mr-1"
            />
            <p>{proj.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};