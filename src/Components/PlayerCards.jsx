import React, { useState, useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Pling from '../misc/Pling.mp3'

const PlayerCards = () => {

    const [audio] = useState(new Audio(Pling))
    const [playing, setPlaying] = useState(false);

    console.log(playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
    [playing]
    );

    let p1;
    let p2;
    let p3;
    let p4;

    if(sessionStorage.getItem("p1Score")){
        p1 = sessionStorage.getItem("p1Score");
        p2 = sessionStorage.getItem("p2Score");
        p3 = sessionStorage.getItem("p3Score");
        p4 = sessionStorage.getItem("p4Score");
    }
    else{
        sessionStorage.setItem("p1Score", 0);
        sessionStorage.setItem("p2Score", 0);
        sessionStorage.setItem("p3Score", 0);
        sessionStorage.setItem("p4Score", 0);
    }

   


    const [p1Score, setP1Score] = useState(Number(p1));
    const [p2Score, setP2Score] = useState(Number(p2));
    const [p3Score, setP3Score] = useState(Number(p3));
    const [p4Score, setP4Score] = useState(Number(p4));
     
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
        }
    }

    return (
        <div>
            <Row>
            <Col>
                <Card style={{ width: '18rem', backgroundColor: "green" }}>
                    <Card.Body>
                        <Card.Title
                            id="p1"
                            onClick={removePoints}
                            style={{cursor: 'not-allowed'}}
                        >
                        Åke
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
            </Col>
            <Col>
                <Card style={{ width: '18rem', backgroundColor: "yellow" }}>
                    <Card.Body>
                    <Card.Title
                            id="p2"
                            onClick={removePoints}
                            style={{cursor: 'not-allowed'}}
                        >
                        Katarina
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
            </Col>    
            {/* <Col>
                <Card style={{ width: '18rem', backgroundColor: "orange" }}>
                    <Card.Body>
                    <Card.Title
                            id="p3"
                            onClick={removePoints}
                            style={{cursor: 'not-allowed'}}
                        >
                        Player 3
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
            </Col>    
            <Col>
                <Card style={{ width: '18rem', backgroundColor: "teal" }}>
                    <Card.Body>
                    <Card.Title
                            id="p4"
                            onClick={removePoints}
                            style={{cursor: 'not-allowed'}}
                        >
                        Player 4
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
            </Col>    */}   
            </Row>
        </div>
    )
}

export default PlayerCards
