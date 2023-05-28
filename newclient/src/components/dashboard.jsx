import React, { useEffect, useState } from "react";
import axios from "axios";
import { Await, Link } from "react-router-dom" 


const dashboard =({token,name,skills,mail}) => { 

const token1 = token;
const [data, setData] = useState('');

  console.log(token1);


  


  useEffect(() => {
   
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://127.0.0.1:8000/api/details',
      headers: { 
        'Accept': 'application/vnd.api+json', 
        'Content-Type': 'application/vnd.api+json', 
        'Authorization': `Bearer ${token}`,
      }
    };
   
    
    axios.request(config)
    .then((response) => {
      
    //  setData(JSON.stringify(response.data));
     setData(response.data);

      // const data1 =  JSON.stringify(response.data);
      // console.log(data1);
      // return JSON.stringify(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    

  //   // const data2 = config.JSON.stringify(response.data);
  //   // console.log(data);

  //   // console.log(data.user.name);

  //   // const user = {
  //   //   name: data.data.user.name,
  //   //   email: data.data.user.email,
  //   //   skills: data.data.user.skills,
  //   // }



  //   // let config = {
  //   //   method: "get",
  //   //   url: "http://127.0.0.1:8000/api/details",
  //   //   headers: {
  //   //     "Authorization": `Bearer ${token2}`,
  //   //   },
  //   // }
  //   // console.log(config);
  //   // let data =  JSON.stringify(config);
  
  //   // console.log(data);
  
  //   //   const user  = { 
  //   //     name: data.data,
  
  
  //   //   }
  //   //   console.log(data);

  //   console.log(data);
  }, []);






    return (
<div className="font-poppins antialiased">
  <h2>Token:{token}</h2>
  {/* <h1>Name : {user.name}</h1> */}
    <div
      id="view"
      className="h-full w-screen flex flex-row"
    >
      <button
        // @click="sidenav = true"
        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
      >
        <svg
          className="w-5 h-5 fill-current"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="sidebar"
        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        x-show="sidenav"
        // @click.away="sidenav = false"
      >
        <div className="space-y-6 md:space-y-10 mt-10">
          <h1 className="font-bold text-4xl text-center md:hidden">
            D<span className="text-teal-600">.</span>
          </h1>
          <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
            meroInternship<span className="text-teal-600">.</span>
          </h1>
          <div id="profile" className="space-y-3">
            <img
              src="https://logodix.com/logo/1727578.png"
              alt="Avatar user"
              className="w-10 md:w-16 rounded-full mx-auto"
            />
            <div>
              <h2
                className="font-medium text-xs md:text-sm text-center text-teal-500"
              >
               {name}
              </h2>
              <p className="text-xs text-gray-500 text-center">{mail}</p>
            </div>
          </div>
          <div
            className="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500"
          >
            <input
              type="text"
              className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
              placeholder="Search"
            />
            <button
              className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block"
            >
              <svg
                className="w-4 h-4 fill-current"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div id="menu" className="flex flex-col space-y-2">
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                ></path>
              </svg>
              <span className="">{skills}</span>
            </a>
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                ></path>
              </svg>
              <span className="">My Resume</span>
            </a>
            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="">Applied Jobs</span>
            </a>
           


            <a
              href=""
              className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
            >
              <svg
                className="w-6 h-6 fill-current inline-block"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="">My Profile</span>
            </a>


           
         
           {/* logut button */}
   <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md">
  Logout
</button> 


{/*delete profile button  */}
<button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md">
  Delete Profile
</button> 
          </div>
        </div>
      </div>
      <div className="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md">
  <div>
    <span className="text-purple-800 text-sm">Engineering</span>
    <h3 className="font-bold mt-px">Senior Full Stack Backend Engineer</h3>
    <div className="flex items-center gap-3 mt-2">
      <span className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm">Full-time</span>
      <span className="text-slate-600 text-sm flex gap-1 items-center"> <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> Remote, UK</span>
    </div>
  </div>
  <div>
    <button className="bg-purple-900 text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center">Apply Now <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
</svg>
</button>
  </div>
   </div> 
    </div>  







  </div> 
    );
}; 
export default dashboard;