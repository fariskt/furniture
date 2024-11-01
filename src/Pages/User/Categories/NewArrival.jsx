import React, { useContext, useState } from "react";
import "./categories.css";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import CartContext from "../../../context/CartContext";
import AppContext from "../../../context/AppContext";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";

const NewArrival = () => {
  const { addToCart } = useContext(CartContext);
  const { products, isLogin } = useContext(AppContext);

  const [active, setActive] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);

  const handleClick = (index) => {
    setActive(index);
    setVisibleProducts(4);
  };

  const navigate = useNavigate();

  const handleProduct = (item) => {
    navigate(`/product/${item.id}`);
  };

  const categories = ["BED", "SOFA", "LIGHT", "TABLE"];

  const filteredProducts = products.filter(
    (product) => product.category.toUpperCase() === categories[active]
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }} className="text-2xl font-bold mt-24">
        NEW PRODUCTS
      </h1>
      <div className="flex justify-center gap-14 mt-8 mb-14 category">
        {categories.map((category, index) => (
          <p
            className="cursor-pointer"
            key={index}
            style={{
              color: active === index ? "black" : "grey",
              fontWeight: "bold",
            }}
            onClick={() => handleClick(index)}
          >
            {category}
          </p>
        ))}
      </div>

      <div className="grid md:grid-cols-[1fr_1fr_1fr_1fr] md:gap-10 md:[90%] w-[80%] mx-auto">
        {filteredProducts.slice(0, visibleProducts).map((item, index) => (
          <div key={index} className="arr-div">
            <div className="middle">
              <h4
                className="cart-btn"
                title="Add to Cart"
                onClick={() => {
                  if (isLogin) {
                    addToCart(item);
                  } else {
                    navigate("/login");
                  }
                }}
              >
                Add to Cart <CiCirclePlus />
              </h4>
            </div>
            <img
              src={item.img}
              alt="image"
              className="arrival-img"
              onClick={() => handleProduct(item)}
            />
            <p>{item.name}</p>
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-[90%] mx-auto mt-6 space-x-4">
        {visibleProducts < filteredProducts.length && (
          <button
            onClick={() => setVisibleProducts(visibleProducts + 4)}
            className="flex items-center gap-1 shadow-sm px-2 py-1 text-sm border-2 border-blue-300 rounded-xl"
          >
            SEE ALL
            <span className="text-blue-600">
              <FaChevronDown />
            </span>
          </button>
        )}
        {visibleProducts > 4 && (
          <button
            onClick={() => setVisibleProducts(4)}
            className="flex items-center gap-1 shadow-sm px-2 py-1 text-sm border-2 border-blue-300 rounded-xl"
          >
            Show Less
            <span className="text-blue-600">
              <FaChevronUp />
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default NewArrival;
