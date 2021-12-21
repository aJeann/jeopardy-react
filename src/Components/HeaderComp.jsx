import React, { useState, useEffect} from 'react'
import { Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import Sidebar from './SideBar';

const HeaderComponent = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        window.location.reload();
    }
    const handleShow = () => setShow(true);
    const [seconds, setSeconds] = useState(sessionStorage.getItem("seconds"));
    const [rounds, setRounds] = useState(sessionStorage.getItem("rounds"));
    const [currentRound, setCurrentRound] = useState();
    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();
    const [player3, setPlayer3] = useState();
    const [player4, setPlayer4] = useState();
    const [player5, setPlayer5] = useState();

    useEffect(() => {
        setCurrentRound(sessionStorage.getItem("currentRound"))
    })

    const stateArray = [];
    const tempArray = [];

    for (let index = 0; index < 30; index++) {
        if(index === 0) stateArray.push(false);
        stateArray.push(true);    
    }

    if(!sessionStorage.getItem("stateArray") || !sessionStorage.getItem("currentQuestion") || !sessionStorage.getItem("valueOfQ")){
        sessionStorage.setItem("stateArray", JSON.stringify(stateArray));
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Question", "Answer"]));
        sessionStorage.setItem("valueOfQ", 0);
        sessionStorage.setItem("seconds", 40)
        sessionStorage.setItem("rounds", 1);
        sessionStorage.setItem("currentRound", 1);
        sessionStorage.setItem("p1Name", "Player 1");
        sessionStorage.setItem("p2Name", "Player 2");
        sessionStorage.setItem("p3Name", "Player 3");
        sessionStorage.setItem("p4Name", "Player 4");
        sessionStorage.setItem("p5Name", "Player 5");
    }

    const resetGame = () => {
        for (let index = 0; index < 30; index++) {
            if(index === 0) tempArray.push(false)
            tempArray.push(true);    
            sessionStorage.setItem("stateArray", JSON.stringify(tempArray))
        }
        sessionStorage.setItem("p1Score", 0); sessionStorage.setItem("p2Score", 0); sessionStorage.setItem("p3Score", 0); sessionStorage.setItem("p4Score", 0);
        sessionStorage.setItem("p5Score", 0); 

        sessionStorage.setItem("currentRound", 1);
    }

    const updateValue = (e) => {
        setSeconds(e.target.value)
    }

    const saveTimer = () => {
        sessionStorage.setItem("seconds", seconds)
    }

    const updateRounds = (e) => {
        setRounds(e.target.value);
    }

    const saveRounds = () => {
        sessionStorage.setItem("rounds", rounds)
    }

    const updatePlayerNames = (e) => {
        if(e.target.id === 'p1')
        setPlayer1(e.target.value);
        if(e.target.id === 'p2')
        setPlayer2(e.target.value);
        if(e.target.id === 'p3')
        setPlayer3(e.target.value);
        if(e.target.id === 'p4')
        setPlayer4(e.target.value);
        if(e.target.id === 'p5')
        setPlayer5(e.target.value);
    }

    const savePlayerNames = (e) => {
        if(e.target.id === 'p1')
        sessionStorage.setItem("p1Name", player1);
        if(e.target.id === 'p2')
        sessionStorage.setItem("p2Name", player2);
        if(e.target.id === 'p3')
        sessionStorage.setItem("p3Name", player3);
        if(e.target.id === 'p4')
        sessionStorage.setItem("p4Name", player4);
        if(e.target.id === 'p5')
        sessionStorage.setItem("p5Name", player5);
           
    }

    return (
        <div>
            <header>
                <nav className="navbar navbar-fixed-top navbar-expand-md bg-dark">
                    <div className="container">
                        <ul className="mr-auto">
                            <li><a href="/" className="navbar-brand" style={{paddingTop: '20px'}}>Home</a></li>
                            <li>
                                <a href="/" className="navbar-brand" style={{paddingTop: '20px'}} 
                                onClick={resetGame}
                                >
                                Återställ spel
                                </a>
                            </li>
                            <li>
                                <a href='#' className="navbar-brand" style={{paddingTop: '20px'}}
                                onClick={handleShow}>
                                    Inställningar
                                </a>
                            </li>
                        </ul>
                        {/* <ul className="justify-content-end">
                            <li>
                                <h5 style={{paddingTop: '20px', color: 'white'}}>Nuvarande runda: {currentRound}/{sessionStorage.getItem("rounds")}</h5>
                            </li>
                        </ul> */}
                    </div>
                    <li>
                        <Sidebar />         
                    </li> 
                </nav>
                
            </header>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <InputGroup className="mb-3">
                    <Form.Label>Ändra timer:</Form.Label>
                    <FormControl
                    placeholder="30"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updateValue}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={saveTimer}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Antalet rundor: </Form.Label>
                    <FormControl
                    placeholder="Mellan 1-2"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updateRounds}
                    />
                    <Button variant="outline-secondary" id="button-addon2" onClick={saveRounds}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Spelare 1: </Form.Label>
                    <FormControl
                    placeholder="Byt namn"
                    id="p1"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updatePlayerNames}
                    />
                    <Button variant="outline-secondary" id="p1" onClick={savePlayerNames}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Spelare 2: </Form.Label>
                    <FormControl
                    placeholder="Byt namn"
                    id="p2"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updatePlayerNames}
                    />
                    <Button variant="outline-secondary" id="p2" onClick={savePlayerNames}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Spelare 3: </Form.Label>
                    <FormControl
                    placeholder="Byt namn"
                    id="p3"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updatePlayerNames}
                    />
                    <Button variant="outline-secondary" id="p3" onClick={savePlayerNames}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Spelare 4: </Form.Label>
                    <FormControl
                    placeholder="Byt namn"
                    id="p4"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updatePlayerNames}
                    />
                    <Button variant="outline-secondary" id="p4" onClick={savePlayerNames}>
                    Spara
                    </Button>
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Label>Spelare 5: </Form.Label>
                    <FormControl
                    placeholder="Byt namn"
                    id="p5"
                    aria-label="Uppdatera fråge-timer"
                    aria-describedby="basic-addon2"
                    onChange={updatePlayerNames}
                    />
                    <Button variant="outline-secondary" id="p5" onClick={savePlayerNames}>
                    Spara
                    </Button>
                </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default HeaderComponent
