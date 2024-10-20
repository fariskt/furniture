import React, { createContext, useContext, useState } from "react";
import AppContext from "./AppContext";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {products} = useContext(AppContext)

  const addToCart = (id) => {
    const product = products.find((val) => val.id === id);

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

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

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
