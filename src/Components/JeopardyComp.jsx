import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const JeopardyComp = () => {

    let currentId = 0;
    const valueArray = [200, 400, 600, 800, 1000];

    const [arrayOf, setArrayOf] = useState([]);

    const [round, setRound] = useState(sessionStorage.getItem("currentRound"));

    const tempArray = [];
    const numberOfRounds = sessionStorage.getItem("rounds");

    const history = useHistory();
    
    let storageArray = sessionStorage.getItem("stateArray");

    storageArray = JSON.parse(storageArray);

    useEffect(() => {
        if(round === "1"){
            setArrayOf([
            {
                id: 0,
                name: "Ding Dong",
                questions: ['Låt & Artist?',
                 "Låt & Artist?",
                 "Låt & Artist?",
                  "Låt & Artist?",
                    "Låt & Artist?"],
                answers: ["Molly Sanden(Will F), Jaja ding dong", "Ewa & Ewa, Rena rama ding dong", "Axel F, Crazy Frog", "Gunther, Ding dong song", "Lasse Berghagen, Ding dong"],
                typeOf: 'song',
                start: [15, 0, 120, 35, 0],
                end: [45, 30, 150, 65, 70],
                link: ['PlBUH8zMZng', 'lo1FO2rwPeI', 'k85mRPqvMbE', 'vzkp10zbgMA', 'BN41awBhmsE']
            },
            {
                id: 1,
                name: "Musikvideos på mute",
                questions: ["Låt och artist",
                        "Låt och artist",
                        "Låt och artist",
                        "Låt och artist",
                        "Låt och artist"],
                answers: ["Magnus Uggla, Kung för en dag", "Justin Bieber, Mistletoe", "Boney M, Rasputin", "Rihanna, Umbrella", "Daft Punk, Around the World"],
                typeOf: 'video',
                start: [0, 0, 0, 82, 0],
                end: [60, 50, 60, 102, 30],
                link: ['7aOc2fL2pRM', 'LUjn3RpkcKY', '16y1AkoZkmQ', 'CvBfHwUxHIk', 'K0HSD_i2DvA']
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
                answers: ["U2, Beautiful day", "Per Gessle, Här kommer alla känslorna", "Kent, Utan dina andetag", "Tommy Körberg, Stad i ljus", "Mando Diao, Strövtåg i hembygden"],
                typeOf: 'song',
                start: [0, 34, 15, 0, 0],
                end: [30, 55, 60, 40, 50],
                link: ['co6WMzDOh1o', 'DVHoDQQSSw0', 'tldhkGMysQ0', 'fZ9KSnHZT-s', '_YPqM-MTKCI']
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
                answers: ["No one to hear my prayer", "Mister cool!", "Finns inga känslor kvar", "Säg omelette", "Det gör ont men går ändå"],
                typeOf: 'video',
                start: [15, 0, 0, 30, 10],
                end: [62, 49, 23, 61, 56],
                link: ['XEjLoHdbVeE', '5EYoV_bDhSc', 'HInYeg78sMU', 'm-VigThmLWg', 'nqE8Um9t8CU']
            },
            {
                id: 4,
                name: "Världshits",
                questions: ["Låt och artist",
                "Låt och artist",
                 "Låt och artist",
                   "Låt och artist",
                    "Låt och artist"],
                answers: ["Toto, Africa", "Bryan Adams, Heaven", "UB40, Kingston town", "Van Morrison, Brown eyed girl", "Lasse Berghagen, Teddybjörnen Fredriksson"],
                typeOf: 'song',
                start: [0, 5, 0, 0, 0],
                end: [35, 35, 30, 21, 50],
                link: ['FTQbiNvZqaY', 's6TtwR2Dbjg', '0rJA9lnGcP4', 'UfmkgQRmmeE', 'GwMXz-tpWec']
            },
            {
                id: 5,
                name: 'Eurovision',
                questions: ["För vilket land tävlade denna låt",
                            "För vilket land tävlade denna låt",
                            "För vilket land tävlade denna låt",
                            "För vilket land tävlade denna låt",
                            "För vilket land tävlade denna låt"],
                answers: ["Sverige", "Österrike", "Danmark", "Ukraina", "Ryssland"],
                typeOf: 'video',
                start: [5, 10, 24, 0, 10],
                end: [40, 30, 54, 52],
                link: ['-qAkQRczjDI', 'ToqNa0rqUtY', 'k59E7T0H-Us', 'U7-dxzp6Jvs', 'L_dWvTCdDQ4']
            }
            ]);
        }
        else{
            setArrayOf([
                {
                    id: 0,
                    name: "Nostalgi",
                    questions: ["Låt & Artist",
                    "Låt & Artist",
                    "Låt & Artist",
                    "Låt & Artist",
                    "Låt & Artist"],
                    answers: ["Avicii, Levels", "Darude, Sandstorm", "Robbie Williams, Feel", "Jason Mraz, I'm Yours", "Owl City, Fireflies"],
                    typeOf: 'song',
                    start: [0, 0, 0, 0, 2],
                    end: [30, 30, 30, 30, 30],
                    link: ['_ovdm2yX4MA', 'y6120QOlsfU', 'iy4mXZN1Zzk', 'EkHTsc9PU2A', 'psuRGfAaju4']
                },
                {
                    id: 1,
                    name: "12 + 21 = 121",
                    questions: [
                     "Timme när man kan fynda på krogen ... Gammalt tidtagarur med sand",
                      "Eagle på ett par 3-hål ... Brittiskt pojkband som gjort bästa låten nånsin",
                      "Gör att man blir diskad på 100 meter ... Fotbollstränaren skickar ut dessa utvalda vid matchstart",
                      "Engelska ordet för ström ... Svensk matkedja med gulblå logga",
                       "Jacka som ofta har oranget innerfoder och bars av piloter ... Gammal TV-serie med Steve-O och Johnny Knoxville"],
                    answers: [
                     "Happy (Hour)Glass",
                      "Hole in (One) Direction",
                       "Tjuv(Start)elva",
                       "Engelska ordet för ström ... Svensk matkedja med gulblå logga",
                        "Bomber(Jacka)ss"],
                    typeOf: '',
                    start: [],
                    end: [],
                    link: []
                },
                {
                    id: 2,
                    name: "Huvudkaraktärer",
                    questions: ["Vad heter huvudkaraktären & skådespelaren?",
                     "Vad heter huvudkaraktären & skådespelaren?",
                      "Vad heter huvudkaraktären & skådespelaren?",
                       "Vad heter huvudkaraktären & skådespelaren?",
                        "Vad heter huvudkaraktären & skådespelaren?"],
                    answers: ["Marie Antoinette, Kirsten Dunst",
                     "Frodo Baggins, Elijah Wood",
                      "James Bond, Daniel Craig",
                       "Forrest Gump, Tom Hanks",
                        "Hannibal Lecter, Anthony Hopkins(Clarice, Jodie)"],
                    typeOf: 'video',
                    start: [0, 51, 50, 0, 40],
                    end: [20, 71, 70, 20, 65],
                    link: ['yBWyKRoh98U', 'HX4KKkSKZAY', 'l1pqswXNAgs', 'ONH-pxBMJu4', 'SoZ1e5kjjcs']   
                },
                {
                    id: 3,
                    name: "I want to break free",
                    questions: ["Låt & Tidigare band",
                     "Låt & Tidigare band",
                      "Låt & Tidigare band",
                       "Låt & Tidigare band(Wait for it)",
                        "Låt & Tidigare band"],
                    answers: ["Halo, Destiny's Child",
                     "Can't stop the feeling, *NSYNC",
                      "Pillowtalk, One Direction",
                       "Beat it, Jackson 5",
                        "Englishman in New York, The Police"],
                    typeOf: 'song',
                    start: [0, 0, 0, 22, 10],
                    end: [40, 30, 30, 75, 50],
                    link: ['bnVUHWCynig', 'ru0K8uYEZWw', 'C_3d6GntKbk', 'oRdxUFDoQe0', 'd27gTrPPAyk']  
                },
                {
                    id: 4,
                    name: "Så mycket bättre?",
                    questions: ["Vilka är artisterna?",
                     "Vilka är artisterna?",
                      "Vilka är artisterna?",
                       "Vilka är artisterna?",
                        "Vilka är artisterna?"],
                    answers: ["Miriam Bryant & Sven-Bertil Taube",
                     "Laleh & Timbaktu",
                      "Darin & Magnus Uggla",
                       "September & Petter",
                        "Miss Li & Pugh Rogefeldt"],
                    typeOf: 'song',
                    start: [10, 0, 0, 0, 0],
                    end: [60, 40, 50, 50, 50],
                    link: ['DbbCAFxNo6Q', 'Yf7Mhkg_EDY', 'GmoYMpck-_k', '0YuqbuTXORc', 'q1KmZDZFC8M']
                },
                {
                    id: 4,
                    name: "Seriemusik",
                    questions: ["Vad heter serien?",
                    "Vad heter serien?",
                    "Vad heter serien?",
                    "Vad heter serien?",
                    "Vad heter serien?"],
                    answers: ["Familjen Addams",
                     "Lilla huset på prärien",
                      "La casa de papel",
                       "Peaky Blinders",
                        "True detective"],
                    typeOf: 'video',
                    start: [16, 20, 0, 25, 5],
                    end: [45, 40, 30, 40, 55],
                    link: ['ZZ5IWRz78DY', '5Nr6yAJ-86s', 'Zx37mfDRpyk', 'VB0mn8Tgz2k', 'FxXRkqXfhYM']
                },
            ]);
        }   

    },[round])
    

    console.log(storageArray);

    if(!storageArray.includes(true) && round === numberOfRounds){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Svensk musikhistoria", "Vilken är den mest spelade svenska låten någonsin?", "Victor Leksell, Svag", "dSRZ_1ncRhQ"]))
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

    const styleBtn = {
        width: '260px', height: '130px', marginTop: '10px', fontSize: '25px'
    }

    return (
        <div style={{paddingBottom: '60px', backgroundColor: '#f5f5f5'}}>
                <Row style={{textAlign: 'center', fontWeight: 'bolder', marginLeft: '15px'}}>
                    {arrayOf.map(
                        arrayOf => 
                            <Col>
                                <label style={{borderRadius: '10%', marginTop: "5px", width: '260px', height: '60px', fontSize: '18px', textAlign: 'center', paddingTop: '15px'}}>{(arrayOf.name).toUpperCase()}</label>
                                <Row>
                                    <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[0] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[1] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[2] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
                                    {storageArray[currentId] === true ? valueArray[3] : ''}
                                    </Button>
                                </Row>
                                
                                <Row>
                                    <Button value={currentId++} key={currentId} id={arrayOf.name} style={styleBtn} onClick={printQuestion}>
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
