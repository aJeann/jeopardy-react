import React, { useState, useLayoutEffect } from 'react'
import { Container, Button, Col, Row } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const PaSparetComponent = () => {

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const [currentPic, setCurrentPic] = useState();
    const [index, setIndex] = useState(1);

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);

    let picArray = qArray[6];

    useLayoutEffect(() => {
        setCurrentPic(picArray[0])
    }, [])
    

    const history = useHistory();
    
    const HandleClick = () => {
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState);
        setShowButton(!showButton);
    }

    const showNext = () => {
        setCurrentPic(picArray[index]);
        setIndex(index + 1);
        console.log(index);
    }


    return (
        <div style={{backgroundColor: 'black', textAlign: 'center'}}>
            <h1 style={{paddingTop: '40px', color: 'blue'}}>{qArray[0]}</h1>

            <Container style={{textAlign: 'center', height: '80rem'}}>
                <h1 style={{color: 'white', paddingTop: '2%', fontSize: '60px', cursor: 'help', animation: 'ease-in'}} onClick={HandleClick}>{questionAnswered ? qArray[1] : qArray[2]}</h1>
                {qArray[3] === 'paSparet' && 
                <div style={{width: '1300px', height: '60px', position: 'absolute', backgroundColor: 'black', marginLeft: '20px'}}></div>}

    
                <iframe src={currentPic}
                width="1200" height="750"
                allowfullscreen=""
                    loading="lazy">
                </iframe>

                <Row>
                <Button onClick={showNext}>Nästa</Button>
                </Row>
                
            

                {showButton && (
                    <Button style={{marginTop: '20px'}} onClick={() => {history.push('/')}}>
                    Fortsätt
                    </Button>
                )}

            </Container>
                            
        </div>
    )
}

export default PaSparetComponent