import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const SocialIcons = () => {
  const [signInWithGoogle, googleUser, loading, googleError] =
    useSignInWithGoogle(auth);

  const navigate = useNavigate();
  const location = useLocation();

  const [googleToken, setGoogleToken] = useState('');

  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (googleToken) {
      navigate(from, { replace: true });
    }
  }, [googleToken, navigate, from]);

  useEffect(() => {
    if (googleError) {
      toast.error('Failed to create account!');
    }
    return;
  }, [googleError]);

  if (loading) return;

  const googleSignIn = async () => {
    await signInWithGoogle();

    const socialUser = {
      username: googleUser?.user?.displayName.toLowerCase(),
      email: googleUser?.user?.email,
      image: googleUser?.user?.photoURL || 'https://ibb.co/0FJd9Jz',
      isSignInWithGoogle: true,
    };

    // console.log(socialUser);

    // google sign in method
    await fetch(`http://localhost:5000/api/auth/google/sign-in`, {
      method: 'POST',
      headers: {
        // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(socialUser),
    })
      .then((res) => {
        // console.log('res ', res);
        return res.json();
      })
      .then((data) => {
        if (data) {
          //   console.log('data inside user token ', data);
          const accessToken = data?.accessToken;
          localStorage?.setItem('accessToken', accessToken);
          setGoogleToken(accessToken);

          toast.success('Signing with google is Successful!');
        } else {
          toast.error('Signing with google is Failed!');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="my-4 text-black">
      <span className="mx-1">
        {' '}
        <FacebookOutlinedIcon />
      </span>
      <span onClick={googleSignIn} className="mx-2 cursor-pointer">
        {' '}
        <GoogleIcon />
      </span>
      <span className="mx-2">
        {' '}
        <LinkedInIcon />
      </span>
    </div>
  );
};

export default SocialIcons;
