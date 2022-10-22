import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { Divider } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex lg:justify-center py-20 px-20 text-white ">
      <div className="w-2/4 px-10 py-10 text-center bg-gradient-to-r from-orange-600 to-orange-400 ...">
        <h1 className="text-[40px] font-bold">Sign in to Your Account</h1>
        <p className="mb-4">Sign in using social networks</p>
        <div className="mb-4 text-black">
          <span className="mx-1">
            {" "}
            <FacebookOutlinedIcon />
          </span>
          <span className="mx-2">
            {" "}
            <GoogleIcon />
          </span>
          <span className="mx-2">
            {" "}
            <LinkedInIcon />
          </span>
        </div>
        <Divider />
        <form onSubmit={handleSubmit} className="mt-5 ">
          <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
            <span className="mr-2 text-gray-500">
              {" "}
              <MailOutlineIcon />
            </span>

            <input type="text" placeholder="Email"
            className="formEmailField bg-transparent "/>
          </div>

          <div className="flex justify-between w-3/4 py-2 rounded-2xl px-2 mx-auto bg-slate-100 ">
            <div className="flex items-center">
              <span className="mr-2 text-gray-500">
                <HttpsIcon />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="formPasswordField bg-transparent"
              />
            </div>

            <span className="cursor-pointer">
              <RemoveRedEyeOutlinedIcon />
            </span>
          </div>
          <button className="w-1/3 bg-yellow-500 text-white py-2 rounded-2xl mt-5 font-semibold">
            Sign In
          </button>
        </form>
      </div>
      <div className=" mx-2 w-4/12 px-10 py-10 bg-gradient-to-r from-amber-600 to-amber-500  ... flex flex-col justify-center text-center">
        <h1 className="text-[35px] font-bold mb-5">New Here?</h1>
        <p>Sign up and discover a great amount of new opportunities!</p>
        <Link to ='/signup'><button className="w-full bg-white text-black py-2 rounded-2xl mt-5 font-semibold">
          Sign Up
        </button></Link>
      </div>
    </div>
  );
};

export default SignIn;
