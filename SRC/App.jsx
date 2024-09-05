import React, { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";  
// import Resume from "./Components/Resume";        
import Footer from "./Components/Footer";
import "./Styles/App.css";

function App() {
  

  return (
    <>
      <title>Felipe's Full Stack Portfolio</title>
      <Header />
      <Contact />
      <About />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;