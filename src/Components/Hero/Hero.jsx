import React, { useEffect, useState } from "react";
import "./Hero.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const sliderImages = [
  "./slider/blue-sofa.png",
  // "./slider/desk.png",
  // "./slider/sofa1.png",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div>
      <div>
        <h1>Transform Your Space with Elegant Furniture</h1>
        <p>
          Lorem ipsum dolor quia quod asperiores laudantium eius itaque totam
          cumque necessitatibus tempora fugiat quasi debitis?
        </p>
        <button>Explore</button>
      </div>
      <div
        className="slider-container flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-60 w-60 object-contain"
          />
        ))}
      </div>
      <div className="traingle"></div>
    </div>
  );
};

export default Hero;
