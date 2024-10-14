import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-200 px-12 py-5">
      <h2>LOGO</h2>
      <ul className="flex justify-around gap-24 mr-12 text-base">
        <li>HOME</li>
        <li>SHOP</li>
        <li>PRODUCT</li>
        <li>ABOUT</li>
      </ul>
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="search items"
          className="border border-gray-300 rounded-md p-2 text-base focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="text-2xl">
          <BsCart2 />
        </button>
        <button className="text-2xl">
          <CgProfile />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
