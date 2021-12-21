import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimerComp from './TimerComp';
import YouTube from 'react-youtube';
import { useEffect } from 'react';

const QuestionComponent = () => {

    let qTimer = sessionStorage.getItem("seconds");
    qTimer = JSON.parse(qTimer);

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [seconds, setSeconds] = useState(qTimer);
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [autoplay, setAutoplay] = useState(1);

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);
    

    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState);
    }

    useEffect(() => {
        if(qArray[3] === 'song'){
            setHeight(10);
            setWidth(15);
            setAutoplay(0);
        }
        if(qArray[3] === 'video'){
            setHeight(650);
            setWidth(1040);
        }
        let num1 = Number(qArray[5]);
        let num2 = Number(qArray[4]);

        console.log(num2, num1);
        setSeconds(num1 - num2);
        console.log(seconds);
    }, []);

    const options = {
        height: height,
        width: width,
        playerVars: {
            autoplay: 1,
            start: qArray[4],
            end: qArray[5],
            mute: autoplay
        },
    };

    

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <h1 style={{paddingTop: '40px', color: 'teal'}}>{qArray[0]} - {sessionStorage.getItem("valueOfQ")}</h1>

            <Container style={{textAlign: 'center', height: '70rem'}}>
                <h1 style={{color: 'white', paddingTop: '5%', fontSize: '60px', cursor: 'help'}} onClick={HandleClick}>{questionAnswered ? qArray[1] : qArray[2]}</h1>
                {qArray[3] === 'video' && 
                <div style={{width: '1090px', height: '60px', position: 'absolute', backgroundColor: 'black', marginLeft: '100px'}}></div>}
                <YouTube videoId={qArray[6]} opts={options}></YouTube>
               
                <TimerComp toggle={activeState} time={seconds}/>

            </Container>
                            
        </div>
    )
}

export default QuestionComponent
