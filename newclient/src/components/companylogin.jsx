import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Companylogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    axios
      .post("/api/login", user)
      .then((response) => {
        console.log(response);
        // handle success response
      })
      .catch((error) => {
        console.log(error);
        // handle error response
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
            <h2 className=" text-2xl font-semibold mt-2">Company Login</h2>
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
            onChange={(e) => e.target.value}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />
          <label className="font-semibold mt-2">Password</label>
          <input
            placeholder=""
            type="password"
            value={password}
            onChange={(e) => e.target.value}
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

export default Companylogin;
