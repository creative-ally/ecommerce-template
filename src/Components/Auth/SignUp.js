import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { Divider } from "@mui/material";
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
        <div className="flex justify-center py-20 px-20 text-white authentication">
            <div className="w-2/4 p-10 text-center shadow-2xl shadow-black">
                <h1 className="text-[40px] font-bold">Create Account</h1>

                <div className="my-4 text-black">
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
                <p className="mb-4">or use your email for registration</p>
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
                    <h1 className="text-[35px] font-bold">Welcome Back!</h1>
                    <p>To keep connected with us please sign in with your personal info</p>
                    <Link to='/signin'> <button className="btn w-1/3 my-4 button">
                        Sign In
                    </button></Link>
                </div>
            </div>

        </div>
    );
};

export default SignUp;
