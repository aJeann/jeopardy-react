import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import TimerComp from './TimerComp';
import YouTube from 'react-youtube';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const QuestionComponent = () => {

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
    
    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState);
        setShowButton(!showButton);
    }

    useEffect(() => {
        if(qArray[3] === 'song'){
            setHeight(325);
            setWidth(520);
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
            <h1 style={{paddingTop: '40px', color: 'blue'}}>{qArray[0]}</h1>

            <Container style={{textAlign: 'center', height: '70rem'}}>
                <h1 style={{color: 'white', paddingTop: '5%', fontSize: '60px', cursor: 'help', animation: 'ease-in'}} onClick={HandleClick}>{questionAnswered ? qArray[1] : qArray[2]}</h1>
                {qArray[3] === 'video' && 
                <div style={{width: '1090px', height: '60px', position: 'absolute', backgroundColor: 'black', marginLeft: '100px'}}></div>}
                
                {qArray[3] === "video" && (<YouTube videoId={qArray[6]} opts={options}></YouTube>)}
                {qArray[3] === "song" && (
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black"}}>
                     <div style={{width: "600px", height: "500px", position: "relative", overflow: "-moz-hidden-unscrollable", backgroundColor:"black"}}>
                     {qArray[3] === "song" && (<div style={{position: "absolute", top: "0", height: "290px", width: "100%", zIndex: "999", backgroundColor: "black"}}></div>)}
                         <YouTube videoId={qArray[6]} opts={options}></YouTube>
                         
                     </div>                           
                 </div>
                )}               
                
                {showButton && (
                    <Button style={{marginTop: '20px'}} onClick={() => {history.push('/')}}>
                    Fortsätt
                    </Button>
                )}

            </Container>
                            
        </div>
    )
}

export default QuestionComponent
