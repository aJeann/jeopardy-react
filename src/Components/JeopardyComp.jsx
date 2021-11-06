import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const JeopardyComp = () => {

    const history = useHistory();
    
    let storageArray = sessionStorage.getItem("stateArray");

    storageArray = JSON.parse(storageArray);

    console.log(storageArray);

    if(!storageArray.includes(true)){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Champions League", "Detta är det enda laget utanför PL, La liga, Serie A och Bundesliga som vunnit CL under 2000-talet", "Vilket är Porto?"]))
        history.push('/final-jeopardy');
    }
  
    let currentId = 0;

    const valueArray = [100, 200, 300, 400, 500]

    const arrayOf = [
        {
            id: 0,
            name: "Maträttskändisar",
            questions: ["Denna svävande maträtt delar namn med en av huvudkaraktärerna i Twilight", "Lunchmåltid för de som är försiktiga med kalorierna som för tankarna till en känd kejsare", "En klassisk svensk maträtt som delar namn med en av Sveriges mest kända författare", "Före detta landslagsback delar namn med denna klassiker som ofta finns med på julbordet", "Denna folkkära musiker kommer inte från Mora men han delar namn med detta frokustpålägg"],
            answers: ["Vad är Flygande Jacob?", "Vad är Caesarsallad?", "Vad är Biff Rydberg?", "Vad är Janssons frestelse?", "Vad är Kalles Kaviar?"]      
        },
        {
            id: 1,
            name: "12 + 21 = 121",
            questions: ["Fotbollslag som brukar kallas Red devils... Internationell organisation som skapades för att främja samarbete", "Nuvarande kung... Längdskidsåkande konung", "Världens mest kända energidryck... hundras som finns i både engelsk och fransk variant", "Två under par på ett par 3-hål... Något som är unikt på engelska", "Används för att mata in data från användaren till datorn... Ett av världens största vinområden beläget i Frankrike"],
            answers: ["Vad är Manchester (United) Nations?", "Vad är Kung Carl (Gustaf) Vasa?", "Vad är Red (Bull) Dog?", "Vad är Hole in (One) of a kind?", "Vad är Tangent (Bord) Eaux?"]    
        },
        {
            id: 2,
            name: "Choklad",
            questions: ["Denna box med praliner delar namn med en mattflygande disneyprins", "Denna himlakropp ligger allra närmast hjärtat för många", "Bra att äta om man är go' o glad", "Denna välkända fyrdelade bar delar namn med både en nyfödd och en vuxen på engelska", "Denna vill man ha om man är nära havet och vill uttrycka sin förvåning på blattesvenska"],
            answers: ["Vad är Aladdin?", "Vad är Mars?", "Vad är kexchoklad?", "Vad är kitkat", "Vad är marabou?"]    
        },
        {
            id: 3,
            name: "Växter som används till annat",
            questions: ["Under en lång bilfärd krävs det att man fyller på tanken", "På musiken i skolan fick man ibland testa detta instrument", "Huvudstad i Europa som inte enbart är fattigmansmat längre", "Används för att kunna gå All-in i poker", "Handflata på engelska men utan nötter"],
            answers: ["Vad är Pumpa?", "Vad är Gurka?", "Vad är Brysselkål?", "Vad är Chips?", "Vad är Palm?"]    
        },
        {
            id: 4,
            name: "Kända arenor",
            questions: ["Sveriges största arena", "Denna arena är inte belägen på en bro även om man kan tro det", "Denna vita koloss representerar solen i Sweden Solar System", "Arenan vars namn betyder nya fältet är en av europas största", "Om du söker efter ett grönområde i Köpenhamn så kommer du mest troligt hit istället"],
            answers: ["Vilken är Friends arena?", "Vilken är Stamford Bridge?", "Vilken är Globen?", "Vilken är Nou camp", "Vilken är Parken?"]    
        },
    ] 

    const printQuestion = (e) => {
        sessionStorage.setItem("valueOfQ", e.target.textContent)
        let tempNum = Number(e.target.value)
        storageArray[tempNum+1] = false;
        sessionStorage.setItem("stateArray", JSON.stringify(storageArray));
        let chosenQ = [];
        if(tempNum < 5){
            chosenQ = [arrayOf[0].name, arrayOf[0].questions[tempNum], arrayOf[0].answers[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 4 && tempNum < 10 ){
            tempNum = tempNum - 5;
            chosenQ = [arrayOf[1].name, arrayOf[1].questions[tempNum], arrayOf[1].answers[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 9 && tempNum < 15 ){
            tempNum = tempNum - 10;
            chosenQ = [arrayOf[2].name, arrayOf[2].questions[tempNum], arrayOf[2].answers[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));  
        }
        else if(tempNum > 14 && tempNum < 20 ){
            tempNum = tempNum - 15;
            chosenQ = [arrayOf[3].name, arrayOf[3].questions[tempNum], arrayOf[3].answers[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else{
            tempNum = tempNum - 20;
            chosenQ = [arrayOf[4].name, arrayOf[4].questions[tempNum], arrayOf[4].answers[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
     
        history.push('/question');   
    
            
    }

    return (
        <div style={{paddingBottom: '15px', backgroundColor: '#f5f5f5'}}>
            <Container>
                <Row style={{textAlign: 'center', fontWeight: 'bolder'}}>
                    {arrayOf.map(
                        arrayOf => 
                            <Col>
                                <label style={{marginTop: "5px", backgroundColor: 'orange', width: '200px', height: '40px', fontSize: '13px'}}>{(arrayOf.name).toUpperCase()}</label>
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '120px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? valueArray[0] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '120px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[1] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '120px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[2] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '120px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[3] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '120px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[4] : ''}
                                    </Button>
                                </Row>
                                

                            </Col>

                    )}      
                </Row>
            </Container>   
        </div>
    )
}

export default JeopardyComp
