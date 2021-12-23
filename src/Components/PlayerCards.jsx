
import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Pling from '../misc/Pling.mp3'

const PlayerCards = () => {

    const [audio] = useState(new Audio(Pling))
    const [playing, setPlaying] = useState(false);
    const [p1Name, setP1Name] = useState(sessionStorage.getItem("p1Name"));
    const [p2Name, setP2Name] = useState(sessionStorage.getItem("p2Name"));
    const [p3Name, setP3Name] = useState(sessionStorage.getItem("p3Name"));
    const [p4Name, setP4Name] = useState(sessionStorage.getItem("p4Name"));
    const [p5Name, setP5Name] = useState(sessionStorage.getItem("p5Name"));
    const [nmbrOfPlayers] = useState(sessionStorage.getItem("nmbrOfPlayers"));

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );

    let p1;let p2;let p3;let p4;let p5;

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

     
    const handleClick = (e) => {
        
        audio.play();
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

    return (
        <>
            <h3 style={{color: 'white'}}>Spelare: </h3>
            <Row style={{marginBottom: '20px'}}>            
                <Card style={{ width: '18rem', backgroundColor: "green" }}>
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
                        {p1Score}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row style={{marginBottom: '20px'}}>
                <Card style={{ width: '18rem', backgroundColor: "yellow" }}>
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
                            onClick={handleClick}
                            style={{cursor: 'cell'}}
                        >
                        {p2Score}
                        </Card.Text>                        
                    </Card.Body>
                </Card>
            </Row> 
            {nmbrOfPlayers > 2 && 
                <Row style={{marginBottom: '20px'}}>          
                    <Card style={{ width: '18rem', backgroundColor: "orange" }}>
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
                            {p3Score}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            }
            
            {nmbrOfPlayers > 3 && 
                <Row style={{marginBottom: '20px'}}>           
                    <Card style={{ width: '18rem', backgroundColor: "teal" }}>
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
                            {p4Score}                            
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </Row>
            }
            
            {nmbrOfPlayers > 4 &&
                <Row>           
                    <Card style={{ width: '18rem', backgroundColor: "white" }}>
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
                            {p5Score}                            
                            </Card.Text>
                        </Card.Body>
                    </Card>  
                </Row>
            }
            
        </>
    )
}

export default PlayerCards
