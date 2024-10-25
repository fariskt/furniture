import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [isLogin, setIsLogin] = useState(() => {
    return localStorage.getItem("isLogin") === "true";
  });
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem("userId") || "";
  });
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (products.length === 0) fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  const values = {
    products,
    setProducts,
    isLogin,
    setIsLogin,
    setUserId,
    userId,
    setUserName,
    userName,
  };

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
