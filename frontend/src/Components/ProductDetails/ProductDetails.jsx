import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartContext";

const ProductDetails = () => {
  const { setCart, cart, } = useContext(CartContext);
  const { products } = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  const data = products.find((prd) => prd.id === id);

  const updateCart = () => {
    const itemCart = cart.find((item) => item.id === data.id);

    if (itemCart) {
      setCart(
        cart.map((item) =>
          item.id === data.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...data, quantity }]);
    }
  };

  return (
    <div className="flex justify-between mt-[150px] w-[90%] mx-auto">
      <div>
        <img
          src={data.img}
          alt="product image"
          className="w-[1200px] h-[500px] object-contain border border-gray-500"
        />
      </div>
      <div className="flex flex-col ml-14 gap-3 w-[60%]">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <div className="flex items-center gap-2 pb-4 border-b">
          <strike className="text-gray-400 text-lg font-bold">
            ₹{Math.trunc(data.price) + 120}.00
          </strike>
          <h3 className="text-xl font-bold">₹{data.price}</h3>
        </div>
        <p className="text-green-700">✅ In stock</p>
        <p className="w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum magni
          ullam quaerat ex sequi maxime in sapiente ipsa. Facere distinctio
          numquam incidunt eos impedit harum earum
        </p>
        <h5>Color: Red</h5>
        <div className="flex items-center gap-4 my-4 w-full">
          <div className="border border-gray-300 bg-white w-[150px] flex justify-center items-center">
            <button
              className="py-2 px-4 font-extrabold border-r"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <button className="px-4 font-extrabold border-r">{quantity}</button>
            <button
              className="py-2 px-4 font-extrabold border-l"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="bg-black text-white py-3 w-[240px]"
              onClick={() => updateCart(id)}
            >
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
          <button className="w-[90%] border border-gray-400 p-4 bg-gray-800 text-white">
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
