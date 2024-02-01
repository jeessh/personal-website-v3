import { React, useRef } from "react";
import "./index.css";

const AboutMe = () => {
  const errRef = useRef();
  const errMsgRef = useRef();
  const errTextRef = useRef();

  setTimeout(() => {
    if(!errRef.current) return;
    const rect = errRef.current.getBoundingClientRect();
    if (rect.top - window.innerHeight / 2 < 0) {
      // element is past halfway point
      errTextRef.current.classList.add("error");
      errTextRef.current.classList.remove("regular");
      errMsgRef.current.style.opacity = 1;
    } else {
      errTextRef.current.classList.remove("error");
      errTextRef.current.classList.add("regular");
      errMsgRef.current.style.opacity = 0;
    }
  }, 50);

  return (
    <wrapper className="aboutContainer">
      <h2 className="aboutText">
        I&apos;m currently a 2nd year Computer Science Major at the University
        of Waterloo. <br />
        <br />
        When I&apos;m not busy being an&nbsp;	
        <span ref={errTextRef}>academic weapon</span>, I enjoy
        binging Netflix, gym sessions, and tending to my Stardew farm.
      </h2>
      <h2 ref={errRef} className="aboutText">
        However, what I cherish the <b>most</b>, is the feeling of finally triumphing
        over all the Error 300s, 400s, and 404s.
      </h2>
      <h2 ref={errMsgRef} className="aboutError">
        <b>Oops, still need to fix that one!</b>
      </h2>
    </wrapper>
  );
};

export default AboutMe;
