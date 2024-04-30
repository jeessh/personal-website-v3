import React from "react";
import "./Sidebar.css";
import user from "../../images/user_icon.png";
import { Link, animateScroll } from "react-scroll";

const Sidebar = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <nav className="sideContainer">
      <div className="sideIconContainer" onClick={scrollToTop}>
       <img className="sideIcon" src={user} alt="personal" />
      </div>
      <Link
        className="sideIconContainer"
        to="projects_main"
        smooth={true}
        duration={1000}
        spy={true}
        exact="true"
      >
        <h3>Experiences</h3>
      </Link>
      <div className="sideIconContainer">
        <h3>Contact</h3>
      </div>
    </nav>
  );
};

export default Sidebar;
