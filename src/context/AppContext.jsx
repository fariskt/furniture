import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = sessionStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  const [orders, setOrders] = useState([]);

  const [isLogin, setIsLogin] = useState(() => {
    return sessionStorage.getItem("isLogin") === "true";
  });
  const [userId, setUserId] = useState(() => {
    return sessionStorage.getItem("userId") || "";
  });
  const [userName, setUserName] = useState(() => {
    return sessionStorage.getItem("userName") || "";
  });
  const [users, setUsers] = useState([]);

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
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders');
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("products", JSON.stringify(products));
  }, [products]);


  const values = {
    products,
    setProducts,
    isLogin,
    setIsLogin,
    setUserId,
    userId,
    setUserName,
    userName,
    setUsers,
    users,
    orders,
    setOrders,
  };

  return (
    <AppContext.Provider value={{ ...values }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
