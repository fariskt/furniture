import React, { createContext, useState } from "react";
import { newArrival } from "../data";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product = newArrival.find((val) => val.id === id);

    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.id === id);
      if (itemInCart) {
        return prevCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    const filteredItem = cart.filter((item, index) => index !== id);
    setCart(filteredItem);
  };

  const cartCount = cart.length;

  const values = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    cartCount,
  };
  return (
    <CartContext.Provider value={{ ...values }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
