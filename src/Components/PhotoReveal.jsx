import React from 'react'
import { useState, useEffect } from 'react'
import { ImagePixelated } from "react-pixelate"
import image from './images/image.jpg'
import TimerComp from './TimerComp';
import { Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const PhotoReveal = () => {

    const [activeState, setActive] = useState(true);
    const [questionAnswered, setQuestionAnswered] = useState(true);
    const [seconds, setSeconds] = useState(30)
    const [showButton, setShowButton] = useState(false);
    const history = useHistory();
    const [removedNumbers, setRemovedNumbers] = useState([]);
    const [reveal, setReveal] = useState(false);

    const HandleClick = () => {
        setReveal(true);
        setQuestionAnswered(!questionAnswered);
        setActive(!activeState);
        setShowButton(!showButton);
    }

    useEffect(() => {
        let interval = null;
        let randomArray = [];
        if (activeState) {
            interval = setInterval(() => {
            if(seconds > 0 && activeState === true){

                for(let i = 0; i < 100; i++){
                    let x = Math.floor(Math.random() * Array.from(Array(1600)).length);
                    randomArray.push(x);
                }
                setSeconds(seconds => seconds - 1);
                setRemovedNumbers(removedNumbers.concat(randomArray).sort())
            }
            }, 1000);
        } 
        return () => clearInterval(interval);
        
    }, [activeState, seconds]);

    const img = new Image();
    img.src = image;

    return (
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "black"}}
                onClick={HandleClick}>
                <div style={{width: "600px", height: "600px", position: "relative", overflow: "-moz-hidden-unscrollable"}}>
                    <img src={image} style={{objectFit: "contain", height: "100%", width: "100%"}}></img>
                    {!reveal && (
                    <div style={{display: "grid", gridTemplateRows: "repeat(40, 1fr)", gridTemplateColumns: "repeat(40, 1fr)", width: "600px", height: "600px", position: "absolute", top: "0", left: "0"}}>
                        {Array.from(Array(1600).keys()).map((i) => {
                            if(!removedNumbers.includes(i)){
                                return <div key={i} style={{backgroundColor: "black", width: "15px", height: "15px"}}></div>
                            }
                            else {
                                return <div key={i} style={{width: "15px", height: "15px"}}></div>
                            }
                        }                       
                        )}
                    </div>)
                    }
                </div>
                
                {/* //<ImagePixelated src={image} width={500} height={500} fillTransparencyColor={"grey"} pixelSize={pixels} />   */}           
            </div>
            <Container>
                <div style={{backgroundColor:"black", textAlign: "center", padding: "10px 10px 20px 10px", borderRadius: "10px", marginTop: "25px"}}>
                    <Button onClick={() => {
                        setActive(!activeState);
                    }}>{activeState? "II" : ">>"}</Button>
                <TimerComp toggle={activeState} time={seconds}/>  
                {showButton && (
                    <Button style={{marginTop: '20px'}} onClick={() => {history.push('/')}}>
                        Fortsätt
                    </Button>
                )}
                </div>    
            </Container>
        </>
    )
}

export default PhotoReveal
