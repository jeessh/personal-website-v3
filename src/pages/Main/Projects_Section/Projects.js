import { React, useRef} from "react";
import Project_H from "../../../components/ProjectCards/ProjectCard";
import "./index.css";

const Projects = () => {
  const projRef = useRef(); 
  const proj1 = useRef();

  setTimeout(() => {
    if (!projRef.current) return;
    const rect = projRef.current.getBoundingClientRect();
    console.log(rect);
    console.log(rect.top - window.innerHeight / 2);
    
  } , 50);

  // const [offset, setOffset] = useState(0);
  // const handleScroll = () => {
  //   setOffset(window.scrollY);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="projects" id="projects_main" ref={projRef}>
      <Project_H title="The CookBook" ref={proj1}/>
      <Project_H title="Art.IO???" />
      <Project_H title="Art.IO???" />
      <Project_H title="Art.IO???" />
      <div>
        <h2 className="viewMore">View More Projects<br></br> help<br></br> help<br></br> help<br></br> help<br></br> help<br></br> help<br></br> help</h2>
      </div>
    </section>
  ); 
};

export default Projects;
