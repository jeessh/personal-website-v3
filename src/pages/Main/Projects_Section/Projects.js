import { React, useEffect, useState } from "react";
import Project_H from "../../../components/ProjectCards/ProjectCard";
import "./index.css";

const Projects = () => {
  const [offset, setOffset] = useState(0);
  const handleScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="projects" id="projects_main">
      <wrapper className="projectsTitleWrapper">
        <h1
          className="projectsTitle"
          style={{ transform: `translateY(${offset * 0.02}rem)` }}
        >
          Project Showcase
        </h1>
      </wrapper>
      <Project_H title="The CookBook" />
      <Project_H title="Art.IO???" />
      <Project_H title="Art.IO???" />
      <Project_H title="Art.IO???" />
      <div>
        <h2 className="viewMore">View More Projects</h2>
      </div>
    </section>
  );
};

export default Projects;
