import React, { useState } from 'react';
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const TSIcon = require("../assets/icons/TSIcon.png");

interface ContainerProps {
  isActive: boolean;
}

const Container = tw.div<ContainerProps>`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-lg
  font-medium
  cursor-pointer
  ${(p) =>
    p.isActive
      ? "bg-[#28121B] text-yellow_vs"
      : "bg-[#191215] text-[#DB7B99] border border-[#DB7B99] border-opacity-25 hover:text-yellow_vs hover:bg-[#1e1e1e]"}
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
    { key: "resume", label: "Resume.ts" },
    { key: "interests", label: "Interests.ts" },
    { key: "contact", label: "Contact.ts" },
  ];

  return (
    <div className="flex flex-row h-full bg-[#191215]"> {/* Dark burgundy background */}
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
            {tab.key !== "home" && (
              <XIcon
                className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeTab === tab.key) setActiveTab("home");
                  setClosedTabs((prev) => [...prev, tab.key]);
                }}
              />
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default NavBar;