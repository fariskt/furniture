import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./AppContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userId } = useContext(AppContext);

  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const storedCart = response.data.cart || [];
        setCart(storedCart);
        setCartCount(storedCart.length);
      } catch (error) {
        console.error("Error fetching cart", error);
        
      }
    };
    if (userId) loadCart();
  }, [userId]);

  const syncCart = async (updatedCart) => {
    setCart(updatedCart);
    setCartCount(updatedCart.length);
    try {
      await axios.patch(`http://localhost:3000/users/${userId}`, {
        cart: updatedCart,
      });
    } catch (error) {
      console.log("Error syncing cart", error);
    }
  };

  const addToCart = (item) => {
    const itemExist = cart.find((product) => product.id === item.id);
    if (!itemExist) {
      const updatedCart = [...cart, { ...item, quantity: cartQuantity }];
      syncCart(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    syncCart(updatedCart);
  };

  const values = {
    cart,
    setCart,
    addToCart,
    removeFromCart,
    cartCount,
    cartQuantity,
    setCartCount,
    setCartQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
