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
    "learning React ⚛️",
    "updating my resume 📄",
    "exploring the city 🌆",
    "doing backflips 🤸‍♂️",];

    let rand = Math.floor(Math.random() * activity.length);
    const [randActivity, setRandActivity] = useState(activity[rand]);
    const [activityShow, setactivityShow] = useState(true);

    const handleClick = () => {
        document.getElementById("activity").classList.add("activityHide");
        setTimeout(() => {
            let rand = randActivity;
            while(randActivity == rand){
                rand = Math.floor(Math.random() * activity.length);
            }
            setRandActivity(activity[rand]);
            console.log(activityShow)
        }, 1000);
        setTimeout(() => {
            document.getElementById("activity").classList.remove("activityHide");
        }, 2000);
    }
  return (
    <>
            <div id="activity" className='activity' onClick={handleClick}>
                I'm probably {randActivity}
            </div>
    </>
  )
}

export default RandomActivity