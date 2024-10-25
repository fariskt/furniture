import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoBagCheck } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { HiUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="fixed top-0 h-full left-0 w-[280px] bg-gray-800 text-white flex flex-col justify-between pt-8">
      <div>
        <div className="flex items-center">
          <img src="/weblogo.png" alt="" className="h-16" />
          <h1 className="text-xl font-bold">LuxSpace</h1>
        </div>
        <div className="p-8">
          <div className="flex flex-col gap-8">
            <Link to="/admin/dashboard">
            <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
              <span className="text-2xl">
                <LuLayoutDashboard />
              </span>
              <h4>DashBord</h4>
            </div>
            </Link>
            <Link to='/admin/products'>
            <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
              <span className="text-2xl">
                <HiMiniShoppingBag />
              </span>
              <h4>Products</h4>
            </div>
            </Link>
            <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
              <span className="text-2xl">
                <HiUsers />
              </span>
              <h4>Users</h4>
            </div>
            <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
              <span className="text-2xl">
                <IoBagCheck />
              </span>
              <h4>Orders</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-8 py-10 mb-4 gap-6">
        <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
          <span className="text-2xl">
            <IoIosSettings />
          </span>
          <h4>Settings</h4>
        </div>
        <div className="flex items-center gap-4 cursor-pointer text-gray-400 hover:text-white duration-200">
          <span className="text-2xl">
            <LuLogOut />
          </span>
          <h4>Logout</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
