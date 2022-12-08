import React, { useRef, useState } from 'react';

import { Divider, IconButton, InputAdornment, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HttpsIcon from '@mui/icons-material/Https';
import {
  PermIdentity,
  PhoneAndroid,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialIcons from './SocialIcons';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from './utils/Validation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const SignUp = () => {
  const defaultValues = {
    username: '',
    phone: '',
    email: '',
    password: '',
  };

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(signupSchema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const [createUserWithEmailAndPassword, user, loading, signUpError] =
    useCreateUserWithEmailAndPassword(
      auth
      // , {
      //   sendEmailVerification: true,
      // }
    );

  const navigate = useNavigate();
  const location = useLocation();

  const [signUpToken, setSignUpToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (signUpToken) {
      navigate(from, { replace: true });
    }
  }, [signUpToken, navigate, from]);

  useEffect(() => {
    if (signUpError) {
      toast.error('Failed to create account!');
    }
    return;
  }, [signUpError]);

  if (loading) return;

  const onSubmit = async (values) => {
    const username = values.username.toLowerCase();
    const phone = values.phone;
    const email = values.email;
    const password = values.password;

    await createUserWithEmailAndPassword(email, password);

    const newUser = {
      username: username,
      phone: phone,
      email: email,
      password: password,
    };

    // console.log(newUser);

    // sign up method
    await fetch(`http://localhost:5000/api/auth/sign-up`, {
      method: 'POST',
      headers: {
        // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        // console.log('res ', res);
        return res.json();
      })
      .then((data) => {
        if (data) {
          // console.log('data inside user token ', data);
          const accessToken = data?.accessToken;
          localStorage?.setItem('accessToken', accessToken);
          setSignUpToken(accessToken);

          toast.success('Signing up Successful!');
          reset();
        } else {
          toast.error('Signing up Failed!');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" text-white authentication">
      <div className="authentication-content">
        <h1 className="text-white">Create Account</h1>

        <SocialIcons />
        <p className="mb-4">or use your email for registration</p>
        <Divider />
        <form
          name="SigninForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-5 "
        >
          <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
            <span className="mr-2 my-auto text-gray-500">
              {' '}
              <PermIdentity />
            </span>

            {/* <input type="text" placeholder="Name" ref={nameRef}
                            className="formNameField bg-transparent " 
                            /> */}

            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Name"
                  type="text"
                  className="bg-white rounded"
                  autoFocus={true}
                  placeholder="Name"
                  error={!!errors.username}
                  helpertext={errors?.username?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex  w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
            <span className="mr-2 text-gray-500 my-auto">
              {' '}
              <PhoneAndroid />
            </span>

            {/* <input type="text" placeholder="Email" ref={emailRef}
                            className="formEmailField bg-transparent " /> */}

            <Controller
              name="phone"
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
                  error={!!errors.phone}
                  helpertext={errors?.phone?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex w-3/4 py-2 rounded-2xl px-2 mb-5 bg-slate-100 mx-auto ">
            <span className="mr-2 text-gray-500 my-auto">
              {' '}
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
          <button className="btn w-1/3 my-4 button">Sign Up</button>
        </form>
        <div className="mt-6">
          <h1 className="text-white">Welcome Back!</h1>
          <p className="text-center text-white">
            To keep connected with us please sign in with your personal info
          </p>
          <Link to="/signin">
            {' '}
            <button className="btn w-1/3 my-4 button">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
