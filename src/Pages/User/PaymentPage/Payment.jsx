import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../../../context/AppContext";
import Confetti from "react-confetti";
import { IoMdClose } from "react-icons/io";
import CartContext from "../../../context/CartContext";
import axios from "axios";

const Payment = () => {
  const { id } = useParams();
  const { products, userId ,setOrders} = useContext(AppContext);
  console.log(userId);
  
  const { cartQuantity } = useContext(CartContext);
  const [isOrder, setIsOrder] = useState(false);
  const productToOrder = products.find((item) => item.id === id);

  const placeOrder = async () => {
    const orderData = {
      userId: userId,
      items: [
        {
          productId: productToOrder.id,
          img: productToOrder.img,
          quantity: cartQuantity,
          price: productToOrder.price,
        },
      ],
      totalAmount: productToOrder.price * cartQuantity - 100,
      orderdate: new Date().toISOString()
    };
    try {
      setIsOrder(true);
      setTimeout(() => {
        setIsOrder(false);
      }, 8000);
      await axios.post("http://localhost:3000/orders", orderData);
      setOrders((prevOrder)=> [...prevOrder , orderData])
    } catch (error) {
      console.log("Error adding orders ", error);
    }
  };

  return (
    <div className="pt-28 w-[80%] mx-auto flex gap-20 justify-center items-center">
      {isOrder && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
      {isOrder && (
        <div className="flex items-center gap-4 top-32 absolute right-10 bg-green-500 text-white p-3 rounded-md shadow-lg">
          <h2>Item Ordered Successfully</h2>
          <p
            className="text-2xl cursor-pointer text-red-600"
            onClick={() => setIsOrder(false)}
          >
            <IoMdClose />
          </p>
        </div>
      )}

      <div className="w-full max-w-md border border-gray-300 bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Payment</h1>
          <div className="flex items-center gap-2">
            <img
              src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"
              alt="visa"
              className="h-10"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcyTIX-OifXAR50FVc6itTEsGOJI0Q3ortjrBnT0-N4UmKWnq9u_L9oadSwbvp7KQ4Ck&usqp=CAU"
              alt="debit"
              className="h-10"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/maestro-2.svg"
              alt="maestro"
              className="h-10"
            />
          </div>
        </div>

        <form className="flex flex-col gap-4">
          <label className="text-gray-600 text-sm">Card holder's name:</label>
          <input
            type="text"
            placeholder="Enter your card holder's name"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <label className="text-gray-600 text-sm">Card Number:</label>
          <input
            type="text"
            placeholder="eg: 9999 8888 7777 6666"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex justify-between gap-4">
            <div className="w-1/2">
              <label className="text-gray-600 text-sm">Expiry Date:</label>
              <input
                type="date"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="w-1/2">
              <label className="text-gray-600 text-sm">CVV:</label>
              <input
                type="password"
                placeholder="xxx"
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="w-full max-w-md border border-gray-300 bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold">Order Summary</h1>
        <h4 className="text-gray-600">{cartQuantity} Items</h4>

        <div className="border-b border-gray-400 py-4 flex items-center gap-4">
          <img
            src={productToOrder.img}
            className="w-20 h-20 object-cover rounded-md shadow-md"
            alt="product"
          />
          <div className="flex flex-col">
            <h4 className="font-bold text-gray-700">
              Price: ₹ {productToOrder.price * cartQuantity}
            </h4>
            <h5 className="text-sm text-gray-500">
              Name: {productToOrder.name}
            </h5>
            <h5 className="text-sm text-gray-500">
              Color: {productToOrder.color}
            </h5>
            <h5 className="text-sm text-gray-500">Quantity: {cartQuantity}</h5>
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <div className="flex justify-between my-2">
            <h5>Subtotal</h5>
            <h5>₹ {productToOrder.price * cartQuantity}</h5>
          </div>
          <div className="flex justify-between my-2">
            <h5>Delivery</h5>
            <h5>Free</h5>
          </div>
          <div className="flex justify-between my-2">
            <h5>Discount</h5>
            <h5>₹ 100</h5>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <h5>Total to pay</h5>
            <h5>₹ {productToOrder.price * cartQuantity - 100}.00</h5>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={placeOrder}
            className="bg-green-600 text-white w-full py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
