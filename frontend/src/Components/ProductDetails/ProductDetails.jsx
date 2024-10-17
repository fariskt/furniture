import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductDetails = () => {
  const { data } = useContext(AppContext);
  
  return (
    <div className="flex justify-between mt-[150px] w-[90%] mx-auto">
      <div>
        <img
          src={`/${data.img}`}
          alt="product image"
          className="w-[1200px] h-[500px] object-cover border"
        />
      </div>
      <div className="flex flex-col ml-14 gap-3 w-[60%]">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <div className="flex items-center gap-4 pb-4 border-b">
          <strike className="text-gray-400 text-lg font-bold">$100.00</strike>
          <h3 className="text-xl font-bold">${data.price}</h3>
        </div>
        <p className="text-green-700">✅ In stock</p>
        <p className="w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni
          ullam quaerat ex sequi maxime in sapiente ipsa. Facere distinctio
          numquam incidunt eos impedit harum earum
        </p>
        <h5>Color: Red</h5>
        <div className="flex items-center gap-4 my-4">
          <div className="border border-gray-300 bg-white w-[150px] flex justify-center items-center">
            <button className="py-2 px-4 font-extrabold border-r">-</button>
            <button className="px-4 font-extrabold border-r">0</button>
            <button className="py-2 px-4 font-extrabold border-l">+</button>
          </div>
          <div>
            <button className="bg-black text-white py-3 w-[250px]">
              ADD TO CART
            </button>
          </div>
          <div>
            <button className="p-[12px] border text-2xl">
              <MdOutlineFavoriteBorder />
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <input type="checkbox" name="" id="" className="h-4 w-4" />
          <span>I agree with terms and conditions</span>
        </div>
        <div className="my-4 w-full">
          <button className="w-full border border-gray-400 p-4 bg-gray-800 text-white">
            BUY NOW
          </button>
        </div>
        <div className="flex gap-4">
          <p>car icon</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
            omnis! Sit, facilis
          </p>
        </div>
        <div className="checkout-brand">
          <p>Guranteed checkout</p>
          <div className="flex">
            <p>imgs</p>
            <p>imgs</p>
            <p>imgs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
