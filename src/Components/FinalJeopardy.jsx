import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Row, Col, Card, InputGroup, FormControl, Button, ButtonGroup } from 'react-bootstrap'
import { BsShopWindow } from 'react-icons/bs';
import TimerComp from './TimerComp';
import YouTube from 'react-youtube';

const FinalJeopardy = () => {

    const [p1Name, setP1Name] = useState(sessionStorage.getItem("p1Name"));
    const [p2Name, setP2Name] = useState(sessionStorage.getItem("p2Name"));
    const [p3Name, setP3Name] = useState(sessionStorage.getItem("p3Name"));
    const [p4Name, setP4Name] = useState(sessionStorage.getItem("p4Name"));
    const [p5Name, setP5Name] = useState(sessionStorage.getItem("p5Name"));
    const numOfPlayers = Number(sessionStorage.getItem("nmbrOfPlayers"));

    const [showButton, setShowButton] = useState(false);

    let p1; let p2; let p3; let p4;let p5;
    if(sessionStorage.getItem("p1Score")){
        p1 = sessionStorage.getItem("p1Score");
        p2 = sessionStorage.getItem("p2Score");
        p3 = sessionStorage.getItem("p3Score");
        p4 = sessionStorage.getItem("p4Score");
        p5 = sessionStorage.getItem("p5Score");
    }

    const [p1Score, setP1Score] = useState(Number(p1));
    const [p2Score, setP2Score] = useState(Number(p2));
    const [p3Score, setP3Score] = useState(Number(p3));
    const [p4Score, setP4Score] = useState(Number(p4));
    const [p5Score, setP5Score] = useState(Number(p5));

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);

    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [activeState, setActive] = useState(true);
    const [question, setQuestion] = useState(qArray[2]);

    const history = useHistory();

    

    const HandleClick = () => {
        
        setShowButton(!showButton)

        if(question === qArray[1]) setQuestion(qArray[2]);
        if(question === qArray[2]){
            setQuestionAnswered(!questionAnswered);
            setActive(!activeState)
            setQuestion(qArray[3]);
        } 
    }

    const addPoints = (e) => {
        let totalV;
        switch(e.target.id){
            case 'p1Correct': {
                setP1Score(p1Score + Number(sessionStorage.getItem("p1Bet")));
                let p1Bet = Number(sessionStorage.getItem("p1Bet"));
                totalV = p1Score + p1Bet;
                sessionStorage.setItem("p1Score", totalV);
                break;
            }
            case 'p2Correct': {
                setP2Score(p2Score + Number(sessionStorage.getItem("p2Bet")));
                let p2Bet = Number(sessionStorage.getItem("p2Bet"));
                totalV = p2Score + p2Bet;
                sessionStorage.setItem("p2Score", totalV);
                break;
            }
            case 'p3Correct': {
                setP3Score(p3Score + Number(sessionStorage.getItem("p3Bet")));
                let p3Bet = Number(sessionStorage.getItem("p3Bet"));
                totalV = p3Score + p3Bet;
                sessionStorage.setItem("p3Score", totalV);
                break;
            }
            case 'p4Correct': {
                setP4Score(p4Score + Number(sessionStorage.getItem("p4Bet")));
                let p4Bet = Number(sessionStorage.getItem("p4Bet"));
                totalV = p4Score + p4Bet;
                sessionStorage.setItem("p4Score", totalV);
                break;
            }
            case 'p5Correct': {
                setP5Score(p5Score + Number(sessionStorage.getItem("p5Bet")));
                let p5Bet = Number(sessionStorage.getItem("p5Bet"));
                totalV = p5Score + p5Bet;
                sessionStorage.setItem("p5Score", totalV);
                break;
            }
        }
    }

    const removePoints = (e) => {
        let totalV;
        switch(e.target.id){
            case 'p1Wrong': {
                setP1Score(p1Score - Number(sessionStorage.getItem("p1Bet")));
                let p1Bet = Number(sessionStorage.getItem("p1Bet"));
                totalV = p1Score - p1Bet;
                sessionStorage.setItem("p1Score", totalV);
                break;
            }
            case 'p2Wrong': {
                setP2Score(p2Score - Number(sessionStorage.getItem("p2Bet")));
                let p2Bet = Number(sessionStorage.getItem("p2Bet"));
                totalV = p2Score - p2Bet;
                sessionStorage.setItem("p2Score", totalV);
                break;
            }
            case 'p3Wrong': {
                setP3Score(p3Score - Number(sessionStorage.getItem("p3Bet")));
                let p3Bet = Number(sessionStorage.getItem("p3Bet"));
                totalV = p3Score - p3Bet;
                sessionStorage.setItem("p3Score", totalV);
                break;
            }
            case 'p4Wrong': {
                setP4Score(p4Score - Number(sessionStorage.getItem("p4Bet")));
                let p4Bet = Number(sessionStorage.getItem("p4Bet"));
                totalV = p4Score - p4Bet;
                sessionStorage.setItem("p4Score", totalV);
                break;
            }
            case 'p5Wrong': {
                setP5Score(p5Score - Number(sessionStorage.getItem("p5Bet")));
                let p5Bet = Number(sessionStorage.getItem("p5Bet"));
                totalV = p5Score - p5Bet;
                sessionStorage.setItem("p5Score", totalV);
                break;
            }
        }

    }

    const options = {
        height: 390,
        width: 640,
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center', paddingBottom: '300px'}}>
            <h1 style={{paddingTop: '40px', color: 'teal'}}>{qArray[0]}</h1>

            <Container style={{textAlign: 'center', height: '65rem'}}>
                <h1 style={{color: 'white', paddingTop: '15%', fontSize: '70px', cursor: 'help'}} onClick={HandleClick}>{question}</h1>


                {showButton && (
                    <YouTube videoId={qArray[4]} opts={options}></YouTube>
                )}

                {!showButton && (
                    <TimerComp toggle={activeState} time={80}/>
                )}
                

               {/*  <Row style={{marginTop: '200px'}}>
                    <Col>
                        <Card style={{ width: '13rem', backgroundColor: "green" }}>
                            <Card.Body>
                                <Card.Title
                                    id="p1"
                                    style={{cursor: 'not-allowed'}}
                                >
                                {p1Name}
                                </Card.Title>
                                <Card.Text
                                    id="p1"
                                    style={{cursor: 'cell'}}
                                >
                                {p1Score}
                                {'('+(sessionStorage.getItem("p1Bet"))+')'}
                                <Row>
                                <ButtonGroup>
                                    <Button variant="success" id="p1Correct" onClick={addPoints}>
                                        Rätt
                                    </Button>
                                    <Button variant="danger" id="p1Wrong" onClick={removePoints}>
                                        Fel
                                    </Button>
                                </ButtonGroup>           
                                </Row>     
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '13rem', backgroundColor: "yellow" }}>
                            <Card.Body>
                            <Card.Title
                                    id="p2"
                                    style={{cursor: 'not-allowed'}}
                                >
                                    {p2Name}                                                            
                                </Card.Title>
                                <Card.Text
                                    id="p2" 
                                    style={{cursor: 'cell'}}
                                >
                                {p2Score}
                                {'('+(sessionStorage.getItem("p2Bet"))+')'}
                                <Row>
                                <ButtonGroup>
                                <Button variant="success" id="p2Correct" onClick={addPoints}>
                                        Rätt
                                    </Button>
                                    <Button variant="danger" id="p2Wrong" onClick={removePoints}>
                                        Fel
                                    </Button>
                                </ButtonGroup>           
                                </Row>                                                                      
                                </Card.Text>                        
                            </Card.Body>
                        </Card>
                    </Col>    
                    {numOfPlayers > 2 && 
                        <Col>
                            <Card style={{ width: '13rem', backgroundColor: "orange" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p3"
                                        style={{cursor: 'not-allowed'}}
                                    >
                                    {p3Name}
                                    </Card.Title>
                                    
                                    <Card.Text
                                        id="p3" 
                                        style={{cursor: 'cell'}}
                                    > 
                                    {p3Score}
                                    {'('+(sessionStorage.getItem("p3Bet"))+')'}
                                    <Row>
                                    <ButtonGroup>
                                    <Button variant="success" id="p3Correct" onClick={addPoints}>
                                            Rätt
                                        </Button>
                                        <Button variant="danger" id="p3Wrong" onClick={removePoints}>
                                            Fel
                                        </Button>
                                    </ButtonGroup>           
                                    </Row>     
                                    </Card.Text>
                                </Card.Body>
                           </Card>
                        </Col>  
                    } 
                    {numOfPlayers > 3 && 
                        <Col>
                            <Card style={{ width: '13rem', backgroundColor: "teal" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p4"
                                        style={{cursor: 'not-allowed'}}
                                    >
                                        {p4Name}                                
                                    </Card.Title>
                                    <Card.Text
                                        id="p4" 
                                        style={{cursor: 'cell'}}
                                    >
                                    {p4Score}
                                    {'('+(sessionStorage.getItem("p4Bet"))+')'}
                                    <Row>
                                    <ButtonGroup>
                                        <Button variant="success" id="p4Correct" onClick={addPoints}>
                                            Rätt
                                        </Button>
                                        <Button variant="danger" id="p4Wrong" onClick={removePoints}>
                                            Fel
                                        </Button>
                                    </ButtonGroup>           
                                    </Row>              
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>   
                    } 
                    {numOfPlayers > 4 &&
                        <Col>
                            <Card style={{ width: '13rem', backgroundColor: "teal" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p5"
                                        style={{cursor: 'not-allowed'}}
                                    >
                                        {p5Name}                                
                                    </Card.Title>
                                    <Card.Text
                                        id="p5" 
                                        style={{cursor: 'cell'}}
                                    >
                                    {p5Score}
                                    {'('+(sessionStorage.getItem("p5Bet"))+')'}
                                    <Row>
                                    <ButtonGroup>
                                        <Button variant="success" id="p5Correct" onClick={addPoints}>
                                            Rätt
                                        </Button>
                                        <Button variant="danger" id="p5Wrong" onClick={removePoints}>
                                            Fel
                                        </Button>
                                    </ButtonGroup>           
                                    </Row>              
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col> 
                    }
                    
                </Row> */}

                {showButton && (
                    
                    <Button style={{marginTop: '20px'}} onClick={() => {history.push('/results')}}>
                    Visa resultat
                    </Button>
                )}
                

            </Container>
                            
        </div>
    )
}

export default FinalJeopardy
