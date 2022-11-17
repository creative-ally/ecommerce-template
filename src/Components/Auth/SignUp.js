import React, { useRef, useState } from "react";

import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { PermIdentity, PhoneAndroid, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialIcons from "./SocialIcons";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./utils/Validation";

const SignUp = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const nevigate = useNavigate();

    const defaultValues = {
        email: '',
        firstname: '',
        phonenumber: '',
        password: '',

    };

    const { control, formState, handleSubmit, reset } = useForm({
        mode: 'onChange',
        defaultValues,
        resolver: yupResolver(signupSchema),
    });

    const { isValid, dirtyFields, errors } = formState;


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (user) {
        nevigate('/')
    }
    const onSubmit = (values) => {
        console.log(values)
        createUserWithEmailAndPassword(values.email, values.password);
    }


    return (
        <div className=" text-white authentication">
            <div className="authentication-content">
                <h1 className="text-[40px] font-bold">Create Account</h1>

                <SocialIcons />
                <p className="mb-4">or use your email for registration</p>
                <Divider />
                <form onChange={handleSubmit(onSubmit)} className="mt-5 ">
                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 my-auto text-gray-500">
                            {" "}
                            <PermIdentity />
                        </span>

                        {/* <input type="text" placeholder="Name" ref={nameRef}
                            className="formNameField bg-transparent " 
                            /> */}

                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Name"
                                    type="text"
                                    className="bg-white rounded"
                                    autoFocus={true}
                                    placeholder="Name"
                                    error={!!errors.name}
                                    helpertext={errors?.name?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />
                    </div>

                    <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500 my-auto">
                            {" "}
                            <PhoneAndroid />
                        </span>

                        {/* <input type="text" placeholder="Email" ref={emailRef}
                            className="formEmailField bg-transparent " /> */}

                        <Controller
                            name="phonenumber"
                            control={control}
                            rules={{
                                required: true,
                                validate: (value) => {
                                    if (value === '') {
                                        return 'Please provide input name';
                                    }
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Phone"
                                    type="tel"
                                    className="bg-white rounded"
                                    autoFocus={true}
                                    placeholder="Phone"
                                    error={!!errors.phonenumber}
                                    helpertext={errors?.phonenumber?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                            )}
                        />
                    </div>

                    <div className="flex w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
                        <span className="mr-2 text-gray-500 my-auto">
                            {" "}
                            <MailOutlineIcon />
                        </span>

                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Email"
                                    type="email"
                                    className=" formEmailField bg-transparent"
                                    autoFocus={true}
                                    placeholder="Email"
                                    helpertext={errors?.email?.message}
                                    variant="outlined"
                                    error={!!errors?.email}
                                    required
                                    fullWidth
                                />
                            )}
                        />
                    </div>



                    {/* <div className="flex items-center">
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
                        </span> */}

                    <div className="flex justify-between w-3/4 py-2 rounded-2xl px-2 mx-auto bg-slate-100 ">
                        <span className="mr-2 text-gray-500 my-auto">
                            <HttpsIcon />
                        </span>

                        <Controller
                            name="password"
                            control={control}
                            rules={{
                                required: true,
                                validate: (value) => {
                                    if (value === '') {
                                        return 'Please provide input name';
                                    }
                                },
                            }}
                            render={({ field, formState }) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    placeholder="Password"
                                    className="formEmailField bg-transparent"
                                    autoFocus={true}
                                    autoComplete="new-password"
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!errors?.password}
                                    helpertext={errors?.password?.message}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
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
