import React, { useState, useEffect } from 'react';
import p6 from '../images/p6.jpg';
import p1 from '../images/p1.jpg';
import p3 from '../images/p3.jpg';
import p5 from '../images/p5.webp'
import p7 from '../images/p7.jpg'
//import DateTimeComponent from './Date';// Import DateTimeComponent
import './slider.css'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [p6, p1, p5,p3,p7];
  const intervalTime = 3000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, intervalTime);

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, slides.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const updateSlider = () => {
    const translateX = -currentIndex * 100;
    return { transform: `translateX(${translateX}%)` };
  };

  return (
    <div className="slider-container">
      {/* <marquee width="100%" direction="left" height="40px">
        <h2>Medical News Today - <span><DateTimeComponent /></span></h2>
      </marquee> */}
      <div className="slider" style={updateSlider()}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slide-controls">
        <button className="control-button" onClick={goToPreviousSlide}>
          &lt;
        </button>
        <button className="control-button" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;