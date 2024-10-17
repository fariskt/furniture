import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, cartCount, setCart } = useContext(CartContext);
  console.log(cart);

  const total_price = cart.reduce((acc, val) => {
    return acc + parseInt(val.price) * val.quantity;
  }, 0);

  let discount = total_price * 0.1;
  const totalAfterDiscount = total_price - discount;

  const incrementItem = (index) => {
    const updatedCart = cart.map((cartItem, i) =>
      i === index ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
  };

  const decrementItem = (index) => {
    const updatedCart = cart.map((cartItem, i) =>
      i === index && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  return (
    <div
      className="flex mt-28 w-[70%] mx-auto justify-between shadow-md border rounded-md"
      style={{ minHeight: "500px" }}
    >
      <div className="py-4 px-8 w-full">
        <div className="flex justify-between border-b-2 py-6 items-center">
          <h1 className="text-4xl font-bold mb-2">Shopping Cart</h1>
          <h3 className="text-md mr-4 font-bold text-gray-600">
            {cartCount} items
          </h3>
        </div>
        <div
          className="flex flex-col  gap-10 py-6 h-[400px]  w-[700px] overflow-y-auto"
          style={{ maxHeight: "400px" }}
        >
          {cart.length > 0 ? (
            cart.map((item, index) => {
              const itemTotal = item.price * item.quantity;
              return (
                <div
                  key={index}
                  className="flex justify-center gap-8 border-b py-4 items-center"
                >
                  <img
                    src={item.img}
                    className="w-[100px] h-[100px]"
                    alt="an image"
                  />
                  <div className="flex flex-col gap-2 w-[400px]">
                    <p>{item.category}</p>
                    <p className="w-[150px]">{item.name}</p>
                    <div className="border border-gray-300 rounded-md bg-white w-[120px] flex  items-center">
                      <button
                        className="py-2 px-4 font-extrabold border-r"
                        onClick={() => decrementItem(index)}
                      >
                        -
                      </button>
                      <button className="py-2 px-4 border-r">
                        {item.quantity}
                      </button>
                      <button
                        className="py-2 px-4 font-extrabold"
                        onClick={() => incrementItem(index)}
                      >
                        +
                      </button>
                      <button
                        title="delete"
                        className="text-lg w-[100px] text-gray-700 ml-10"
                        onClick={() => removeFromCart(index)}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p>{itemTotal}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1
              style={{
                textAlign: "center",
                fontSize: "2rem",
                margin: "30px 0",
              }}
            >
              Your cart is empty
            </h1>
          )}
        </div>
        <div className="flex items-center gap-2 py-2 mt-4">
          <span className="text-green-800 text-xl">
            <IoIosArrowBack />
          </span>
          <Link to="/">
            <h2 className="cursor-pointer">Go to Shopping</h2>
          </Link>
        </div>
      </div>

      <div className="summary bg-gray-300 py-6 px-6 w-[400px] rounded-r-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold border-b-2 border-gray-100 mt-8 py-3">
          Summary
        </h2>
        <div className="flex justify-between my-2">
          <p>ITEMS {cartCount}</p>
          <p className="font-bold">$ {total_price}.00</p>
        </div>
        <p>SHIPPING</p>
        <input
          type="text"
          placeholder="Standard-delivery"
          className="p-2 bg-white"
          disabled
        />
        <h4>GIVE CODE</h4>
        <input
          type="text"
          value="Applied 10% discount"
          disabled
          className="p-2 text-green-600 bg-white"
        />
        <div className="flex justify-between my-4">
          <h4>TOTAL PRICE</h4>
          <h4 className="font-bold">$ {totalAfterDiscount}.00</h4>
        </div>
        <button className="bg-black text-white p-2 mt-6">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
