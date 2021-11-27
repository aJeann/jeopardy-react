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
            name: "Förvirrande svengelska",
            questions: ["Puss på engelska men något helt annat på svenska",
             "Allt har en början men kanske inte särskilt smart att säga motsatsen om man är i USA",
              "Are you good at cooking?",
                "Ibland kan man få en sån i registret men det betyder inte att man är en skitstövel",
               "Ibland kan det gå lite snabbt men man får vara försiktig med gasen"],
            answers: ["Vad är Kiss?", "Vad är Slut?", "Vad är Kock?", "Vad är Prick?", "Vad är Fart?"]      
        },
        {
            id: 1,
            name: "12 + 21 = 121",
            questions: ["Kallas dagen före juldagen... Sveriges största tidning",
                    "Mest sedda TV-serien på Netflix... TV-serie som utspelas i Westeros baserad på böcker skrivna av George R.R Martin",
                    "Känt gröntområde i New York... Park designad av Gaudi i Barcelona",
                    "Englands drottning ... Spelade Keira Knightley i Pirates of the Caribbean",
                    "Största fotbollsturneringen för klubblag... Extremt populärt datorspel utvecklat av Riot Games"],
            answers: ["Vad är Jul(afton)bladet?", "Vad är Squid (Game) of Thrones?", "Vad är Central (Park) Güell?", "Vad är Drottning (Elizabeth) Swann?", "Vad är Champions (League) of Legends?"]    
        },
        {
            id: 2,
            name: "Jul-igt",
            questions: ["Detta kvinnliga förnamn betyder mer eller mindre den ungdomliga och var ena halvan i ett drama skrivet av Shakespeare",
                        "Denna upfinning gjorde det helt klart lättare att få saker i rullning",
                        "Kanske inte den första månaden man kommer att tänka på när man säger 'jul'",                        
                        "Svensk butikskedja grundad av Lars-Göran Blank med 'inget kan stoppa dig nu' som slogan",
                        "En klinkbyggd båttyp med bred tvär"],
            answers: ["Vad är Julia?", "Vad är Hjulet?", "Vem är Juli?", "Vad är Jula?", "Vad är Julle?"]    
        },
        {
            id: 3,
            name: "Diverse rekord",
            questions: ["Denna video om en liten hajfamilj är den mest sedda på youtube",
             "Denna dessvärre avlidna svensk har mest spelningar på spotify",
              "Denna James Cameron-film är fortfarande den mest inkomstbringande filmen någonsin",
               "Den mest sålda boken någonsin trots att den kanske inte jätterolig att läsa",
                "Detta är världens dyraste aktie, främst på grund av att den aldrig genomgått en split"],
            answers: ["Vad är 'Baby Shark Dance'?", "Vem är Avicii?", "Vilken är Avatar?", "Vilken är bibeln?", "Vilken är Berkshire Hathaway?"]    
        },
        {
            id: 4,
            name: "Decemberdagar",
            questions: ["Detta brukar vi 'fira' den 24: December i Sverige",
             "Denna sydkoreanska artist mest känd för super-hiten 'Gangam Style' föddes den 31:a December",
              "Den 10:e December 2006 blev denna man första svensk i rymden",
               "Svensk kung som regerade 1611-1632 föddes den 9:e December och anses vara den som lade grunden för stormaktstiden",
                "1:a December 1991 lämnade detta land sovjetunionen"],
            answers: ["Vad är julafton?", "Vem är PSY?", "Vem är Christer Fuglesang?", "Vem är Gustav II Adolf?", "Vad är Ukraina?"]    
        },
    ]);


    const [round, setRound] = useState(sessionStorage.getItem("currentRound"));

    const tempArray = [];
    const numberOfRounds = sessionStorage.getItem("rounds");

    const history = useHistory();
    
    let storageArray = sessionStorage.getItem("stateArray");

    storageArray = JSON.parse(storageArray);

    console.log(storageArray);

    if(!storageArray.includes(true) && round === numberOfRounds){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Champions League", "Detta är det enda laget utanför PL, La liga, Serie A och Bundesliga som vunnit CL under 2000-talet", "Vilket är Porto?"]))
        history.push('/final-category');
    }

    if(!storageArray.includes(true) && round !== numberOfRounds){
        alert("Slut på första rundan!");
        for (let index = 0; index < 25; index++) {
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
        <div style={{paddingBottom: '40px', backgroundColor: '#f5f5f5'}}>
            <Container>
                <Row style={{textAlign: 'center', fontWeight: 'bolder'}}>
                    {arrayOf.map(
                        arrayOf => 
                            <Col>
                                <label style={{borderRadius: '10%', marginTop: "5px", width: '220px', height: '80px', fontSize: '18px', textAlign: 'center', paddingTop: '15px'}}>{(arrayOf.name).toUpperCase()}</label>
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                        {storageArray[currentId] === true ? valueArray[0] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[1] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[2] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[3] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button variant="info" value={currentId++} key={currentId} id={arrayOf.name} style={{width: '250px', height: '160px', marginTop: '10px', fontSize: '25px'}} onClick={printQuestion}>
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
