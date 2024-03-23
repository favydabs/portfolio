import React from "react";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import ContactMe from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import MyPortfolio from "./components/Portfolio/MyPortfolio";
import AboutMe from "./components/About/AboutMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <AboutMe/>
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
