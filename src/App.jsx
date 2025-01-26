import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import { ThemeProvider } from "./theme";
import "./tailwind.css";
import Style from './App.css';
import Experience from "./components/Experience";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './components/ProjectDetails';
import Activity from './components/Activity';
import { Toaster } from 'react-hot-toast';
import SchoolActivity from "./components/SchoolActivity";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'; // Reset on component unmount
    };
  }, []);

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider value={darkMode}>
      <Toaster />
      <Router>
        <div className={`${Style.App} ${darkMode ? "dark" : ""}`}>
          <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Experience />
                <Education />
                <Projects />
                <Skills />
                <Achievements />
                <Activity />
              </>
            } />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
            <Route path="/schoolactivity/:activityId" element={<SchoolActivity />} />
          </Routes>
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
