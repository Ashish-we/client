import React from "react";

const Footer = () => {
  return (
    <div className="font-poppins mx-32">
      <div className="text-center text-neutral-600 border-b-2 border-slate-200 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                INTERNSHIP
              </h6>
              <p>Get best companies for your perfect internship role</p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="my-1">
                <a href="#!" className="">
                  About Us
                </a>
              </p>
              <p className="my-1">
                <a href="#!" className="">
                  F.A.Q
                </a>
              </p>
              <p className="my-1">
                <a href="#!" className="">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="">
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Internship
              </h6>
              <p className="my-1">
                <a href="#!" className="">
                  Frontend
                </a>
              </p>
              <p className="my-1">
                <a href="#!" className="">
                  Backend
                </a>
              </p>
              <p className="my-1">
                <a href="#!" className="">
                  Customer Service
                </a>
              </p>
              <p className="my-1">
                <a href="#!" className="">
                  Marketing
                </a>
              </p>
            </div>
            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Join our Newsletter
              </h6>
              <div className="flex">
                <input
                  className="bg-slate-100 text-slate-300 text-sm"
                  placeholder="  deubaOli@gmail.com"
                />
                <button className="bg-blue-500 text-white px-4 py-2">
                  Subscribe
                </button>
              </div>

              <p className="mt-4 text-slate-400 text-xs flex items-center justify-center md:justify-start">
                * Will send you weekly updates for your better finance
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-4 ">
        Made with ❤️ by SAAN ORG. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
