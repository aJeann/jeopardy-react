import { useState, useEffect } from "react";
import "./Slider.css";
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const PhotoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = JSON.parse(sessionStorage.getItem("currentQuestion"));
  const slideLength = data[6].length;
  const [autoScroll, setAutoScroll] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const history = useHistory();

  let slideInterval;
  let intervalTime = 3000;

  const nextSlide = () => {
    if(currentSlide !== data[6].length-1){
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    }
    else{
        setShowButton(true);
    }
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll]);

  return (
    <div className="slider">
      {data[6].map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}
       {showButton && (
             <div style={{position: "absolute", bottom: "20px", left: "50%"}}>
                 <Button style={{marginTop: '20px'}} onClick={() => {history.push('/')}}>
                    Fortsätt
                    </Button>
            </div>
                    
                )}
    </div>
  );
};

export default PhotoCarousel;