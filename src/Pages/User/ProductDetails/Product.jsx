import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";
import CartContext from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const Product = () => {
  const { products, isLogin } = useContext(AppContext);
  const { addToCart, cart } = useContext(CartContext);
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const categories = ["ALL", "BED", "SOFA", "LIGHT", "TABLE"];

  const handleClick = (index) => {
    setActive(index);
  };

  const filteredProducts =
    active === 0
      ? products
      : products.filter(
          (item) => item.category.toUpperCase() === categories[active]
        );

  const handleProduct = (item) => {
    navigate(`/product/${item.id}`);
  };

  const handleCart = (item) => {
    if (!isLogin) {
      navigate("/login");
      return;
    }
    const productExst = cart.find((prod) => prod.id === item.id);
    if (productExst) {
      Swal.fire({
        text: "Item already in cart",
        icon: "warning",
      });
    } else {
      addToCart(item);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28">
      <div className="flex justify-center space-x-4 p-4 my-4">
        {categories.map((item, index) => (
          <button
            key={index}
            className={`md:px-4 md:py-2 px-3 py-2 text-sm md:text-base rounded-full font-semibold transition duration-300 ease-in-out ${
              active === index
                ? "bg-black text-white shadow-md"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6 p-6 w-[90%] mx-auto">
        {filteredProducts.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-50 to-gray-100  overflow-hidden transform transition-transform hover:rounded-md hover:shadow-lg hover:border-gray-700 border border-gray-300 relative"
          >
            <img
              src={item.img}
              alt={item.name}
              title="view details"
              className="w-48 h-40 bg-white object-contain cursor-pointer mx-auto my-4 rounded"
              onClick={() => handleProduct(item)}
            />
            <div className="p-4 text-center space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-500 text-sm">{item.category}</p>
              <p className="text-gray-400 text-xs">Color: {item.color}</p>
              <div className="flex justify-between items-center pt-4">
                <p className="text-orange-500 font-bold text-lg">
                  ₹ {item.price}
                </p>
                <button
                  onClick={() => handleCart(item)}
                  className="bg-gray-500 text-white text-lg px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out flex items-center"
                  title="Add to Cart"
                >
                  <FaCartPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
