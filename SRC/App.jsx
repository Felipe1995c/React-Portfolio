import React, { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./src/components/Portfolio";
//import Resume from "../src/components/Resume";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet-async";
import "./Styles/App.css";
// import Nav from "./Components/Navigation";

function App() {
  const [currentTab, handleTabChange] = useState("about");

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Portfolio") {
      return <Portfolio />;
    }
    if (currentTab === "Resume") {
      return //Resume component;
    }
    return <About />;
  };

  return (
    <>
    <Helmet>
        <title> Felipe's Full Stack Portfolio | {currentTab} </title>
    </Helmet>;
    <Header currentTab={currentTab}
    handleTabChange={handleTabChange}>
    </Header>
    <main>{renderTab()}</main>
    <Footer />
    </>
  );
}
export default App;


