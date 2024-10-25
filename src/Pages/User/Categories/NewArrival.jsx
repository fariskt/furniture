import React, { useContext, useState } from "react";
import "./categories.css";
import { useNavigate } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import CartContext from "../../../context/CartContext";
import AppContext from "../../../context/AppContext";

const NewArrival = () => {
  const { addToCart } = useContext(CartContext);
  const { products, isLogin } = useContext(AppContext);

  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };

  const navigate = useNavigate();

  const handleProduct = (item) => {
    navigate(`/product/${item.id}`);
  };

  const categories = ["BED", "SOFA", "LIGHT", "TABLE"];

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

      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-10 w-[90%] mx-auto">
        {products
          .filter(
            (products) => products.category.toUpperCase() === categories[active]
          )
          .map((item, index) => (
            <div key={index} className="arr-div">
              <div className="middle">
                <h4
                  className="cart-btn"
                  title="Add to Cart"
                  onClick={() => {
                    if (isLogin) {
                      addToCart(item);
                    }else {
                      navigate('/login')
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
    </>
  );
};

export default NewArrival;
