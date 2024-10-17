import React from "react";
import "./Login.css";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex w-[70%] mt-[100px] mx-auto border-2 border-gray-400 rounded-lg justify-around py-12">
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          className="h-[400px] "
          src="./login-img.jpg"
          alt="login-side-image"
        />
      </div>
      <div className="mt-[100px] px-6">
        <h1 className="text-4xl font-extrabold">Sign in</h1>
        <form className="flex flex-col w-[400px] gap-8">
          <div className="flex border-b border-gray-400 pb-2 mt-12 gap-8 w-[400px]">
            <span>
            <MdEmail />
            </span>
            <input type="text" placeholder="Your Email" className="w-[90%]" />
          </div>
          <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
            <span>
              <IoIosLock />
            </span>
            <input type="text" placeholder="Password" className="w-[90%]" />
          </div>
          <div className="flex gap-6">
            <input type="checkbox" className="h- w-4" name="" id="" />
            <span>Remember me</span>
          </div>
          <div>
            <button className="bg-green-400 py-3 px-5 rounded-md text-white">
              Login in
            </button>
          </div>
        </form>
        <div className="mt-8 flex gap-2">
          <h4>Don't have an account.</h4>
          <Link to='/signup'><span className="text-blue-500">create one</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
