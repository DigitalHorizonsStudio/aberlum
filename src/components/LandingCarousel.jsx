import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component from react-bootstrap
import './Carousel.css';


import landing1 from '../assets/landing/1.png';
import landing2 from '../assets/landing/2.png';
import landing3 from '../assets/landing/3.png';
import landing4 from '../assets/landing/4.png';
import landing5 from '../assets/landing/5.png';

const slides = [
  { src: landing1, title: "Perfil" },
  { src: landing2, title: "Trabajando" },
  { src: landing3 , title: "Perfiles" },
  { src: landing4, title: "Marcos" },
  { src: landing5, title: "Mecha" },
];

export const LandingCarousel = () => {

  const totalImages = slides.length;

  return (
    <div>
      <Carousel  data-bs-theme="dark" >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="img-container">
              <img
                className="img-carousel"
                src={slide.src}
                loading='lazy'
                alt={`Slide ${index + 1}`}
              />
            </div>
            <Carousel.Caption>
              <h5>{slide.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};