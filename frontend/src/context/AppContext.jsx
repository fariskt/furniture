import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const values = {
    products,
    setProducts,
  };
  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
