import React from 'react';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const SocialIcons = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div className="my-4 text-black">
        <span className="mx-1">
            {" "}
            <FacebookOutlinedIcon />
        </span>
        <span onClick={() => signInWithGoogle()} className="mx-2">
            {" "}
            <GoogleIcon />
        </span>
        <span className="mx-2">
            {" "}
            <LinkedInIcon />
        </span>
    </div>
    );
};

export default SocialIcons;