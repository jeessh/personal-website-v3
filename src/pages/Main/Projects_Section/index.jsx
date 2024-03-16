import { React } from "react";
import Project from "../../../components/ProjectCard";
import "./Projects.css";

const Projects = () => {

  return (
    <section className="projects" id="projects_main">
      <h1>Projects</h1>
      <div className="projectsCards">
      <Project title="Wiz Curriculum Generator"/>
      <Project title="Art.IO???"/>
      <Project title="troki???"/>
      </div>
      
      <div>
        <h2 className="viewMore">View More Projects</h2>
      </div>
    </section>
  );
};

export default Projects;
