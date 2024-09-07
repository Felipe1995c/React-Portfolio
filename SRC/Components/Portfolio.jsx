import React from "react";
import "../Styles/App.css"; // Link to your CSS file
// import DIYHubLogo from "../Images/DIYhubLogo.png";
// import WeatherNowImage from "../Images/WeatherNow.png";

function Portfolio() {
  const projects = [
    {
      title: "WeatherNow",
      description: "This is a weather app created using the openWeatherMap API to make our own twist to getting the weather data for any given city.",
      link: "https://felipe1995c.github.io/WeatherNow/",
      image: "./Images/weatherNow-APP.jpg", 
      technologies: ["HTML", "CSS", "JavaScript"], 
    },
    {
      title: "DIY-Hub",
      description: "A short description of Project 2.",
      link: "https://felipe1995c.github.io/DIY-hub/",
      image: "./Images/DIYhublogo.png", 
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    // Add more projects here
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h1 className="section-title primary-border">My Projects</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-item" key={index}>
            <img src={project.image} alt={project.title} className="portfolio-img" />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((tech, i) => (
                <li key={i} className="tech-item">{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;