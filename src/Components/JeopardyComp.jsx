import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { questions } from './Questions/Questions';

const JeopardyComp = () => {

    let currentId = 0;
    const valueArray = [200, 200, 200, 200, 200];

    const [arrayOf, setArrayOf] = useState([]);
    const [boardId, setBoardId] = useState(sessionStorage.getItem("boardId"));

    const [round, setRound] = useState(sessionStorage.getItem("currentRound"));

    const tempArray = [];
    const numberOfRounds = sessionStorage.getItem("rounds");
    const finalJeopardy = sessionStorage.getItem("finalJeopardy");

    const history = useHistory();
    
    let storageArray = sessionStorage.getItem("stateArray");

    storageArray = JSON.parse(storageArray);

    useEffect(() => {
        if(round === "1"){
            questions.map(questions => {
                if(questions[0].questionID == sessionStorage.getItem("boardId")){
                    setArrayOf(questions);
                }
            })
        }  
    },[round])

    if(!storageArray.includes(true) && round === numberOfRounds && finalJeopardy === "false") {
        history.push('/results');
    }

    if(!storageArray.includes(true) && round === numberOfRounds && finalJeopardy === "true"){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Guesstimate", "Antalet tangenter på ett piano + 100 kilo i pounds + En fullvuxen saltvattenskrokodil + Tyngsta människan någonsin + En tändsticka + En kubikmeter snö", "2022", "joWd2P-6keM"]))
        history.push('/final-category');
    }

    if(!storageArray.includes(true) && round !== numberOfRounds){
        alert("Slut på första rundan!");
        for (let index = 0; index < 30; index++) {
            if(index === 0) tempArray.push(false)
            tempArray.push(true);    
            sessionStorage.setItem("stateArray", JSON.stringify(tempArray))
        }
        sessionStorage.setItem("currentRound", 2);
        setRound(2);
        window.location.reload();
    };
    
    const printQuestion = (e) => {
        const num = Number(e.target.innerText);
        if(typeof num === "number" && num > 0) sessionStorage.setItem("valueOfQ", Number(e.target.innerText))
        let tempNum = Number(e.target.value);
        console.log(tempNum);
        storageArray[tempNum+1] = false;
        sessionStorage.setItem("stateArray", JSON.stringify(storageArray));
        let chosenQ = [];
        if(tempNum < 5){
            chosenQ = [arrayOf[1].name, arrayOf[1].questions[tempNum], arrayOf[1].answers[tempNum], arrayOf[1].typeOf, arrayOf[1].start[tempNum], arrayOf[1].end[tempNum], arrayOf[1].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
            localStorage.setItem("photoCarouselData", arrayOf[1]);
        }
        else if(tempNum > 4 && tempNum < 10 ){
            tempNum = tempNum - 5;
            chosenQ = [arrayOf[2].name, arrayOf[2].questions[tempNum], arrayOf[2].answers[tempNum], arrayOf[2].typeOf, arrayOf[2].start[tempNum], arrayOf[2].end[tempNum], arrayOf[2].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 9 && tempNum < 15 ){
            tempNum = tempNum - 10;
            chosenQ = [arrayOf[3].name, arrayOf[3].questions[tempNum], arrayOf[3].answers[tempNum], arrayOf[3].typeOf, arrayOf[3].start[tempNum], arrayOf[3].end[tempNum], arrayOf[3].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));  
            localStorage.setItem("photoCarouselData", arrayOf[3]);
        }
        else if(tempNum > 14 && tempNum < 20 ){
            tempNum = tempNum - 15;
            chosenQ = [arrayOf[4].name, arrayOf[4].questions[tempNum], arrayOf[4].answers[tempNum], arrayOf[4].typeOf, arrayOf[4].start[tempNum], arrayOf[4].end[tempNum], arrayOf[4].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
            localStorage.setItem("photoCarouselData", arrayOf[4]);
        }
        else if(tempNum > 19 && tempNum < 25){
            tempNum = tempNum - 20;
            chosenQ = [arrayOf[5].name, arrayOf[5].questions[tempNum], arrayOf[5].answers[tempNum], arrayOf[5].typeOf, arrayOf[5].start[tempNum], arrayOf[5].end[tempNum], arrayOf[5].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
            localStorage.setItem("photoCarouselData", arrayOf[5]);
        }
        else{
            tempNum = tempNum - 25;
            chosenQ = [arrayOf[6].name, arrayOf[6].questions[tempNum], arrayOf[6].answers[tempNum], arrayOf[6].typeOf, arrayOf[6].start[tempNum], arrayOf[6].end[tempNum], arrayOf[6].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
            localStorage.setItem("photoCarouselData", arrayOf[6]);
        }

        console.log(chosenQ[3]);

        if(chosenQ[3] === "paSparet") history.push('/pa-sparet');
        else if(chosenQ[3] === "photoReveal") history.push('/photo-reveal');
        else if(chosenQ[3] === "photoCarousel") history.push('/photo-carousel');
        
        else if(chosenQ[3] === "photoQuestion") history.push('/photo-question');
        else {
            history.push('/question');
        }
    }

    const styleBtn = {
        width: '260px', height: '130px', marginTop: '10px', fontSize: '25px', backgroundColor: 'blue', border: '1px solid black'
    }

    return (
        <>
            {!boardId && (
                <div style={{minHeight: "200px", textAlign: "center", paddingTop: "100px"}}>
                    <h2>Starta spelet genom att välja <i><b>id</b></i> från listan "Välj spelplan" uppe till höger</h2>
                </div>
            )}
            <div style={{paddingBottom: '60px', backgroundColor: '#f5f5f5'}}>
                    <Row style={{fontWeight: 'bolder', marginLeft: '30px'}}>
                        {arrayOf.slice(1).map(
                            arrayOf => 
                                <Col>
                                    <label style={{borderRadius: '10%', marginTop: "5px", width: '260px', height: '60px', fontSize: '18px', paddingTop: '15px'}}>{(arrayOf.name).toUpperCase()}</label>
                                    <Row>
                                        <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? '100' : ''}
                                        </Button>
                                    </Row>
                                    
                                    <Row>
                                        <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? '200' : ''}
                                        </Button>
                                    </Row>
                                    
                                    <Row>
                                        <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? '300' : ''}
                                        </Button>
                                    </Row>
                                    
                                    <Row>
                                        <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? '400' : ''}
                                        </Button>
                                    </Row>
                                    
                                    <Row>
                                        <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? '500' : ''}
                                        </Button>
                                    </Row>
                                </Col>
                        )}      
                    </Row>
                </div>
        </>
    )
}

export default JeopardyComp
