import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import About from "./About";
import Resume from "./Resume";
import Interests from "./Interests";
import Contact from "./Contact";
import NavBar from "../components/NavBar";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const sidebarWidth = 350; // fixed width

  return (
    <div id="home" className="App flex h-full">
      {/* Sidebar */}
      <div className="bg-[#262526] h-full fixed hidden lg:block">
        <SideBar width={sidebarWidth} />
      </div>
      
      {/* Main content */}
      <div className="bg-[#28121B] h-full flex-1 lg:ml-[414px]">
        {/* Mobile menu for small screens */}
        <div className="lg:hidden">
          <MobileMenu />
        </div>
        
        {/* NavBar */}
        <div className="bg-[#424042] h-16 hidden lg:flex">
          <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        
        {/* Page content */}
        {activeTab === "home" && (
          <div className="p-4">
            <Header />
            <About />
            <Resume />
            <Interests />
            <Contact />
          </div>
        )}
        {activeTab === "about" && <About />}
        {activeTab === "resume" && <Resume />}
        {activeTab === "interests" && <Interests />}
        {activeTab === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default Home;