import React from "react";
import "../Styles/App.css"; // Link to your CSS file

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description: "A short description of Project 1.",
      link: "https://github.com/YourUsername/Project1",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
      technologies: ["React", "Node.js", "MongoDB"], // Replace with actual tech stack
    },
    {
      title: "Project 2",
      description: "A short description of Project 2.",
      link: "https://github.com/YourUsername/Project2",
      image: "https://via.placeholder.com/300", // Replace with your project image URL
      technologies: ["JavaScript", "HTML", "CSS"], // Replace with actual tech stack
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