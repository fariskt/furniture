import React, { useContext, useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "../../context/AppContext";
import CartContext from "../../context/CartContext";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { setCart } = useContext(CartContext);
  const { setIsLogin, isLogin,  userId ,setUserName, setUserId } =
    useContext(AppContext);
  const [showAlert , setShowAlert] = useState(false)

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (formData, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/users?email=${formData.email}`
      );
      const user = response.data[0];
      const userCart = user.cart;
      if (user) {
        if (user.password === formData.password) {
          localStorage.setItem("userId", user.id);
          localStorage.setItem("userName", user.name);
          setUserName(user.name);
          setUserId(user.id);
          setCart(userCart);
          setIsLogin(true);
          setShowAlert(true)
          setTimeout(()=> {
            setShowAlert(false)
            navigate("/");
          },1000)
        } else {
          setErrors({ password: "Incorrect password" });
        }
      } else {
        setErrors({ email: "No user found with this email" });
      }
      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-[70%] mt-[100px] mx-auto border-2 border-gray-400 rounded-lg justify-around py-12">
      {isLogin && (
        <div className="absolute bg-green-500 text-white top-16 font-bold py-5 px-5 rounded-lg fade-in">
          <h3 className="text-lg">Login successful! Welcome back!</h3>
        </div>
      )}
      <div className="flex flex-col items-center justify-center gap-5">
        <img
          className="h-[400px] "
          src="./login-img.jpg"
          alt="login-side-image"
        />
      </div>
      <div className="mt-[100px] px-6">
        <h1 className="text-4xl font-extrabold">Sign in</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col w-[400px] gap-8">
              <div className="flex border-b border-gray-400 pb-2 mt-12 gap-8 w-[400px]">
                <span>
                  <MdEmail />
                </span>
                <Field
                  type="email"
                  placeholder="Your Email"
                  className="w-[90%]"
                  name="email"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />

              <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
                <span>
                  <IoIosLock />
                </span>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-[90%]"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600"
              />

              <div className="flex gap-6">
                <Field type="checkbox" className="h- w-4" name="" />
                <span>Remember me</span>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-400 py-3 px-5 rounded-md text-white"
                >
                  {isSubmitting ? "Logging in Please wait" : "Login"}
                  {/* Login in */}
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="mt-8 flex gap-2">
          <h4>Don't have an account.</h4>
          <Link to="/signup">
            <span className="text-blue-500">create one</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
