import React, { useState } from "react";
import { Divider, IconButton, InputAdornment, TextField } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HttpsIcon from "@mui/icons-material/Https";
import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { Controller, useForm } from 'react-hook-form';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from "./utils/Validation";
import Loader from "../../Shared/Loader/Loader";

const SignIn = () => {
  const defaultValues = {
    email: '',
    password: '',
  };

  const navigate = useNavigate()
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(loginSchema),
  });
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  const { isValid, dirtyFields, errors } = formState;
  if (loading) {
    return <Loader />
  }
  if (user) {

    navigate('/')
  }

  const onSubmit = (values) => {
    console.log(values)
    signInWithEmailAndPassword(values.email, values.password)

  }


  return (
    <div className="flex lg:justify-center py-20 px-20 text-white authentication">
      <div className="w-2/4 px-10 py-10 text-center shadow-2xl shadow-black">
        <h1 className="text-[40px] font-bold">Sign in to Your Account</h1>
        <p className="mb-4">Sign in using social networks</p>
     
        <SocialIcons />
        <Divider />

        <form
          name="SigninForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5">

          <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
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


          <div className="flex flex-col my-5 mx-auto ">
            <Link to="/forgotpass">
              <span className="mx-auto text-white cursor-pointer mb-5">
                Forget Password?
              </span>
            </Link>
            <button className="btn w-1/3 my-4 button mx-auto ">
              Sign In
            </button>

          </div>




        </form>

        {/* <form onSubmit={handleSubmit} className="mt-5 ">
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
            Sign In
          </button>
        </form> */}
        <div className="mt-6">
          <h1 className="text-[35px] font-bold">New Here?</h1>
          <p>Sign up and discover a great amount of new opportunities!</p>
          <Link to='/signup'><button className="btn w-1/3 mt-4 button">
            Sign Up
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
