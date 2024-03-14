import { React, useState, useRef, useEffect } from "react";
import "./RandomActivity.css";

const RandomActivity = () => {
  let activity = [
    "jamming to Spotify 🎧",
    "hitting up the gym 🏋️‍♂️",
    "grinding Leetcode 📚",
    "cooking up a storm 🍳",
    "taking a stroll 🚶‍♂️",
    "playing Stardew Valley 🕹️",
    "binging Netflix 📺",
    "playing with my fish 🐟",
    "jamming on my piano 🎹",
    "finally getting sleep 😴",
    "testing new tools 🛠️",
    "learning Docker 🐳",
    "learning Javascript 📜",
    "exploring the city 🌆",
    "doing backflips 🤸‍♂️"
  ];

  let rand = Math.floor(Math.random() * activity.length);
  let used = [];
  const [randActivity, setRandActivity] = useState(activity[rand]);
  const clickRef = useRef();

  useEffect(() => {
    clickRef.current.classList.remove("activityClicked");
  }, []);

  const handleClick = () => {
    if (!clickRef.current.disabled) {
      clickRef.current.disabled = true;
      clickRef.current.classList.add("activityClicked");
      setTimeout(() => {
        let rand = randActivity;
        while (randActivity === rand && !used.includes(rand)) {
          rand = Math.floor(Math.random() * activity.length);
          used.push(rand);
        }
        if (used.length === activity.length) {
          used = [];
        }
        setRandActivity(activity[rand]);
        clickRef.current.classList.remove("activityClicked");
      }, 600);
    } else return;
    setTimeout(() => {
      clickRef.current.disabled = false;
    }, 1350);
  };

  return (
    <div
      ref={clickRef}
      className="activity activityClicked"
      onClick={handleClick}
    >
      I&apos;m probably {randActivity}
    </div>
  );
};
export default RandomActivity;
