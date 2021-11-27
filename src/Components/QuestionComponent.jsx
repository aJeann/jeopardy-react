import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimerComp from './TimerComp';

const QuestionComponent = () => {

    let qTimer = sessionStorage.getItem("seconds");
    qTimer = JSON.parse(qTimer);

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [seconds, setSeconds] = useState(qTimer);

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);
    

    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState)
    }

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <h1 style={{paddingTop: '40px', color: 'teal'}}>{qArray[0]} - {sessionStorage.getItem("valueOfQ")}</h1>

            <Container style={{textAlign: 'center', height: '70rem'}}>
                <h1 style={{color: 'white', paddingTop: '5%', fontSize: '80px', cursor: 'help'}} onClick={HandleClick}>{questionAnswered ? qArray[1] : qArray[2]}</h1>
                <TimerComp toggle={activeState} time={seconds}/>

            </Container>
                            
        </div>
    )
}

export default QuestionComponent
