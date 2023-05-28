import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import AuthUser from "./AuthUser"
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import Loginapi from "../Request";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const api = Loginapi;
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };
    // const showToast = () => {
    //   toast(" Let's toast to this toast today! ");
    // };

    axios
      .post(api, user)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.data.token);
        const token = response.data.data.token
        setToken(token); // Pass the token to setToken function
        setIsLoggedIn(true);  
        // const token =response.data
        // console.log(response.data);
        // console.log(response.data.user);
        // console.log(response.status);
        // console.log(response.data.token);
        // handle success response
        if (response.status === 200) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
        // handle error response
        navigate("/login");
        alert("Email or Password wrong");
      });
  };


  return (
    <div className="my-10 mx-64 font-poppins">
      <div
        className="mt-10 flex rounded-tr-3xl 
        rounded-bl-3xl overflow-hidden"
      >
        <div className="w-1/2 h-auto overflow-hidden ">
          <img
            src="./login.png"
            alt="Login"
            className="object-cover w-full h-full mx-auto"
          />
        </div>
        <div />
        <form
          className="w-1/2 mt-20 mb-20 ml-8 flex flex-col px-24"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <h2 className=" text-2xl font-semibold mt-2">Login</h2>
            <div className="ml-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <div className="mt-3">
            <p className="font-sans text-sm">
              Don't have an account yet?
              <span className="text-blue-600 font-semibold">
                <Link to="/signup">Register</Link>
              </span>
            </p>
          </div>
          <label className="font-semibold mt-2">Email</label>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
              focus:border-blue-500 outline-none"
          />
          <label className="font-semibold mt-2">Password</label>
          <input
            placeholder=""
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
              focus:border-blue-500 outline-none"
          />
          <div className="flex mt-3">
            <input
              type="checkbox"
              className="border rounded-md border-blue-600"
            />
            <h2 className="ml-1 text-xs font-medium">Remember me</h2>
          </div>
          <div className="w-72 mt-2">
            <button
              type="submit"
              className="mt-1 text-white px-28 bg-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:ring-blue-300 font-medium text-sm sm:w-auto 
              py-2.5 text-center"
            >
              Log In
            </button>
          </div>
          <div className="mt-4 text-xs text-slate-500">
            <p>By log in you agree to our </p>
            <p>
              <span className="underline">Privacy Policy</span> &{" "}
              <span className="underline">Terms of Service</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
