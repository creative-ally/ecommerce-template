import React from "react";
// import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GoogleIcon from "@mui/icons-material/Google";
import { Divider } from "@mui/material";
import { ImFacebook2, ImGoogle2, ImLinkedin } from "react-icons/im";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { PermIdentity } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className=" text-white authentication">
            <div className="authentication-content">
                <h1 className="text-white">Create Account</h1>

                <div className="justify-center text-white flex">
          <span className="mx-2 hover:text-primary">
            {" "}
            <ImFacebook2 className="w-6 h-6"/>
            {/* <FacebookOutlinedIcon /> */}
          </span>
          <span className="mx-2 hover:text-primary">
            {" "}
            <ImGoogle2 className="w-6 h-6"/>
            {/* <GoogleIcon /> */}
          </span>
          <span className="mx-2 hover:text-primary">
            {" "}
            <ImLinkedin className="w-6 h-6"/>
            {/* <LinkedInIcon /> */}
          </span>
        </div>
                <p className="text-center text-white my-4">or use your email for registration</p>
                <Divider />
                <form onSubmit={handleSubmit} className="mt-5 ">
                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500">
                            {" "}
                            <PermIdentity />
                        </span>

                        <input type="text" placeholder="Name"
                            className="formNameField bg-transparent " />
                    </div>

                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500">
                            {" "}
                            <MailOutlineIcon />
                        </span>

                        <input type="text" placeholder="Email"
                            className="formEmailField bg-transparent " />
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
                    <button className="btn w-1/3 my-4 button">
                        Sign Up
                    </button>
                </form>
                <div className="mt-6">
                    <h1 className="text-white">Welcome Back!</h1>
                    <p className="text-center text-white">To keep connected with us please sign in with your personal info</p>
                    <Link to='/signin'> <button className="btn w-1/3 my-4 button">
                        Sign In
                    </button></Link>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
