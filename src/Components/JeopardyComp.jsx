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
                name: "2021",
                questions: ['Låt & Artist?',
                            "Låt & Artist?",
                            "Låt & Artist?",
                            "Låt & Artist?",
                            "Låt & Artist?"],
                answers: ["ABBA, Dont shut me down",
                            "Victor Leksell, Eld & lågor",
                            "Agnes, Here comes the night",
                            "Adele, Easy On Me",
                            "Coldplay x BTS, My universe"],
                typeOf: 'song',
                start: [0, 0, 0, 100, 10],
                end: [60, 60, 60, 160, 70],
                link: ['hWGWFa3jznI', 'Caev-Vs6XCo', 'SwlZt3GLc1k', 'U3ASj1L6_sY', '3YqPKLZF_WU']
            },
            {
                id: 1,
                name: "Historiska händelser",
                questions: ["Vad och när?",
                            "Vad och när?",
                            "Vad och när?",
                            "Vad och när?",
                            "Vad och när?"],
                answers: ["Sverige vinner VM-brons, 1994",
                        "Månlandningen, 1969",
                        "Queen Elizabeth coronation, 1953",
                        "Chernobyl explosion, 1986",
                        "Titanic lämnar hamnen, 1912"],
                typeOf: 'video',
                start: [10, 2940, 340, 190,210],
                end: [40, 3030, 400, 270,280],
                link: ['CI5xbXZ4w34', 'S9HdPi9Ikhk','JJEUtX2_GwI', 'xulAgMNK5Jk', 'jkjjxioYIuE']
            },
            {
                id: 2,
                name: "Vem sjungs det om?",
                questions: ["Artist & Namn?",
                            "Artist & Namn?",
                            "Artist & Namn?",
                            "Artist & Namn?",                        
                            "Artist & Namn?"],
                answers: ["Sten & Stanley, Margareta",
                            "Lady Gaga, Alejandro",
                            "Micahel Jackson, Billie Jean",
                            "Dolly Parton, Jolene",
                            "ABBA, Fernando"],
                typeOf: 'song',
                start: [0, 33, 0, 27, 0],
                end: [40, 90, 60, 70, 80],
                link: ['TNDlkeBuPJU', 'VrY39ooSKBY', 'Zi_XLOBDo_Y', 'Ixrje2rXLMA', 'dQsjAbZDx-4']
            },
            {
                id: 3,
                name: "Svenska klassiker",
                questions: ["Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist"],
                answers: ["Ted Gärdestad, Oh vilken härlig dag",
                            "Lill-babs, Tuff brud i lyxförpackning",
                            "Håkan Hellström, Det kommer aldrig va över för mig",
                            "Marie Fredriksson, Tro",
                            "Kent, 999"],
                typeOf: 'song',
                start: [0, 0, 0, 0, 0],
                end: [60, 50, 60, 60, 60],
                link: ["mCLbU1NxBhA", 'ECCIF55U-gU', 'Upx_t4YR3X8', 'ARvSDkcm0k8', 'FkUx8KqAfb8']
            },
            {
                id: 4,
                name: "Var i världen?",
                questions: [
                    "Land & Plats?",
                    "Land & Plats?",
                    "Land & Plats?",
                    "Land & Plats?",
                    "Land & Plats?"],
                answers: ["Taj Mahal, Indien",
                            "Machu Picchu, Peru",
                            "The Strip, Las Vegas",
                            "Skagen, Danmark",
                            "Mekka, Saudi Arabia(The ABRAJ Al-Bait)"
                            ],
                typeOf: 'video',
                start: [133, 70, 0, 0, 0],
                end: [180, 120, 40, 40, 40],
                link: ["DV_r9tw8uo8", 'lNIEZ61PyG0', 'K-fb-HNNcSY', 'fGw9Rhbz2tA', 'LeD_UuNgLdM']
            },
            {
                id: 5,
                name: 'Unika röster',
                questions: ["Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist",
                            "Låt & Artist"],
                answers: ["Leonard Cohen, Hallelujah",
                            "Louis Armstrong, What a wonderful world",
                            "Snoop Dogg, California Gurls",
                            "Nina Simone, Feeling good",
                            "Childish Gambino, Redbone"],
                typeOf: 'song',
                start: [0,0,146,2,10],
                end: [60,60,200,100,60],
                link: ['ttEMYvpoR-k', 'A3yCcXgbKrE', 'F57P9C4SAW4', 'oHRNrgDIJfo', 'Kp7eSUU9oy8']
            }
            ]);
        }
        else{
            setArrayOf([
                {
                    id: 0,
                    name: "6070809000",
                    questions: ["Låt & Artist",
                                "Låt & Artist",
                                "Låt & Artist",
                                "Låt & Artist",
                                "Låt & Artist"],
                    answers: ['Sympathy for the devil, The rolling stones',
                                'Go your own way, Fleetwood Mac',
                                'Purple Rain, Prince',
                                'Bitter Sweet Symphony, The Verve',
                                'Toxic, Britney Spears'],
                    typeOf: 'song',
                    start: [0, 0, 10, 5, 0],
                    end: [60, 60, 70, 65, 60],
                    link: ['GgnClrx8N2k', '6ul-cZyuYq4', 'edDiY323768', '1lyu1KKwC74', 'LOZuxwVk7TU']
                },
                {
                    id: 1,
                    name: "12+21=1(2)1",
                    questions: ['Torn i Paris som inte är fel ... Bro med två torn i London',
                                'Naturligt tal som är större än 1 och inte har några andra positiva delare än 1 och talet själv ... Sveriges riksdags främste representant',
                                'Pandans favorit på kinarestaurangen ... När det inträffar har februari 29 dagar',
                                'Smeknamn på larm som spelas en gång i kvartalet klockan 15.00 ... Luuks kompanjon i på spåret',
                                'Sjunger vackert i religiös byggnad ... Krävs för att få sitta i förarsätet när en bil är i rullning'],
                    answers: ['Eiffel (Tower) Bridge',
                                'Prim(Tal)Mannen',
                                'Bambu(Skott)År',
                                'Hesa (Fredrik) Lindström',
                                'Kyrko(Kör)Kort'],
                    typeOf: '',
                    start: [],
                    end: [],
                    link: []
                },
                {
                    id: 2,
                    name: "Jullåtar",
                    questions: ['Låt & Artist',
                                'Låt & Artist',
                                'Låt & Artist',
                                'Låt & Artist',
                                'Låt & Artist'],
                    answers: ['Triad, Tänd ett ljus',
                                'Mariah Carey, All I want for xmas is you',
                                'Wham!, Last christmas',
                                'Edward Blom, Nu lagar vi julen',
                                'Frank Sinatra, Let it snow'
                            ],
                    typeOf: 'video',
                    start: [0, 0, 0, 0, 0],
                    end: [60, 60, 60, 60, 60],
                    link: ['w-Fw484lBeA','aAkMkVFwAoo','E8gmARGvPlI', 'dUMXLMuYhEo','_X-7b_Fbt3o']   
                },
                {
                    id: 3,
                    name: "Moviestar",
                    questions: ["Vilken film & vem spelade huvudkaraktären?",
                     "Vilken film & vem spelade huvudkaraktären?",
                      "Vilken film & vem spelade huvudkaraktären?",
                       "Vilken film & vem spelade huvudkaraktären?",
                        "Vilken film & vem spelade huvudkaraktären?"],
                    answers: ['Mean girls, Lindsey Lohan',
                                'Gone with the wind, Vivien Leigh(Scarlett O`Hara)',
                                'Braveheart, Mel Gibson',
                                'Casablanca, Humphrey Bogart(Ingrid)',
                                'American Psycho, Christian Bale'                                             
                                ],
                    typeOf: 'video',
                    start: [0, 0, 120, 10, 10],
                    end: [30, 30, 170, 70, 80],
                    link: ['re5veV2F7eY','GQ5ICXMC4xY','hIvRkjOd1f8','rEWaqUVac3M', 'Ruw9fsh3PNY']  
                },
                {
                    id: 4,
                    name: "To be continued",
                    questions: ["Sjung vidare",
                                "Sjung vidare",
                                "Sjung vidare",
                                "Sjung vidare",
                                "Sjung vidare"],
                    answers: ['Med en glass i min mun',
                                'Och alla gränser har för evigt suddats ut',
                                'Jag har spelat varenda dugg på tärning',
                                'Ingen annan som kan göra det du gör med mig',
                                'Jag sparkar backspeglar på vägen hem'],
                    typeOf: 'video',
                    start: [0, 0, 0, 0, 33],
                    end: [19, 31, 31, 36, 74],
                    link: ['TU3ivk-s-RM', 'fZ9KSnHZT-s', '6OQAqIbIRGA', 'pGUbe0bhOys', '9RgmIgb_Vy8']
                },
                {
                    id: 4,
                    name: "Seriemusik",
                    questions: ["Vad heter serien?",
                                "Vad heter serien?",
                                "Vad heter serien?",
                                "Vad heter serien?",
                                "Vad heter serien?"],
                    answers: ['Rederiet',
                                'Fem myror är fler än fyra elefanter',
                                'Seinfeld',
                                'Game of thrones',
                                'Suits'],
                    typeOf: 'song',
                    start: [0, 0, 0, 0, 0],
                    end: [30, 40, 30, 30, 30],
                    link: ['zTfKcRcibyg', 'O7lZFiYgkfE', '_V2sBURgUBI', 'TZE9gVF1QbA', '2Q18TnxZxLI']
                },
            ]);
        }   

    },[round])
    

    console.log(storageArray);

    if(!storageArray.includes(true) && round === numberOfRounds){
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Julens historia", "Vilket århundrade började man fira jul i Sverige?", "1100-talet(tog fart på 1800-talet)", "joWd2P-6keM"]))
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
                <Row style={{fontWeight: 'bolder', marginLeft: '30px'}}>
                    {arrayOf.map(
                        arrayOf => 
                            <Col>
                                <label style={{borderRadius: '10%', marginTop: "5px", width: '260px', height: '60px', fontSize: '18px', paddingTop: '15px'}}>{(arrayOf.name).toUpperCase()}</label>
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
