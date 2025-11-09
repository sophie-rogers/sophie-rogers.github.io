import React, { useState } from 'react';
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

// Import TypeScript logo for each tab
const TSIcon = require("../assets/icons/TSIcon.png");

interface ContainerProps {
  isActive: boolean; // Determines if the tab is currently active
}

// Styled tab container using Tailwind + tailwind-styled-components
const Container = tw.div<ContainerProps>`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-lg
  font-medium
  cursor-pointer
  transition-colors duration-200
  ${(p) =>
    p.isActive
      ? "bg-[#28121B] text-yellow_vs" // Active tab: slightly lighter background and yellow text
      : "bg-[#191215] text-[#DB7B99] border border-[#DB7B99] border-opacity-25 hover:text-yellow_vs hover:bg-[#1e1e1e]"} // Inactive tab: darker background, border, hover effects
`;

interface Props {
  activeTab: string; // The currently selected tab
  setActiveTab: React.Dispatch<React.SetStateAction<string>>; // Function to change active tab
}

const NavBar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [closedTabs, setClosedTabs] = useState<string[]>([]); // Tracks tabs that are "closed" or hidden

  // List of tabs with their labels and keys
  const tabs = [
    { key: "home", label: "Home.ts" },
    { key: "about", label: "About.ts" },
    { key: "contact", label: "PhD.ts" },
    { key: "interests", label: "ResearchInterests.ts" },
    { key: "resume", label: "Resume.ts" },
  ];

  return (
    <div className="flex flex-row w-full h-full bg-[#191215]"> {/* Full-width navbar with dark burgundy background */}
      {tabs.map((tab) => {
        if (closedTabs.includes(tab.key)) return null; // Skip rendering if the tab is closed
        const isActive = activeTab === tab.key; // Determine if this tab is the active one

        return (
          <Container
            key={tab.key}
            isActive={isActive}
            onClick={() => setActiveTab(tab.key)} // Set this tab as active on click
          >
            {/* Tab icon */}
            <img src={TSIcon} alt="TS Icon" className="w-7 mr-1" />
            
            {/* Tab label */}
            {tab.label}

            {/* Close icon displayed only for inactive tabs */}
            {!isActive && (
              <XIcon
                className="w-6 ml-4 opacity-50 cursor-default" // Slightly faded and non-clickable
              />
            )}
          </Container>
        );
      })}

      {/* Fills any remaining horizontal space on the right to keep the navbar full width */}
      <div className="flex-1 bg-[#191215]" />
    </div>
  );
};

export default NavBar;