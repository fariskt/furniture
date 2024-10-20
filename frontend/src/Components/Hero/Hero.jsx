import React, { useRef } from "react";
import "./Hero.css";
import { sliderImages } from "../../data";
import Categories from "../Categories/Categories";

const Hero = () => {
  const targetRef = useRef(null);

  const scrollToEl = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="flex justify-center items-center w-full mx-auto py-16">
        <div className="">
          <h1 className="text-6xl w-[600px] ml-10">
            Transform Your Space with Elegant Furniture
          </h1>
          <p className="w-[600px] ml-10 mt-5">
            Lorem ipsum dolor quia quod asperiores laudantium eius itaque totam
            cumque
          </p>
          <button
            className="ml-10 bg-black text-white py-3 px-6 mt-8"
            onClick={scrollToEl}
          >
            SHOP NOW
          </button>
        </div>
        <div>
          <div className="absolute mt-[140px] ml-[100px]">
            {sliderImages.map((image, index) => (
              <img
                key={index}
                src='/desk.png'
                alt={`Slide ${index + 1}`}
                className="h-[480px] w-[600px] object-contain"
              />
            ))}
          </div>
          <div className="traingle"></div>
        </div>
      </div>
      <Categories targetRef={targetRef}/>
    </>
  );
};

export default Hero;
