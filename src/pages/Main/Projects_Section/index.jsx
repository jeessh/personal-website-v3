import { React } from "react";
import Project from "../../../components/ProjectCard";
import "./Projects.css";

const Projects = () => {

  return (
    <section className="projects" id="projects_main">
      <div className="projectsCards">
      <Project title="Wiz Curriculum Generator"/>
      <Project title="WaterWho"/>
      <Project title="troki???"/>
      <Project title="artio???!?!?!?!?"/>

      </div>
      
      <div>
        <h2 className="viewMore">View More</h2>
      </div>
    </section>
  );
};

export default Projects;
