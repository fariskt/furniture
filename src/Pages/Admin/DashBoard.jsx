import React from "react";
import { MdShoppingCartCheckout } from "react-icons/md";

const DashBoard = () => {
  return (
    <div className="bg-gray-200 min-h-[88vh] mt-[100px] ml-[280px]">
      <h1 className="text-3xl pt-8 pl-16">Dashboard </h1>
      <div className="flex gap-10 items-center pt-10 justify-center">
        <div className="bg-white flex items-center gap-4 py-10 px-12 rounded-md">
          <span className="text-2xl bg-gray-100 p-4 rounded-lg text-blue-700">
            <MdShoppingCartCheckout />
          </span>
          <div>
            <h3>New Orders</h3>
            <h3 className="font-bold">4780</h3>
          </div>
        </div>
        <div className="bg-white flex items-center gap-4 py-10 px-12 rounded-md">
          <span className="text-2xl bg-gray-100 p-4 rounded-lg text-orange-600">
            <MdShoppingCartCheckout />
          </span>
          <div>
            <h3>New Orders</h3>
            <h3 className="font-bold">4780</h3>
          </div>
        </div>
        <div className="bg-white flex items-center gap-4 py-10 px-12 rounded-md">
          <span className="text-2xl bg-gray-100 p-4 rounded-lg text-violet-600">
            <MdShoppingCartCheckout />
          </span>
          <div>
            <h3>New Orders</h3>
            <h3 className="font-bold">4780</h3>
          </div>
        </div>
        <div className="bg-white flex items-center gap-4 py-10 px-12 rounded-md">
          <span className="text-2xl bg-gray-100 p-4 rounded-lg text-yellow-600">
            <MdShoppingCartCheckout />
          </span>
          <div>
            <h3>New Orders</h3>
            <h3 className="font-bold">4780</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
