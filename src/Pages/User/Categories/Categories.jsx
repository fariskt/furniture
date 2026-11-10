import React from "react";
import NewArrival from "./NewArrival";
import { brands } from "../../../data";

const Categories = () => {

  return (
    <div>
      <NewArrival />
      <div>
        <h1 className="text-4xl text-center mt-28 mb-10">OUR BRANDS</h1>
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-24">
          {brands.map((item, index) => (
            <img
              key={index}
              src={item}
              alt="brands"
              className="md:h-28 md:object-cover w-[200px] md:w-22 "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
