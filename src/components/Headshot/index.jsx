import React from "react";
import "./Headshot.css";
import headshot from "../../images/headshot.jpg";

const Headshot = () => {
  return (
    <div className="headshotContainer">
      <img src={headshot} className="headshot" alt="Headshot" />
    </div>
  );
};

export default Headshot;
