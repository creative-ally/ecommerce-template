import React, { useRef, useState } from "react";

import { Divider } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { PermIdentity } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import SocialIcons from "./SocialIcons";

const SignUp = () => {
    
    const nameRef = useRef()
    const emailRef = useRef();
    const passwordRef = useRef()

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user,error] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   let errorMessage;
    if (user) {
        navigate('/');
    }
    if (error) {
        errorMessage = <p className="text-red">{error?.message}</p>;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password);
    }

    
    return (
        <div className="flex justify-center py-20 px-20 text-black authentication">
            <div className="w-2/4 p-10 text-center shadow-2xl shadow-black">
                <h1 className="text-[40px] font-bold">Create Account</h1>

              <SocialIcons/>
                <p className="mb-4">or use your email for registration</p>
                <Divider />
                <form onSubmit={handleSubmit} className="mt-5 ">
                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500">
                            {" "}
                            <PermIdentity />
                        </span>

                        <input type="text" placeholder="Name" ref={nameRef}
                            className="formNameField bg-transparent " 
                            />
                    </div>

                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500">
                            {" "}
                            <MailOutlineIcon />
                        </span>

                        <input type="text" placeholder="Email" ref={emailRef}
                            className="formEmailField bg-transparent " />
                    </div>

                    <div className="flex justify-between w-3/4 py-2 rounded-2xl px-2 mx-auto bg-slate-100 ">
                        <div className="flex items-center">
                            <span className="mr-2 text-gray-500">
                                <HttpsIcon />
                            </span>
                            <input
                                type="password" ref={passwordRef}
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
                    {errorMessage}
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
