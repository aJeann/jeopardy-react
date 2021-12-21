import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const JeopardyComp = () => {

    /* const [arrayOf, setArrayOf] = useState([
        {
            id: 0,
            name: "Maträttskändisar",
            questions: ["Denna svävande maträtt delar namn med en av huvudkaraktärerna i Twilight", "Lunchmåltid för de som är försiktiga med kalorierna för tankarna till en känd kejsare", "En klassisk svensk maträtt som delar namn med en av Sveriges mest kända författare", "Före detta landslagsback delar namn med denna klassiker som ofta finns med på julbordet", "Denna folkkära musiker kommer inte från Mora men han delar namn med detta frokustpålägg"],
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
            name: "Formula 1",
            questions: ["Detta stalls bilar brukar kallas silver arrows trots att bilen för närvarande har ett svart chassi", "Ett av de mest framgångsrika stallen de senaste åren som ägs av företaget bakom världens mest kända energidryck", "Michael Schumacher och Lewis Hamilton delar tillsammans på rekordet för antalet världsmästerskap med så här många troféer vardera", "Denna blixtsnabba förare var vid sin debut den yngsta föraren någonsin i formel 1 med sina 17 år och 166 dagar", "Detta stall vann det första F1-världsmäterskapet någonsin år 1958"],
            answers: ["Vilka är Mercedes?", "Vilka är Red Bull?", "Vad är 7?", "Vem är Max Verstappen?", "Vilka är vanwall?"]    
        },
        {
            id: 3,
            name: "Växter som inte bara är växter",
            questions: ["Kan man behöva göra om lufttrycket i däcken blir lågt", "På musiken i skolan fick man ibland testa detta instrument", "Lång på engelska, men ett träd på svenska", "Används för att kunna gå All-in i poker", "Handflata på engelska men utan nötter"],
            answers: ["Vad är Pumpa?", "Vad är Gurka?", "Vad är Brysselkål?", "Vad är Chips?", "Vad är Palm?"]    
        },
        {
            id: 4,
            name: "Kända arenor",
            questions: ["Sveriges största arena", "Detta är ingen bro även om namnet kan få en att tro det", "Denna vita koloss representerar solen i Sweden Solar System", "Arenan vars namn betyder nya fältet(på katalanska) är en av europas största", "Om du söker efter ett grönområde i Köpenhamn så kommer du mest troligt hit istället"],
            answers: ["Vilken är Friends arena?", "Vilken är Stamford Bridge?", "Vilken är Globen?", "Vilken är Nou camp", "Vilken är Parken?"]    
        },
    ]); */

    const [arrayOf, setArrayOf] = useState([
        {
            id: 0,
            name: "2020+1",
            questions: ['Låt & artist?',
             "Låt & artist?",
             "Låt & artist?",
              "Låt & artist?",
                "Låt & artist?"],
            answers: ["Molly Sanden(Will F), Jaja ding dong", "Klara Klingström, Behöver inte dig idag", "ABBA, I still have faith in you", "Victor Leksell & Miriam Bryant, Tystnar i luren", "Newkid, Du måste finnas"],
            typeOf: 'song',
            start: [15, 0, 120, 35, 0],
            end: [45, 30, 150, 65, 30],
            link: ['PlBUH8zMZng', 'JfICxQEHlos', 'hWGWFa3jznI', 'F5vK1bN8zmU', 'tTD6eHBBu5I']
        },
        {
            id: 1,
            name: "Svenska musikvideos?",
            questions: ["Låt och artist",
                    "Låt och artist",
                    "Låt och artist",
                    "Låt och artist",
                    "Låt och artist"],
            answers: ["Magnus Uggla, Kung för en dag", "ABBA, Waterloo", "Earth, Wind and Fire, September", "Laleh, Bara få va mig själv", "Veronica Maggio, Vi mot världen"],
            typeOf: 'video',
            start: [0, 0, 0, 0, 0],
            end: [60, 30, 40, 30, 30],
            link: ['7aOc2fL2pRM', 'Sj_9CiNkkn4', 'Gs069dndIYk', 'tzln6GO4yHY', 'pGUbe0bhOys']
        },
        {
            id: 2,
            name: "Valsen 10",
            questions: ["Låt och artist",
                        "Låt och artist",
                        "Låt och artist",
                        "Låt och artist",                        
                        "Låt och artist"
                        ],
            answers: ["Ed Sheeran, Shape of you", "Magnus Uggla, Trubaduren", "Kent, Dom andra", "Helene Sjöholm, Gabriellas sång", "U2, With or without you"],
            typeOf: 'song',
            start: [0, 0, 15, 0, 0],
            end: [30, 50, 60, 40, 50],
            link: ['JGwWNGJdvx8', 'kIbXAmGeovk', 'fWxUr_vDwwE', '_L-GDA7OOLM', 'EzeDqRhM09w']
        },
        {
            id: 3,
            name: "To be continued",
            questions: [
             "Avsluta versen",
              "Avsluta versen",
              "Avsluta versen",
               "Avsluta versen",
                "Avsluta versen"],
            answers: ["Ända från New Dehli till Moskva", "You can dance, you can jive", "Himlen så(är) oskyldigt blå", "Jag kommer inte hem ikväll", "Whether you're a brother or whether you're a mother"],
            typeOf: 'video',
            start: [50, 0, 40, 30, 5],
            end: [77, 21, 59, 69, 33],
            link: ['wOuKVk4yjW0', 'xFrGuyw1V8s', '_kSdTPigq60', 'b64sjtHF5Gw', 'fNFzfwLM72c']
        },
        {
            id: 4,
            name: "Världshits",
            questions: ["Låt och artist",
            "Låt och artist",
             "Låt och artist",
               "Låt och artist",
                "Låt och artist"],
            answers: ["Bonnie Tyler, Total eclipse of the heart", "Scorpions, Wind of change", "Beatles, Let it be", "Survivor, Eye of the tiger", "Dolly Parton, 9 to 5"],
            typeOf: 'song',
            start: [0, 0, 0, 0, 0],
            end: [30, 30, 16, 21, 10],
            link: ['lcOxhH8N3Bo', 'n4RjJKxsamQ', 'QDYfEBY9NM4', 'btPJPFnesV4', 'UbxUSsFXYo4']
        },
        {
            id: 5,
            name: 'Eurovision',
            questions: ["För vilket land tävlade denna låt",
                        "För vilket land tävlade denna låt",
                        "För vilket land tävlade denna låt",
                        "För vilket land tävlade denna låt",
                        "För vilket land tävlade denna låt"],
            answers: ["Sverige", "Island", "Italien", "Ukraina", "Nederländerna"],
            typeOf: 'video',
            start: [5, 83, 0, 0, 52],
            end: [40, 105, 30, 82],
            link: ['fELp2fPI8wI', '1zTbVRPh5EI', 'w1f6o1HQBvg', 'U7-dxzp6Jvs', '51u5fnyrGj4']
        }
    ]);



    const [round, setRound] = useState(sessionStorage.getItem("currentRound"));

    const tempArray = [];
    const numberOfRounds = sessionStorage.getItem("rounds");

    const history = useHistory();
    
    let storageArray = sessionStorage.getItem("stateArray");

    storageArray = JSON.parse(storageArray);

    console.log(storageArray);

    if(!storageArray.includes(true) && round === numberOfRounds){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Svensk historia", "Denna man som delar förnamn med en känd fransk konung var sveriges första statsminister", "Vem var Louis de Geer?"]))
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

  
    let currentId = 0;

    const valueArray = [200, 400, 600, 800, 1000];

    
    const printQuestion = (e) => {
        sessionStorage.setItem("valueOfQ", e.target.textContent)
        let tempNum = Number(e.target.value)
        storageArray[tempNum+1] = false;
        sessionStorage.setItem("stateArray", JSON.stringify(storageArray));
        let chosenQ = [];
        if(tempNum < 5){
            chosenQ = [arrayOf[0].name, arrayOf[0].questions[tempNum], arrayOf[0].answers[tempNum], arrayOf[0].typeOf, arrayOf[0].start[tempNum], arrayOf[0].end[tempNum], arrayOf[0].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 4 && tempNum < 10 ){
            tempNum = tempNum - 5;
            chosenQ = [arrayOf[1].name, arrayOf[1].questions[tempNum], arrayOf[1].answers[tempNum], arrayOf[1].typeOf, arrayOf[1].start[tempNum], arrayOf[1].end[tempNum], arrayOf[1].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 9 && tempNum < 15 ){
            tempNum = tempNum - 10;
            chosenQ = [arrayOf[2].name, arrayOf[2].questions[tempNum], arrayOf[2].answers[tempNum], arrayOf[2].typeOf, arrayOf[2].start[tempNum], arrayOf[2].end[tempNum], arrayOf[2].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));  
        }
        else if(tempNum > 14 && tempNum < 20 ){
            tempNum = tempNum - 15;
            chosenQ = [arrayOf[3].name, arrayOf[3].questions[tempNum], arrayOf[3].answers[tempNum], arrayOf[3].typeOf, arrayOf[3].start[tempNum], arrayOf[3].end[tempNum], arrayOf[3].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else if(tempNum > 19 && tempNum < 25){
            tempNum = tempNum - 20;
            chosenQ = [arrayOf[4].name, arrayOf[4].questions[tempNum], arrayOf[4].answers[tempNum], arrayOf[4].typeOf, arrayOf[4].start[tempNum], arrayOf[4].end[tempNum], arrayOf[4].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
        else{
            tempNum = tempNum - 25;
            chosenQ = [arrayOf[5].name, arrayOf[5].questions[tempNum], arrayOf[5].answers[tempNum], arrayOf[5].typeOf, arrayOf[5].start[tempNum], arrayOf[5].end[tempNum], arrayOf[5].link[tempNum]];
            sessionStorage.setItem("currentQuestion", JSON.stringify(chosenQ));
        }
     
        history.push('/question');   
    
    }

    return (
        <div style={{paddingBottom: '40px', backgroundColor: '#f5f5f5'}}>
                <Row style={{textAlign: 'center', fontWeight: 'bolder'}}>
                    {arrayOf.map(
                        arrayOf => 
                            <Col style={{marginLeft: '40px'}}>
                                <label style={{borderRadius: '10%', marginTop: "5px", width: '250px', height: '80px', fontSize: '18px', textAlign: 'center', paddingTop: '15px'}}>{(arrayOf.name).toUpperCase()}</label>
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '280px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[0] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '280px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[1] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '280px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[2] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '280px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[3] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '280px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[4] : ''}
                                    </Button>
                                </Row>
                                
                            
                            </Col>

                    )}      
                </Row>
        </div>
    )
}

export default JeopardyComp
