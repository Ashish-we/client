import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CompanySignup = () => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      companyName: companyName,
      email: email,
      password: password,
      registrationNo: registrationNo,
      address: address,
    };

    axios
      .post("/api/register", user)
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
      <div className="mt-10 flex rounded-tl-3xl rounded-br-3xl overflow-hidden">
        <div />
        <form
          className="w-1/2 mt-20 mb-20 ml-8 flex flex-col px-24"
          onSubmit={handleSubmit}
        >
          <div className="flex">
            <h2 className="text-2xl font-semibold mt-2">Company Sign Up</h2>
            <div className="ml-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <div className="mt-3">
            <p className="font-sans text-sm">
              Already have an account?
              <span className="text-blue-600 font-semibold">
                <Link to="/login"> Log in</Link>
              </span>
            </p>
          </div>
          <label className="font-semibold mt-2">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Password</label>
          <input
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">
            Registration No (PAN/VAT)
          </label>
          <input
            type="text"
            value={registrationNo}
            onChange={(e) => setRegistrationNo(e.target.value)}
            placeholder=""
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <label className="font-semibold mt-2">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder=""
            className="p-1 mt-1 w-72 border rounded-md border-blue-300 focus:ring-blue-500 
            focus:border-blue-500 outline-none"
          />

          <div className="flex mt-3">
            <input
              type="checkbox"
              className="border rounded-md border-blue-600"
            />
            <h2 className="ml-1 text-xs font-medium">
              Receive Email Updates
            </h2>
          </div>

          <div className="w-72 mt-2">
            <button
              type="submit"
              className="mt-1 text-white px-28 bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium text-sm sm:w-auto 
            py-2.5 text-center"
            >
              Sign up
            </button>
          </div>

          <div className="mt-4 text-xs text-slate-500">
            <p>By signing up, you agree to our </p>
            <p>
              <span className="underline">Privacy Policy</span> &{" "}
              <span className="underline">Terms of Service</span>
            </p>
          </div>
        </form>
        <div className="w-1/2 h-auto overflow-hidden">
          <img
            src="./signup.png"
            alt="Login"
            className="object-cover w-full h-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySignup;


     
