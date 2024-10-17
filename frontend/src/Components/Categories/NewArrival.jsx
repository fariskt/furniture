import React, { useContext, useState } from "react";
import "./categories.css";
import { newArrival } from "../../data";
import { CiCirclePlus } from "react-icons/ci";
import CartContext from "../../context/CartContext";

const NewArrival = () => {
  const { addToCart } = useContext(CartContext);
  
  const [active, setActive] = useState(0);
  const [isHover, setIsHovered] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  const categories = ["BED", "CHAIR",  "SOFA", "LIGHT", "TABLE"];

  return (
    <>
      <h1 style={{ textAlign: "center" }} className="text-2xl font-bold mt-24">
        NEW PRODUCTS
      </h1>
      <div className="flex justify-center gap-14 mt-8 mb-14 category">
        {categories.map((category, index) => (
          <p
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
        {newArrival
          .filter((products) => products.category.toUpperCase() === categories[active])
          .map((item, index) => (
            <div
              key={index}
              className="arr-div"
              onClick={() => addToCart(item.id)}
              
            >
              {isHover === index && (
                <div className="middle" title="gjgjhgj">
                  <button className="cart-btn"> 
                    <CiCirclePlus />
                  </button>
                </div>
              )}
              <img
                src={item.img}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
                alt="image"
                className="arrival-img"
              />
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default NewArrival;
