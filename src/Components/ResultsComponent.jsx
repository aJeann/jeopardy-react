import React from 'react'
import { Container } from 'react-bootstrap'
import * as BSIcons from 'react-icons/bs'

const ResultsComponent = () => {
    const player1 = sessionStorage.getItem("p1Name");
    const player2 = sessionStorage.getItem("p2Name");
    const player3 = sessionStorage.getItem("p3Name");
    const player4 = sessionStorage.getItem("p4Name");

    const player1Score = sessionStorage.getItem("p1Score");
    const player2Score = sessionStorage.getItem("p2Score");
    const player3Score = sessionStorage.getItem("p3Score");
    const player4Score = sessionStorage.getItem("p4Score");

    const numOfPlayers = sessionStorage.getItem("numOfPlayers");

    const resultsArray = [];

    resultsArray.push({
        'name': player1,
        'score': player1Score
    });
    resultsArray.push({
        'name': player2,
        'score': player2Score
    });
    resultsArray.push({
        'name': player3,
        'score': player3Score
    });
    resultsArray.push({
        'name': player4,
        'score': player4Score
    });

    const dynamicSort = (property) => {
        console.log(property);
        let sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            console.log(a);
            console.log(b);
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            let s1 = Number(a[property]);
            let s2 = Number(b[property]);
            console.log(s1);
            let result = (s1 < s2 ? -1 : s1 > s2 ? 1 : 0);
            return result * sortOrder;
        }
    }
   
    resultsArray.sort(dynamicSort('score'));

    resultsArray.reverse();

    console.log(resultsArray);

    return (
        <div>
            <Container style={{textAlign: 'center', backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/10/28/16/47/cup-1010916_960_720.jpg)', height: '100%'}}>
                
                <BSIcons.BsTrophyFill size={40} style={{marginTop: '20px'}}/>
                <h1>Första plats: {resultsArray[0].name + '(' + resultsArray[0].score + ')'}</h1>
                <BSIcons.BsFillTrophyFill size={30} style={{marginTop: '10px'}}/>
                <h2>Andra plats: {resultsArray[1].name + '(' + resultsArray[1].score + ')'}</h2>
                <BSIcons.BsFillTrophyFill size={20} style={{marginTop: '10px'}}/>
                <h3>Tredje plats: {resultsArray[2].name + '(' + resultsArray[2].score + ')'}</h3>
                <hr
                    style={{
                        color: 'black',
                        height: 5
                    }}
                />
                <h4>Fjärde: {resultsArray[3].name + '(' + resultsArray[3].score + ')'}</h4>

            </Container>
        </div>
    )
}

export default ResultsComponent
