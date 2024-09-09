import React from "react";
import "../Styles/App.css"; // Link to your CSS file
import DIYHubLogo from "../assets/images/DIYHublogo.png";
import PayrollTracker from "../assets/images/Screenshot Payroll Tracker.jpg";
import KanbanBoard from "../assets/images/new tasks.jpg";
import NoteTaker from "../assets/images/Note_taker buttons.jpg";
import PersonalBlog from "../assets/images/blog-drk mode screenshot.jpg";
import WeatherNow from "../assets/images/weatherNow-APP.jpg";

function Portfolio() {
  const projects = [
    {
      title: "WeatherNow",
      description: "This is a weather app created using the openWeatherMap API to make our own twist to getting the weather data for any given city.",
      link: "https://felipe1995c.github.io/WeatherNow/",
      image:WeatherNow,      
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "DIY-Hub",
      description: `This app was created with the goal of creating an app 
      where users can come to look for inspiration for home improvements projects. 
      They can choose a room in a house and have them redirected to another page where 
      there will be videos and pictures to show and inspire users with projects they can do themselves.`,
      link: "https://felipe1995c.github.io/DIY-hub/",
      image: DIYHubLogo, 
      technologies: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "Employee Payroll Tracker",
      description: `A simple app that can be used by a business to track how much each employee makes.
      It also allows for adding, editing, and removal of employees to organize and track expenses.`,
    image: PayrollTracker,
    technologies: ["HTML","CSS","JavaScript"],  
    },
    {
      title: "Kanban Board (To do app)",
      description: `A simple Kanban board designed to organize tracking the everyday duties. 
      Allowing for adding, deleting, and could even implement further designs if requested. Such as drag and drop.`,
    image: KanbanBoard,
    technologies: ["HTML","CSS","JavaScript"],
    },
    {
      title: "Note Taker",
      description: `A application created with a similar idea to the Kanban board. This App is more for simple daily or 
      less tracked notes because time and date is not included in this version.`,
    image: NoteTaker,
    technologies: ["HTML","CSS","JavaScript"],
    },
    {
      title: "Personal Blog",
      description: `A real quick idea of a blog with basic components to show the abililty to create a blog. 
      There are many more ways to customize and add to this app. This app also shows the light and dark mode capability.`,
    image: PersonalBlog,
    technologies: ["HTML","CSS","JavaScript"],
    }
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