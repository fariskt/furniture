import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {

  const navigate = useNavigate()
  
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cart:[],
    cpassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email(" Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "password must be atleast 6 Characters")
      .required("password is required"),
    cpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  const handleSubmit = async (formData) => {
    const { name, email, password } = formData;

    const userData = {
      name,
      email,
      password,
      cart:[]
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/users",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=> {
    window.scrollTo(0,0)
  },[])

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
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col w-[400px] gap-6">
              <div className="flex border-b border-gray-400 pb-2 mt-12 gap-6 w-[400px]">
                <span>
                  <FaUser />
                </span>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-[90%]"
                />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600"
              />
              <div className="flex border-b border-gray-400 pb-2 gap-8 w-[400px]">
                <span>
                  <MdEmail />
                </span>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-[90%]"
                />
              </div>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600"
              />
              <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
                <span>
                  <IoMdLock />
                </span>
                <Field
                  type="password"
                  id="password"
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
              <div className="flex border-b pb-2 border-gray-400 gap-8 w-[400px]">
                <span>
                  <IoIosLock />
                </span>
                <Field
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  placeholder="Confirm Password"
                  className="w-[90%]"
                />
              </div>
              <ErrorMessage
                name="cpassword"
                component="div"
                className="text-red-600"
              />

              <div className="flex gap-4">
                <Field
                  type="checkbox"
                  className="h- w-4"
                  name="terms"
                  id="terms"
                />
                <span>I agree all statements in Terms of service</span>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-green-400 py-3 px-5 rounded-md text-white"
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
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
