import { React, useEffect, useRef } from "react";
import Project_H from "../../../components/ProjectCards/ProjectCard";
import "./index.css";

const Projects = () => {
  const projRef = useRef();
  const proj1 = useRef();
  const proj2 = useRef();
  const proj3 = useRef();

  const handleScroll = () => {
    if (!projRef.current) return;
    const rect = projRef.current.getBoundingClientRect();
    // const temp = rect.top - window.innerHeight / 2.5;
    if (rect.top - window.innerHeight / 2.5 < 0 && rect.bottom - 100 > 0) {

        proj1.current.classList.add("projReveal");
        setTimeout(() => {
          proj2.current.classList.add("projReveal");

        }, 100);
        setTimeout(() => {
          proj3.current.classList.add("projReveal");
        }, 200);
    } else {
        proj1.current.classList.remove("projReveal");
        setTimeout(() => {
          proj2.current.classList.remove("projReveal");

        }, 100);
        setTimeout(() => {
          proj3.current.classList.remove("projReveal");
        }, 200);
      
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="projects" id="projects_main" ref={projRef}>
      <Project_H title="The CookBook" ref={proj1} />
      <Project_H title="Art.IO???" ref={proj2} />
      <Project_H title="troki???" ref={proj3} />
      <div>
        <h2 className="viewMore">View More Projects</h2>
      </div>
    </section>
  );
};

export default Projects;
