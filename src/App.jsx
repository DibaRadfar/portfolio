import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import FirstSection from "./components/FirstSection/FirstSection.jsx";
import KeyFeatures from "./components/KeyFeatures/KeyFeatures.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import AreasOfActivity from "./components/AreasOfActivity/AreasOfActivity.jsx";
import Skills from "./components/Skills/Skills.jsx";
import SampleOfProjects from "./components/SampleProjects/SampleProject.jsx";
import Team from "./components/Team/Team.jsx";
import HireMe from "./components/HireMe/HireMe.jsx";
import Footer from "./components/Footer/Footer.jsx"



function App() {


  return (
    <Router>
      
    <Header/>
    <FirstSection/>
    <KeyFeatures/>
    <AboutMe/>
    <AreasOfActivity/>
    <Skills/>
    <SampleOfProjects/>
    <Team/>
    <HireMe/>
    <Footer/>

    </Router>
  )
}

export default App
