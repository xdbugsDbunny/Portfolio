import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About/About";
import NavBar from "./components/Header/NavBar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import LeftSideBar from "./components/SideBars/LeftSideBar";
import RightSideBar from "./components/SideBars/RightSideBar";
import DialogBox from "./components/SideBars/DialogBox";
import HeroSection from "./components/HeroSection/HeroSection";
import Marquee from "./components/Marquee/Marquee";
import Play from "./components/Play/Play";
import Projects from "./components/Projects/Projects";
import InternshipProjects from "./components/Projects/InternshipProjects";
import Footer from "./components/Footer/Footer";
import gsap from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <CustomCursor />
      <div
        className="w-full text-black min-h-screen bg-slate-300 "
        id="main-container"
      >
        <NavBar />
        <LeftSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <DialogBox onClose={() => setIsOpen(false)} />}
        <RightSideBar />
        <HeroSection />
        <Marquee />
        <About />
        <Play />
        <Projects />
        <InternshipProjects />
        <Footer />
      </div>
      {/* <Router>
        <CustomCursor/>
        <NavBar />
        <LeftSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen && <DialogBox onClose={() => setIsOpen(false)} />}
        <RightSideBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/marquee" element={<Marquee />} />
          <Route path="/about" element={<About />} />
          <Route path="/play" element={<Play />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work" element={<InternshipProjects />} />
        </Routes>
        <Footer />
      </Router> */}
    </>
  );
}

export default App;
