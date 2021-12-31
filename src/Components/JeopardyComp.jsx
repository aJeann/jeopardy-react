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
                name: "På G",
                questions: ["Vart är vi på väg?",
                "Vart är vi på väg?",
                "Vart är vi på väg?",
                "Vart är vi på väg?",
                "Vart är vi på väg?"
                ],
                answers: ["Stockholm",
                            "Madrid",
                            "Dallas",
                            "Amsterdam",
                            "Sälen"],
                typeOf: 'paSparet',
                start: [],
                end: [],
                link: {
                    0: ["https://www.google.com/maps/embed?pb=!4v1640970440800!6m8!1m7!1sJSq2RoHFD0bTy7UlvJAb-w!2m2!1d59.30692333704874!2d15.31001307771839!3f271.9986448935144!4f8.50519214400019!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640970552910!6m8!1m7!1s_TXGsrhF0sGATqoI24NtbA!2m2!1d59.52119939967978!2d15.97555249652842!3f55.24816527150439!4f4.547483467508712!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640970644603!6m8!1m7!1srUwOzeGWnb4u6PMnix9GYQ!2m2!1d59.58395088123634!2d16.37013381911159!3f82.93442965270094!4f-1.9816575018852234!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640970767850!6m8!1m7!1sLmlQ1su7oYA_DIZ_g9MLzQ!2m2!1d59.6531166642116!2d17.09719370194712!3f123.50645481896129!4f-2.5758172829723094!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640970875636!6m8!1m7!1s_S1LedanRbn5E2QyQJTiAQ!2m2!1d59.32678950748597!2d18.04343708703602!3f112.50464633263559!4f4.766724140956001!5f0.7820865974627469"
                    ],
                    1: ["https://www.google.com/maps/embed?pb=!4v1640983756093!6m8!1m7!1sWOKIx-zvJAsq7XB4bXAylw!2m2!1d40.74920692122418!2d-4.296421577234045!3f75.29392218281481!4f-13.147378271604069!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640983830144!6m8!1m7!1sxoHLEhczqZbOzmOUY-q1Dw!2m2!1d40.61531548319914!2d-3.981600425403661!3f155.7307709241198!4f7.120492040269141!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640983910054!6m8!1m7!1shGIZa3AV5UfvglgOQzW8tA!2m2!1d40.64913646698086!2d-4.048440930664491!3f129.29999229498998!4f1.7943440769620622!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640983952746!6m8!1m7!1sPL4E17I5sgc_-Ycd0qNSRQ!2m2!1d40.47469802646358!2d-3.832759897883637!3f108.86256050851257!4f1.788808926858593!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984012166!6m8!1m7!1srrONl8lBmiFBFSGItax4ow!2m2!1d40.45181835351001!2d-3.686146619115946!3f329.96555917548!4f8.685719608235132!5f0.7820865974627469"                
                    ],
                    2: ["https://www.google.com/maps/embed?pb=!4v1640984086619!6m8!1m7!1s1KnNHr-7CpYUULhXPaucVw!2m2!1d32.68456676621427!2d-96.2096682134667!3f106.91111540232265!4f3.4274785323289763!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984124250!6m8!1m7!1sSysGlAOyZVNQwa7jEfSxIQ!2m2!1d32.70499556931167!2d-96.27696299647359!3f154.24002878175787!4f2.063659420584969!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984190965!6m8!1m7!1sQ5mtu-VEjsCF1UtaIaOByg!2m2!1d32.70218752921064!2d-96.54629930638218!3f287.8117025937895!4f9.879121130645316!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984283902!6m8!1m7!1ssdXfVFaDRiKlpeP4EKYFGA!2m2!1d32.78211912730698!2d-96.79590668543271!3f260.98319016984163!4f19.385554509285924!5f0.7820865974627469"
                    ],
                    3: ["https://www.google.com/maps/embed?pb=!4v1640984357154!6m8!1m7!1swL6CjmCqfZzMWSkKoNeqQA!2m2!1d52.0487208466444!2d4.360121018263029!3f41.26579051644642!4f2.3057038032248727!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984405817!6m8!1m7!1sByzHcRaa9tIEyf4_fAwOZg!2m2!1d52.09416630247582!2d4.431446277100334!3f222.87813053533864!4f-6.393598664516944!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984449367!6m8!1m7!1sUjSrsPhFjTqpbSJo0heFyA!2m2!1d52.24498119635294!2d4.66515378790513!3f44.665150673865796!4f1.946108354650903!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984484136!6m8!1m7!1sszRSiSWsZ_lqWntGxklzJw!2m2!1d52.28676940879963!2d4.724884380825837!3f47.272066950943966!4f-8.630229238678481!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984547318!6m8!1m7!1scZfuReXaUxnexTyyZ4Bi5w!2m2!1d52.34897585456875!2d4.851372531445353!3f19.603862072783233!4f5.014691346987021!5f0.7820865974627469"
                    ],
                    4: ["https://www.google.com/maps/embed?pb=!4v1640984661674!6m8!1m7!1s4gPQqKGanRadLDXZkJPBPQ!2m2!1d59.93288109808205!2d10.87327099001984!3f59.55447192698997!4f-1.6744723846396141!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984769433!6m8!1m7!1sW5zZcdnHAYe2ss7cyE3g9g!2m2!1d60.19669827311304!2d11.57460566026406!3f227.75299810280404!4f-13.471320709486974!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984707791!6m8!1m7!1shGRqyiAkam9_4JvLrdsyKA!2m2!1d61.01734420228492!2d11.84927755354386!3f247.35824216131434!4f-2.2204708783082765!5f0.7820865974627469",
                    "https://www.google.com/maps/embed?pb=!4v1640984873846!6m8!1m7!1saJ6ZEjD-hVo4jzplAX0zpQ!2m2!1d61.14885450730625!2d13.26951717002849!3f68.97247426151455!4f-12.29404114317191!5f0.7820865974627469"]


                }
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
                start: [10, 2940, 340, 190, 210],
                end: [40, 3030, 400, 270, 280],
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
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Final Jeopardy", "Julens historia", "Vilket år visades Kalle Anka på julafton för första gången?", "1960", "joWd2P-6keM"]))
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
        let tempNum = Number(e.target.value);
        console.log(tempNum);
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

        console.log(chosenQ[3]);
        if(chosenQ[3] === "paSparet") history.push('/pa-sparet')
     
        if(chosenQ[3] !== "paSparet") history.push('/question')
      
    
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
