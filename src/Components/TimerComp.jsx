import React, { useState, useEffect } from 'react';
import WrongSound from '../misc/Wrong-answer-sound-effect.mp3'
import { ProgressBar } from 'react-bootstrap';

const Timer = ({toggle, time} ) => {
  const [seconds, setSeconds] = useState(time);
  const [isActive, setIsActive] = useState(true);

  console.log(toggle);
  console.log(time);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
            if(seconds > 0 && toggle === true){
                console.log("Test");
                setSeconds(seconds => seconds - 1);
            }
            }, 1000);
            if(seconds === 0)
            setPlaying(!playing)
        } 
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const [audio] = useState(new Audio(WrongSound))
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );

  return (
    <div style={{marginTop: '100px'}}>
      <div className="time">
        <h1 style={{color: 'white'}}>{seconds}</h1>
        <ProgressBar animated variant={seconds > 10 ? "success" : "danger"} max={time} now={seconds}/>
      </div>      
    </div>
  );
};

export default Timer;
