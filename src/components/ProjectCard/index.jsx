import { React } from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import temp from "../../images/headshot.jpg";

const Project = ({ title,  }) => {
  return (
    <div className="projectContainer">
      <img className="projectImage" src={temp} />
      <div className="projectTextWrapper">
        <h1 className="projectTitle">{title}</h1>
        <h2>tools</h2>
      </div>
    </div>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  theRef: PropTypes.object
};

export default Project;
