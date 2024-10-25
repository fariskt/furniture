import React, { useRef } from "react";
import "./Home.css";
import Categories from "../../../Pages/User/Categories/Categories";

const Home = () => {
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
            <img
              src="/desk.png"
              alt="someimage"
              className="h-[480px] w-[600px] object-contain"
            />
          </div>
          <div className="traingle"></div>
        </div>
      </div>
      <p id="product" ref={targetRef}></p>
      <Categories />
    </>
  );
};

export default Home;
