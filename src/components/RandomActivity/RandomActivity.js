import {React, useState, useRef, useEffect} from 'react'
import './index.css'

const RandomActivity = () => {
    let temp = [
        {"listening to Spotify 🎧": 30},
        {"at the gym 🏋️‍♂️": 10},
        {"grinding Leetcode 📚": 10},
        {"cooking up a storm 🍳": 10},
        {"taking a stroll 🚶‍♂️": 10},
        {"playing Stardew Valley 🕹️": 10},
        {"binging Netflix 📺": 10},
        {"playing with my fish 🐟": 10},
        {"jamming on piano 🎹": 10},
        {"asleep 😴": 10},
        {"testing new tools 🛠️": 10},
        {"learning Docker 🐳": 10},
        {"learning Javascript 📜": 10},
        {"updating my resume 📄": 10},
        {"exploring the city 🌆": 10},
        {"doing backflips 🤸‍♂️": 10}
    ]
    let activity = ["listening to Spotify 🎧",
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
    "updating my resume 📄",
    "exploring the city 🌆",
    "doing backflips 🤸‍♂️",];

    let rand = Math.floor(Math.random() * activity.length);
    let used = [];
    const [randActivity, setRandActivity] = useState(activity[rand]);
    const clickRef = useRef();

    useEffect(() => {
        clickRef.current.classList.remove('activityClicked');
      }, []);
      
    const handleClick = () => {
        console.log(clickRef.current.disabled);

        if (!clickRef.current.disabled){
            clickRef.current.disabled = true;
            clickRef.current.classList.add('activityClicked');
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
                clickRef.current.classList.remove('activityClicked');
            }, 600);
        } else return;
        setTimeout(() => {
            clickRef.current.disabled = false;
        }, 1350);
    }

  return (
    <div ref={clickRef} className='activity activityClicked'
    onClick={handleClick}>
        I'm probably {randActivity}
    </div>
  )
}
export default RandomActivity