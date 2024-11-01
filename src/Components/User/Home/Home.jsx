import React, { useRef } from "react";
import "./Home.css";
import Categories from "../../../Pages/User/Categories/Categories";
import { useNavigate } from "react-router-dom";
  
const Home = () => {
  const targetRef = useRef(null);

  const navigate = useNavigate()
  const goToProduct = () => {
    navigate("/products")
  };
  
  return (
    <>
      <div className="md:flex md:flex-row md:justify-center md:items-center sm:flex-col mt-28  md:w-full mx-auto py-16 md:mt-0 ">
        <div >
          <h1 className="md:text-6xl md:w-[600px] ml-4 text-3xl w-full">
            Transform Your Space with Elegant Furniture
          </h1>
          <p className="md:w-[600px] ml-10 mt-5">
            Lorem ipsum dolor quia quod asperiores laudantium eius itaque totam
            cumque
          </p>
          <button
            className="ml-10 bg-black text-white py-3 px-6 mt-8"
            onClick={goToProduct}
          >
            SHOP NOW
          </button>
        </div>
        <div>
          <div className="absolute md:mt-[140px] md:ml-[100px] ml-20 mt-16">
            <img
              src="/desk.png"
              alt="someimage"
              className="md:h-[480px] md:w-[600px] object-contain w-[300px] h-[300px]"
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
