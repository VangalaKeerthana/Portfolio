import React from "react";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyHireMe from "./components/WhyHireMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="grid-background"></div>
        <Navbar />
        <Hero />
        <WhyHireMe />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
