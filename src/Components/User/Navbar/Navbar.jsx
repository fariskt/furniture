import React, { useContext, useEffect, useRef, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../context/CartContext";
import AppContext from "../../../context/AppContext";
import SearchItems from "./SearchItems";

const Navbar = () => {
  const { setCart, cart } = useContext(CartContext);
  const { isLogin, setIsLogin, products, userId, userName } =
    useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleProfileToggle = () => {
    setShowProfile((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setCart([]);
    setIsLogin(false);
    navigate("/");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchProducts = (id) => {
    navigate(`/product/${id}`);
    setSearchValue("");
  };

  return (
    <>
      <nav className="fixed w-screen z-50 h-20 flex items-center justify-between bg-gray-200 px-4 md:px-12 py-5 top-0">
        <Link to="/">
          <h2 className="text-xl md:text-2xl font-bold mx-1">LuxSpace</h2>
        </Link>
        <ul className="md:flex md:flex-row md:gap-24 md:mr-12 md:text-base">
          <Link to="/">HOME</Link>
          <li onClick={() => navigate("/products")}>PRODUCTS</li>
          <li
            onClick={() =>
              document
                .getElementById("footer")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            ABOUT
          </li>
        </ul>

        <div className="flex gap-6 items-center">
          <input
            type="text"
            placeholder="search items"
            ref={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border w-44 md:w-[350px] border-gray-300 rounded-md p-2 text-base focus:outline-none focus:border focus:border-blue-500"
          />
          <Link to="/cart" className="text-2xl mr-5 flex items-center">
            <BsCart2 />
            {cart.length > 0 && (
              <sup className="bg-black text-center text-white text-sm h-[20px] w-[20px] rounded-full">
                {cart.length}
              </sup>
            )}
          </Link>
          {isLogin ? (
            <div className=" md:flex  md:flex-col md:items-center md:justify-center">
              <div className="flex flex-col">
                <button
                  onClick={handleProfileToggle}
                  className={`text-2xl  mt-3 w-[30px] h-[30px] pl-1 ${
                    showProfile ? "bg-[#b5b8bd] rounded-full" : ""
                  }`}
                >
                  <CgProfile />
                </button>
                <small className="text-sm pr-2">{userId && userName}</small>
              </div>
              {showProfile && (
                <div className=" md:flex flex-col gap-4 absolute rounded-b-md text-white top-[80px] right-4 bg-gray-500 py-4 px-8">
                  <h4 className="cursor-pointer">View Profile</h4>
                  <Link to="/orders">
                    <h4
                      className="cursor-pointer"
                      onClick={() => setShowProfile(false)}
                    >
                      Orders
                    </h4>
                  </Link>
                  <h4 className="cursor-pointer">Settings</h4>
                  <button
                    className="bg-red-600 text-white rounded-md p-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signup">
              <button className="bg-black text-white py-2 px-3 rounded-lg">
                Sign up
              </button>
            </Link>
          )}
        </div>
      </nav>
      <SearchItems
        searchValue={searchValue}
        filteredProducts={filteredProducts}
        handleSearchProducts={handleSearchProducts}
        inputRef={inputRef}
        setSearchValue={setSearchValue}
      />
    </>
  );
};

export default Navbar;
