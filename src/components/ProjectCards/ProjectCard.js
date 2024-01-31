import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import temp from "../../images/headshot.jpg";

const Project_H = ({ title }) => {
  return (
    <wrapper className="projectContainer">
      <h1 className="projectTitle">{title}</h1>
      <h2>tools</h2>
      <img className="projectImage" src={temp} />
      <p>description</p>
    </wrapper>
  );
};

Project_H.propTypes = {
  title: PropTypes.string.isRequired
};

export default Project_H;
