import { React, forwardRef } from "react";
import PropTypes from "prop-types";
import "./index.css";
import temp from "../../images/headshot.jpg";

const Project_H = forwardRef(function Project_H({ title }) {
  return (
    <div className="projectContainer">
      <img className="projectImage" src={temp} />
      <div className="projectTextWrapper">
        <h1 className="projectTitle">{title}</h1>
        <h2>tools</h2>
        <p>description</p>
      </div>
    </div>
  );
});

Project_H.propTypes = {
  title: PropTypes.string.isRequired,
  theRef: PropTypes.object
};

export default Project_H;
