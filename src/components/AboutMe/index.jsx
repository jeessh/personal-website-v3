import { React, useRef } from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const errRef = useRef();
  const errMsgRef = useRef();
  const errTextRef = useRef();

  setTimeout(() => {
    if (!errRef.current) return;
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
    <div className="aboutContainer">
      <h2 className="aboutText">
        I&apos;m a 2nd year Computer Science Major at the University of
        Waterloo. <br />
        <br />
        If I&apos;m ever able to find time between work sessions, I enjoy binging Netflix,<br></br>
        hitting the gym, and getting my <span ref={errTextRef}>8 hours of sleep</span>.
      </h2>
      <h2 ref={errRef} className="aboutText">
        However, what I truly cherish the <b>most</b>, is finally triumphing
        over all the Error 300s, 400s, and 404s.
      </h2>
      <h2 ref={errMsgRef} className="aboutError">
        <b>Oops, still need to fix that one!</b>
      </h2>
    </div>
  );
};

export default AboutMe;
