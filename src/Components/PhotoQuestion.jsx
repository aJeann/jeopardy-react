import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import TimerComp from './TimerComp';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const PhotoQuestion = () => {

    let qTimer = sessionStorage.getItem("seconds");
    qTimer = JSON.parse(qTimer);

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [seconds, setSeconds] = useState(qTimer);
    const [height, setHeight] = useState(1);
    const [width, setWidth] = useState(1);
    const [autoplay, setAutoplay] = useState(1);
    const [showButton, setShowButton] = useState(false);

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);
   
    const history = useHistory();

    const images = [
        {
            id: 1,
            image: 'QuestionImages/vittne1a.png'
        }
    ]
    
    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState);
        setShowButton(!showButton);
    }

    useEffect(() => {
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
            <Container style={{textAlign: 'center', height: '70rem'}}>
            <img 
                src={questionAnswered ? qArray[1] : qArray[2]} 
                width={1000}
                onClick={HandleClick}
            />            
                {showButton && (
                    <Button style={{marginTop: '20px'}} onClick={() => {history.push('/')}}>
                    Fortsätt
                    </Button>
                )}

            </Container>
                            
        </div>
    )
}

export default PhotoQuestion
