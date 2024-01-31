import { React, useState, useEffect } from "react";
import Headshot from "../../../components/Headshot/Headshot";
import ContactIcon from "../../../components/ContactIcon/ContactIcon";
import "./index.css";

import linkedin from "../../../images/linkedinIcon2.png";
import github from "../../../images/githubIcon2.png";
import spotify from "../../../images/spotifyIcon2.png";
import mail from "../../../images/mailIcon2.png";
import RandomActivity from "../../../components/RandomActivity/RandomActivity";
import AboutMe from "../../../components/AboutMe/AboutMe";

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
    console.log(isMobile);
  }, []);

  return (
    <section className="intro" id="intro_main">
      <wrapper className="introContainer">
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
      </wrapper>
      <wrapper className="introContacts">
        <ContactIcon image={linkedin} url="https://www.linkedin.com/feed/" />
        <ContactIcon image={github} url="https://www.linkedin.com/feed/" />
        <ContactIcon image={spotify} url="https://www.linkedin.com/feed/" />
        <ContactIcon image={mail} url="https://www.linkedin.com/feed/" />
      </wrapper>
      <AboutMe />
    </section>
  );
};

export default Intro;
