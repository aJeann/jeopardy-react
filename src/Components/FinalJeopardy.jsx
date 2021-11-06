import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimerComp from './TimerComp';

const FinalJeopardy = () => {

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);

    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState)
    }

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <h1 style={{paddingTop: '40px', color: 'teal'}}>{qArray[0]}</h1>

            <Container style={{textAlign: 'center', height: '53rem'}}>
                <h1 style={{color: 'white', paddingTop: '25%', fontSize: '90px', cursor: 'help'}} onClick={HandleClick}>{questionAnswered ? qArray[1] : qArray[2]}</h1>
                <TimerComp toggle={activeState} time={60}/>

            </Container>
                            
        </div>
    )
}

export default FinalJeopardy
