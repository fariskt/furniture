import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const { setIsLogin } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  const validEmail = "admin@gmail.com";
  const validPassword = "admin123";

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email == validEmail && password == validPassword) {
      setErrorMessage("");
      setIsLogin(true);
      setInterval(() => {
        setAlertShow(true);
      }, 300);
      setTimeout(() => {
        setAlertShow(false);
        navigate("/admin");
      }, 2000);
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-800 p-8">
      {alertShow && (
        <h1 className="absolute top-8 text-white shadow-lg rounded-md left-[40%] bg-green-500 p-4">
          Login successful! Welcome back, Admin!
        </h1>
      )}
      <div className=" lg:flex w-1/2 items-center justify-center border-r gap-4">
        <img src="/weblogo.png" alt="" className="h-36 rounded-full" />
        <h1 className="text-2xl text-white font-mono">Welcome back</h1>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Admin Login
          </h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label
                className="block text-gray-300 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                className="w-full bg-slate-200 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                className="block text-gray-300 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full bg-slate-200 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            <button
              type="submit"
              className="w-[90%] mx-auto mt-6 py-2 px-4  bg-orange-600 hover:bg-green-400 text-white font-semibold rounded-lg transition duration-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
