import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const ContactIcon = ({ image, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <img
      className="contactIcon"
      src={image}
      alt="Contact Icon"
      onClick={handleClick}
    />
  );
};

ContactIcon.propTypes = {
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ContactIcon;
