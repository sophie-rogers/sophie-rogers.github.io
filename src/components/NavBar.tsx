import React, { useState } from 'react';
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const TSIcon = require("../assets/icons/TSIcon.png");

interface ContainerProps {
  isActive: boolean;
}

// Tab container styling
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
      ? "bg-[#28121B] text-yellow_vs" // active tab slightly lighter
      : "bg-[#191215] text-[#DB7B99] border border-[#DB7B99] border-opacity-25 hover:text-yellow_vs hover:bg-[#1e1e1e]"} // inactive tab
`;

interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const [closedTabs, setClosedTabs] = useState<string[]>([]);

  const tabs = [
    { key: "home", label: "Home.ts" },
    { key: "about", label: "About.ts" },
    { key: "contact", label: "PhD.ts" },
    { key: "interests", label: "ResearchInterests.ts" },
    { key: "resume", label: "Resume.ts" },
  ];

  return (
    <div className="flex flex-row w-full h-full bg-[#191215]"> {/* full-width dark burgundy */}
      {tabs.map((tab) => {
        if (closedTabs.includes(tab.key)) return null;
        const isActive = activeTab === tab.key;

        return (
          <Container
            key={tab.key}
            isActive={isActive}
            onClick={() => setActiveTab(tab.key)}
          >
            <img src={TSIcon} alt="TS Icon" className="w-7 mr-1" />
            {tab.label}
            {!isActive && (
              <XIcon
                className="w-6 ml-4 opacity-50 cursor-default"
              />
            )}
          </Container>
        );
      })}

      {/* Fills remaining space to the right with dark burgundy */}
      <div className="flex-1 bg-[#191215]" />
    </div>
  );
};

export default NavBar;