import React from 'react';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
const SocialIcons = () => {
    return (
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
    );
};

export default SocialIcons;