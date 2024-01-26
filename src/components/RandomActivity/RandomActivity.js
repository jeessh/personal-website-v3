import {React, useState} from 'react'
import './index.css'

const RandomActivity = () => {
    let activity = ["listening to Spotify 🎧",
    "at the gym 🏋️‍♂️",
    "grinding Leetcode 📚",
    "cooking up a storm 🍳",
    "taking a stroll 🚶‍♂️",
    "playing Stardew Valley 🕹️",
    "binging Netflix 📺",
    "playing with my fish 🐟",
    "jamming on piano 🎹",
    "asleep 😴",
    "testing new tools 🛠️",
    "learning Docker 🐳",
    "learning Javascript 📜",
    "updating my resume 📄",
    "exploring the city 🌆",
    "doing backflips 🤸‍♂️",];

    let rand = Math.floor(Math.random() * activity.length);
    let used = [];
    const [randActivity, setRandActivity] = useState(activity[rand]);
    const [activityShow, setactivityShow] = useState(true);


    const handleClick = () => {
            document.getElementById("activity").classList.add("activityHide");
            document.getElementById("blocker").classList.add("activityBlock");

        setTimeout(() => {
            let rand = randActivity;
            while(randActivity === rand && !used.includes(rand)){
                rand = Math.floor(Math.random() * activity.length);
                used.push(rand);
            }
            if (used.length === activity.length){
                used = [];
            }
            setRandActivity(activity[rand]);
        }, 500);
        setTimeout(() => {
            document.getElementById("activity").classList.remove("activityHide");
        }, 700);
        setTimeout(() => {
            document.getElementById("blocker").classList.remove("activityBlock");
        }, 1000);
        }

  return (
        <div>
        <div id="blocker"/>
            <div id="activity" className='activity'
            onClick={handleClick} >
                I'm probably {randActivity}
            </div>
        </div>
  )
}
export default RandomActivity