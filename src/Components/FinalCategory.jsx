import React, { useState } from 'react'
import { Row, Col, Card, Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import { FaNimblr } from 'react-icons/fa';
import { useHistory } from 'react-router';
import PlayerCards from './PlayerCards';

const FinalCategory = () => {

    const [p1Name, setP1Name] = useState(sessionStorage.getItem("p1Name"));
    const [p2Name, setP2Name] = useState(sessionStorage.getItem("p2Name"));
    const [p3Name, setP3Name] = useState(sessionStorage.getItem("p3Name"));
    const [p4Name, setP4Name] = useState(sessionStorage.getItem("p4Name"));
    const [p5Name, setP5Name] = useState(sessionStorage.getItem("p5Name"));
    const [p1Bet, setP1Bet] = useState();
    const [p2Bet, setP2Bet] = useState();
    const [p3Bet, setP3Bet] = useState();
    const [p4Bet, setP4Bet] = useState();
    const [p5Bet, setP5Bet] = useState();
    const numOfPlayers = Number(sessionStorage.getItem("nmbrOfPlayers"));

    let p1;let p2;let p3;let p4;let p5;

    if(sessionStorage.getItem("p1Score")){
        p1 = sessionStorage.getItem("p1Score");
        p2 = sessionStorage.getItem("p2Score");
        p3 = sessionStorage.getItem("p3Score");
        p4 = sessionStorage.getItem("p4Score");
        p5 = sessionStorage.getItem("p5Score");
    }
    else{
        sessionStorage.setItem("p1Score", 0);
        sessionStorage.setItem("p2Score", 0);
        sessionStorage.setItem("p3Score", 0);
        sessionStorage.setItem("p4Score", 0);
        sessionStorage.setItem("p5Score", 0);
    }

    const [p1Score, setP1Score] = useState(Number(p1));
    const [p2Score, setP2Score] = useState(Number(p2));
    const [p3Score, setP3Score] = useState(Number(p3));
    const [p4Score, setP4Score] = useState(Number(p4));
    const [p5Score, setP5Score] = useState(Number(p5));

    let qArray = sessionStorage.getItem("currentQuestion");
    qArray = JSON.parse(qArray);

    const history = useHistory();

    const playerCards = PlayerCards;

    const [category, setCategory] = useState(qArray[1]);

    const goToFinalJeopardy = () => {
        history.push("/final-jeopardy");
    }

    const handleClick = (e) => {
        let valueOfQ = Number(sessionStorage.getItem("valueOfQ"));
        let totalV;
        switch(e.target.id){
            case 'p1': 
                {
                    setP1Score(p1Score + valueOfQ);
                    totalV = p1Score + valueOfQ;
                    sessionStorage.setItem("p1Score", totalV);
                    break;
                            }            
            case 'p2':
                {
                    setP2Score(p2Score + valueOfQ);
                    totalV = p2Score + valueOfQ;
                    sessionStorage.setItem("p2Score", totalV);
                    break;
                            }   
            case 'p3': 
                {
                    setP3Score(p3Score + valueOfQ);
                    totalV = p3Score + valueOfQ;
                    sessionStorage.setItem("p3Score", totalV);
                    break;
                            }   
            case 'p4':
                {
                    setP4Score(p4Score + valueOfQ);
                    totalV = p4Score + valueOfQ;
                    sessionStorage.setItem("p4Score", totalV);
                    break;
                            }   
            case 'p5':
                {
                    setP5Score(p5Score + valueOfQ);
                    totalV = p5Score + valueOfQ;
                    sessionStorage.setItem("p5Score", totalV);
                    break;
                            }
        }
    }

    const removePoints = (e) => {
        let valueOfQ = Number(sessionStorage.getItem("valueOfQ"));
        let totalV;
        switch(e.target.id){
            case 'p1': 
                {
                    setP1Score(p1Score - valueOfQ);
                    totalV = p1Score - valueOfQ;
                    sessionStorage.setItem("p1Score", totalV);
                    break;
                }            
            case 'p2':
                {
                    setP2Score(p2Score - valueOfQ);
                    totalV = p2Score - valueOfQ;
                    sessionStorage.setItem("p2Score", totalV);
                    break;
                }   
            case 'p3': 
                {
                    setP3Score(p3Score - valueOfQ);
                    totalV = p3Score - valueOfQ;
                    sessionStorage.setItem("p3Score", totalV);
                    break;
                }   
            case 'p4':
                {
                    setP4Score(p4Score - valueOfQ);
                    totalV = p4Score - valueOfQ;
                    sessionStorage.setItem("p4Score", totalV);
                    break;
                    }   
            case 'p5':
                {
                    setP5Score(p5Score - valueOfQ);
                    totalV = p5Score - valueOfQ;
                    sessionStorage.setItem("p5Score", totalV);
                    break;
                }   
        }
    }

    const updateBet = (e) => {
        switch(e.target.id){
            case 'p1Bet':
            {
                setP1Bet(e.target.value)
                console.log(p1Bet);
                break;
            }
            case 'p2Bet':
            {
                setP2Bet(e.target.value)
                console.log(p2Bet);
                break;
            }
            case 'p3Bet':
            {
                setP3Bet(e.target.value)
                console.log(p3Bet);
                break;
            }
            case 'p4Bet':
            {
                setP4Bet(e.target.value)
                console.log(p4Bet);
                break;
            }
            case 'p5Bet':
                {
                setP5Bet(e.target.value)
                console.log(p5Bet);
                break;
                }
        }
    }

    const saveBet = (e) => {
        switch(e.target.id){
            case 'p1Bet':
            {
                sessionStorage.setItem("p1Bet", p1Bet);
                break;
            }
            case 'p2Bet':
            {
                sessionStorage.setItem("p2Bet", p2Bet);
                break;
            }
            case 'p3Bet':
            {
                sessionStorage.setItem("p3Bet", p3Bet);
                break;
            }
            case 'p4Bet':
            {
                sessionStorage.setItem("p4Bet", p4Bet);
                break;
            }
            case 'p5Bet':
            {
                sessionStorage.setItem("p5Bet", p5Bet);
                break;
            }

        }
    }

    return (
        <div style={{backgroundColor: 'black', textAlign: 'center', paddingBottom: '300px'}}>
            <Container style={{textAlign: 'center'}}>
                <h1 style={{color: 'white', paddingTop: '15%', fontSize: '70px', cursor: 'help'}} >Dags för final Jeopardy</h1>
                <h2 style={{color: 'white', cursor: 'help'}}>KATEGORI: {category}</h2>
                <h2 style={{color: 'white', cursor: 'help'}}>Hur mycket vågar ni satsa?</h2>
                <Button variant="success" onClick={goToFinalJeopardy}>
                    Starta final jeopardy!
                </Button>

                <Row style={{marginTop: '200px'}}>
                    <Col>
                        <Card style={{ width: '12rem', backgroundColor: "green" }}>
                            <Card.Body>
                                <Card.Title
                                    id="p1"
                                    onClick={removePoints}
                                    style={{cursor: 'not-allowed'}}
                                >
                                {p1Name}
                                </Card.Title>
                                <Card.Text
                                    id="p1" 
                                    onClick={handleClick}
                                    style={{cursor: 'cell'}}
                                >
                                {sessionStorage.getItem("p1Score")}
                                <InputGroup className="mb-3">
                                        <FormControl
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        id="p1Bet"
                                        onChange={updateBet}
                                        />
                                        <Button variant="danger" id="p1Bet" onClick={saveBet} >
                                        Spara
                                        </Button>                                    
                                    </InputGroup>  
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '12rem', backgroundColor: "yellow" }}>
                            <Card.Body>
                            <Card.Title
                                    id="p2"
                                    onClick={removePoints}
                                    style={{cursor: 'not-allowed'}}
                                >
                                    {p2Name}                                                            
                                </Card.Title>
                                <Card.Text
                                    id="p2" 
                                    style={{cursor: 'cell'}}
                                >
                                     {sessionStorage.getItem("p2Score")}
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        aria-label="Example text with button addon"
                                        aria-describedby="basic-addon1"
                                        id="p2Bet"
                                        onChange={updateBet}
                                        />
                                        <Button variant="danger" id="p2Bet" onClick={saveBet}>
                                        Spara
                                        </Button>                                    
                                    </InputGroup>                                                                   
                                </Card.Text>                        
                            </Card.Body>
                        </Card>
                    </Col>    
                    {numOfPlayers > 2 &&
                        <Col>
                            <Card style={{ width: '12rem', backgroundColor: "orange" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p3"
                                        onClick={removePoints}
                                        style={{cursor: 'not-allowed'}}
                                    >
                                    {p3Name}
                                    </Card.Title>
                                    
                                    <Card.Text
                                        id="p3" 
                                        onClick={handleClick}
                                        style={{cursor: 'cell'}}
                                    > 
                                    {sessionStorage.getItem("p3Score")}
                                    <InputGroup className="mb-3">
                                            <FormControl
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            id="p3Bet"
                                            onChange={updateBet}
                                            />
                                            <Button variant="danger" id="p3Bet" onClick={saveBet}>
                                            Spara
                                            </Button>                                    
                                        </InputGroup> 
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>    
                    }
                    {numOfPlayers > 3 && 
                        <Col>
                            <Card style={{ width: '12rem', backgroundColor: "teal" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p4"
                                        onClick={removePoints}
                                        style={{cursor: 'not-allowed'}}
                                    >
                                        {p4Name}                                
                                    </Card.Title>
                                    <Card.Text
                                        id="p4" 
                                        onClick={handleClick}
                                        style={{cursor: 'cell'}}
                                    >
                                    {sessionStorage.getItem("p4Score")}
                                    <InputGroup className="mb-3">
                                            <FormControl
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            id="p4Bet"
                                            onChange={updateBet}
                                            />
                                            <Button variant="danger" id="p4Bet" onClick={saveBet}>
                                            Spara
                                            </Button>                                    
                                        </InputGroup>                            
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>   
                    }
                    {numOfPlayers > 4 &&
                        <Col>
                            <Card style={{ width: '12rem', backgroundColor: "pink" }}>
                                <Card.Body>
                                <Card.Title
                                        id="p5"
                                        onClick={removePoints}
                                        style={{cursor: 'not-allowed'}}
                                    >
                                        {p5Name}                                
                                    </Card.Title>
                                    <Card.Text
                                        id="p5" 
                                        onClick={handleClick}
                                        style={{cursor: 'cell'}}
                                    >
                                    {sessionStorage.getItem("p5Score")}
                                    <InputGroup className="mb-3">
                                            <FormControl
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            id="p5Bet"
                                            onChange={updateBet}
                                            />
                                            <Button variant="danger" id="p5Bet" onClick={saveBet}>
                                            Spara
                                            </Button>                                    
                                        </InputGroup>                            
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>  
                    }                    
                    
                    
                </Row>
            </Container>
                            
        </div>
    )
}

export default FinalCategory
