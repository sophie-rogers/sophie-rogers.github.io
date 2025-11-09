import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import About from "./About";
import Resume from "./Resume";
import Interests from "./Interests";
import Contact from "./Contact";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";
import ScrollArrow from "../components/ScrollArrow";

const Home = () => {
  // State to track the currently active tab
  const [activeTab, setActiveTab] = useState("home");

  // Fixed width for the sidebar
  const sidebarWidth = 350;

  return (
    <div id="home" className="App flex h-full">
      {/* Sidebar visible only on large screens */}
      <div className="bg-[#262526] h-full fixed hidden lg:block">
        <SideBar width={sidebarWidth} />
      </div>
      
      {/* Main content area */}
      <div className="bg-[#28121B] h-full flex-1 lg:ml-[414px]">
        {/* Mobile menu for small screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        
        {/* Top navigation bar visible on large screens */}
        <div className="bg-[#424042] h-16 hidden lg:flex">
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Conditional rendering of page content based on active tab */}
        {activeTab === "home" && (
          <div className="p-4 relative">
            {/* Header section with name, image, and scroll prompt */}
            <Header id="header" />

            {/* About section describing skills, modules, and research */}
            <About id="about" />

            {/* Contact section */}
            <Contact id="contact" />

            {/* Research interests section */}
            <Interests id="interests" />

            {/* Resume / CV section */}
            <Resume id="resume" />

            {/* Scroll arrows for navigating between sections */}
            <ScrollArrow />
          </div>
        )}

        {/* Render individual sections if their tab is active */}
        {activeTab === "about" && <About />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "interests" && <Interests />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default Home;