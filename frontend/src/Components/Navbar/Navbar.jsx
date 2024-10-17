import React, { useContext } from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="fixed w-screen z-50 flex items-center justify-between bg-gray-200 px-12 py-5 top-0">
      <Link to="/">
        <h2>LOGO</h2>
      </Link>
      <ul className="flex justify-around gap-24 mr-12 text-base">
        <li>HOME</li>
        <li>SHOP</li>
        <li>PRODUCT</li>
        <li>ABOUT</li>
      </ul>
      <div className="flex gap-10">
        {/* <input
          type="text"
          placeholder="search items"
          className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
        /> */}
        <button className="text-2xl">
          <IoIosSearch />
        </button>
        <Link to="/cart" className="text-2xl">
          <BsCart2 />
        </Link>
        <span
          className={
            cartCount > 0
              ? "absolute ml-[88px] mt-[-10px] bg-black text-white h-[20px] w-[20px] pb-1 pl-[6px] rounded-full"
              : "hidden"
          }
        >
          {cartCount > 0 ? cartCount : ""}
        </span>
        <Link to='/login'>
        <button className="text-2xl">
          <CgProfile />
          {/* Login */}
        </button>
        </Link>
          
      </div>
    </nav>
  );
};

export default Navbar;
