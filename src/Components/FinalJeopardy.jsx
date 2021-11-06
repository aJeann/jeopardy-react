import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import TimerComp from './TimerComp';

const FinalJeopardy = () => {
    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [question, setQuestion] = useState(qArray[1]);

    

    const HandleClick = () => {
        

        if(question === qArray[1]) setQuestion(qArray[2]);
        if(question === qArray[2]){
            setQuestionAnswered(!questionAnswered);
            setActive(!activeState)
            setQuestion(qArray[3]);
        } 
    }

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <h1 style={{paddingTop: '40px', color: 'teal'}}>{qArray[0]}</h1>

            <Container style={{textAlign: 'center', height: '40rem'}}>
                <h1 style={{color: 'white', paddingTop: '15%', fontSize: '70px', cursor: 'help'}} onClick={HandleClick}>{question}</h1>
                <TimerComp toggle={activeState} time={60}/>

            </Container>
                            
        </div>
    )
}

export default FinalJeopardy
