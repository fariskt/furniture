import React, { useEffect, useState } from "react";
import "./Hero.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { sliderImages } from "../../data";
import Categories from "../Categories/Categories";


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
    <>
    <div className="flex justify-center items-center w-full mx-auto py-16">
      <div className="">
        <h1 className="text-6xl w-[600px] ml-10">Transform Your Space with Elegant Furniture</h1>
        <p className="w-[600px] ml-10 mt-5">
          Lorem ipsum dolor quia quod asperiores laudantium eius itaque totam
          cumque
        </p>
        <button className="ml-10 bg-black text-white py-2 px-5 mt-8">SHOP NOW</button>
      </div>
      <div>
        <div className="absolute mt-[140px] ml-[50px]">
          {sliderImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-[530px] w-[600px] object-contain"
            />
          ))}
        </div>
        <div className="traingle"></div>
      </div>
    </div>
    <Categories/>
    </>
  );
};

export default Hero;