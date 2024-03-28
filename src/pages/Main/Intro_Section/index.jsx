import { React, useState, useEffect } from "react";
import Headshot from "../../../components/Headshot";
import ContactIcon from "../../../components/ContactIcon";
import "./Intro.css";

import linkedin from "../../../images/linkedin.png";
import github from "../../../images/github.png";
import spotify from "../../../images/spotify.png";
import mail from "../../../images/email.png";
import RandomActivity from "../../../components/RandomActivity";
import AboutMe from "../../../components/AboutMe";

const Intro = () => {
  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return (
    <section className="intro" id="intro_main">
      <div className="bigWrapper">
        <div className="introContainer">
          <Headshot />
          <div
            className="introText"
            style={
              !isMobile ? { transform: `translateY(${offset * 0.015}rem)` } : {}
            }
          >
            <RandomActivity />
            <h1 className="introTitle">Hey, I&apos;m Jesse!</h1>
            <div className="introDivider" />
            <h2 className="introSubtitle">Front-End Developer</h2>
            <h2 className="introSubtitle">UW CS &apos;27</h2>
          </div>
        </div>
        <div className="introContacts">
          <ContactIcon image={linkedin} url="https://www.linkedin.com/in/huang-jesse/" />
          <ContactIcon image={github} url="https://github.com/jeessh" />
          <ContactIcon image={spotify} url="https://open.spotify.com/user/kanaphos" />
          <ContactIcon image={mail} url="https://www.linkedin.com/feed/" />
        </div>
      </div>
      <AboutMe />
    </section>
  );
};

export default Intro;
