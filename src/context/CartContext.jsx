import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./AppContext";
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { userId } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/users/${userId}`
        );
        const storedCart = response.data.cart || [];
        setCart(storedCart);
      } catch (error) {
        console.error("Error fetching cart", error);
      }
    };
    if (userId) loadCart();
  }, [userId]);

  const syncCart = async (updatedCart) => {
    setCart(updatedCart);
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
      Swal.fire({
        text: "Item added to cart",
        icon: "success",
      });
      syncCart(updatedCart);
    } else {
      Swal.fire({
        text: "Item already in cart",
        icon: "warning",
      });
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
    cartQuantity,

    setCartQuantity,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
