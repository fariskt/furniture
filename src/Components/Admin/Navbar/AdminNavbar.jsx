import React from "react";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";


const AdminNavbar = () => {
  return (
    <div className="flex bg-gray-100 w-[82%] ml-[280px] fixed top-0 p-7 justify-between items-center">
      <h1 className="text-lg ml-4 text-gray-600 font-bold">WELCOME</h1>
      <div className="flex gap-4 items-center">
        <input type="text" placeholder="search" className="p-2 rounded-md outline-none bg-gray-200 border border-gray-200 text-black"/>
        <div className="flex gap-4">
          <p className="text-2xl text-gray-600"><IoIosSettings/></p>
          <p className="text-2xl text-gray-600"><CgProfile/></p>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
