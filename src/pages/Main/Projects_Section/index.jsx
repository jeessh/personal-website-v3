import { React } from "react";
import Project_H from "../../../components/ProjectCard";
import "./Projects.css";

const Projects = () => {

  return (
    <section className="projects" id="projects_main">
      <Project_H title="The CookBook"/>
      <Project_H title="Art.IO???"/>
      <Project_H title="troki???"/>
      <div>
        <h2 className="viewMore">View More Projects</h2>
      </div>
    </section>
  );
};

export default Projects;
