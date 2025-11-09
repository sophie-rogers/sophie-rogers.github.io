import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  // On initial mount, check if a sidebar width is stored in localStorage
  // If not, set a default width of 270px
  useEffect(() => {
    const existingWidth = localStorage.getItem("sideBarWidth");

    if (!existingWidth) {      
      localStorage.setItem("sideBarWidth", "270");
    }
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    // Wrap the application in BrowserRouter to enable routing
    <BrowserRouter>
      <Routes>
        {/* Root route "/" renders the Home component */}
        <Route path="/" element={<Home />} />
      </Routes>  
    </BrowserRouter>
  );
}

export default App;