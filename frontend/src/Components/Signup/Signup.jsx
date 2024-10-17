import React from "react";
import "./../Login/Login.css";
import { FaUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoMdLock } from "react-icons/io";

import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex w-[70%] mt-[100px] mx-auto border-2 border-gray-400 rounded-lg justify-around">
      <div className="flex flex-col justify-center">
        <img
          className="h-[450px] "
          src="./signup-img.jpg"
          alt="login-side-image"
        />
      </div>
      <div className="mt-[70px] px-6 pb-4">
        <h1 className="text-4xl font-extrabold">Create account</h1>
        <form className="flex flex-col w-[400px] gap-8">
          <div className="flex border-b border-gray-400 pb-2 mt-12 gap-8 w-[400px]">
            <span>
              <FaUser />
            </span>
            <input type="text" placeholder="Your Name" className="w-[90%]" />
          </div>
          <div className="flex border-b border-gray-400 pb-2 gap-8 w-[400px]">
            <span>
              <MdEmail />
            </span>
            <input type="text" placeholder="Your Email" className="w-[90%]" />
          </div>
          <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
            <span>
              <IoMdLock />
            </span>
            <input type="text" placeholder="Password" className="w-[90%]" />
          </div>
          <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
            <span>
              <IoIosLock />
            </span>
            <input
              type="text"
              placeholder="Confirm Password"
              className="w-[90%]"
            />
          </div>
          <div className="flex gap-4">
            <input type="checkbox" className="h- w-4" name="" id="" />
            <span>I agree all statements in Terms of service</span>
          </div>
          <div>
            <button className="bg-green-400 py-3 px-5 rounded-md text-white">
              Sign up
            </button>
          </div>
        </form>
        <div className="mt-8 flex gap-2">
          <h4>Already have an account.</h4>
          <Link to="/login">
            <span className="text-blue-500">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
