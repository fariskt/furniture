import React, { useContext, useEffect, useRef, useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import CartContext from "../../../context/CartContext";
import AppContext from "../../../context/AppContext";
import SearchItems from "./SearchItems";

const Navbar = () => {
  const { cartCount, setCart } = useContext(CartContext);
  const { isLogin, setIsLogin, products , userId, userName} = useContext(AppContext);
  const [showProfile, setShowProfile] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);
  const profileRef = useRef(null)

  const scrollFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    const products = document.getElementById("product");
    products.scrollIntoView({ behavior: "smooth" });
  };

  const handleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear()
    setShowProfile(false);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false)
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfile]);

  return (
    <>
      <nav className="fixed w-screen z-50 h-20 flex items-center justify-between bg-gray-200 px-12 py-5 top-0">
        <Link to="/">
          <h2 className="text-2xl font-bold">LuxSpace</h2>
        </Link>
        <ul className="flex justify-around gap-24 mr-12 text-base">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <li onClick={scrollToProducts}>PRODUCT</li>
          <li onClick={scrollFooter}>ABOUT</li>
        </ul>
        <div className="flex gap-8 items-center">
          <input
            type="text"
            placeholder="search items"
            ref={inputRef}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="border w-[350px] border-gray-300 rounded-md p-2 text-base focus:outline-none focus:border focus:border-blue-500"
          />
          <Link to="/cart" className="text-2xl mr-5">
            <BsCart2 />
          </Link>
          <span
            style={{ fontSize: "13px" }}
            className={
              cartCount > 0
                ? "absolute right-[110px] mt-[-20px] bg-black text-center text-white h-[20px] w-[20px] pb-1 pt-[2px] pl-[2px] rounded-full"
                : "hidden"
            }
          >
            {cartCount > 0 ? cartCount : ""}
          </span>

          {isLogin ? (
            <>
              <div className="flex flex-col items-center justify-center">
                <button 
                  onClick={handleProfile}
                  className="text-2xl mt-3 w-[30px]"
                  style={
                    showProfile
                      ? {
                          backgroundColor: "#b5b8bd",
                          padding: "3px",
                          borderRadius: "50%",
                        }
                      : null
                  }
                >
                  <CgProfile />
                </button>
                <small className="text-sm pr-2">{userId && userName}</small>
              </div>
              {showProfile && (
                <div ref={profileRef} className="flex flex-col gap-4 absolute rounded-b-md text-white top-[80px] right-4 bg-gray-500 py-4 px-8">
                  <h4 className="cursor-pointer">View profile</h4>
                  <h4 className="cursor-pointer">Orders</h4>
                  <h4 className="cursor-pointer">Settings</h4>
                  <button
                    className="bg-red-600 text-white rounded-md p-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
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
