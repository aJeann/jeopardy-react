import React from 'react'

const HeaderComponent = () => {

    const stateArray = [];
    const tempArray = [];

    for (let index = 0; index < 25; index++) {
        if(index === 0) stateArray.push(false);
        stateArray.push(true);    
    }

    if(!sessionStorage.getItem("stateArray") || !sessionStorage.getItem("currentQuestion") || !sessionStorage.getItem("valueOfQ")){
        sessionStorage.setItem("stateArray", JSON.stringify(stateArray));
        sessionStorage.setItem("currentQuestion", JSON.stringify(["Question", "Answer"]));
        sessionStorage.setItem("valueOfQ", 0);
    }

    const resetGame = () => {
        for (let index = 0; index < 25; index++) {
            if(index === 0) tempArray.push(false)
            tempArray.push(true);    
            sessionStorage.setItem("stateArray", JSON.stringify(tempArray))
        }
        sessionStorage.setItem("p1Score", 0); sessionStorage.setItem("p2Score", 0); sessionStorage.setItem("p3Score", 0); sessionStorage.setItem("p4Score", 0);

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
                        </ul>
                    </div>
                </nav>
                
            </header>

        </div>
    )
}

export default HeaderComponent
