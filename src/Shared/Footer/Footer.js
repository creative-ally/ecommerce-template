import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaHouzz, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 justify-evenly items-center bg-gray-200 text-zinc-500">
                {/* logo */}
                <div>
                    <FaHouzz className="h-10 w-10 text-zinc-700" />
                    <p>HATIL Furnitures
                        <br />
                        Providing reliable furnitures</p>
                </div>
                {/* contact us */}
                <div>
                    <span className="footer-title">Contact Us</span>
                    <div className='flex items-center'>
                        <ImLocation2 />
                        <p className='px-2'>Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex items-center'>
                        <HiPhone />
                        <p className='px-2'>+880 1000000000</p>
                    </div>
                    <div className='flex items-center'>
                        <HiMail />
                        <p className='px-2'>allyfurniture@gmail.com</p>
                    </div>
                </div>
                {/* more informations */}
                <div>
                    <span className="footer-title">More Information</span>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Feedback</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Return Policy</a>
                    <a className="link link-hover">Billing Terms and Conditions</a>
                </div>
                {/* social media icons  */}
                <div className='flex items-center justify-evenly text-zinc-700'>
                    <a className="link link-hover"><FaFacebookF className='h-5 w-5' /></a>
                    <a className="link link-hover"><FaInstagram className='h-5 w-5' /></a>
                    <a className="link link-hover"><FaLinkedinIn className='h-5 w-5' /></a>
                    <a className="link link-hover"><FaTwitter className='h-5 w-5' /></a>
                </div>

            </footer>
            <footer className="footer footer-center bg-black">
                <div>
                    <p className='footer-text'>&copy; Copyright 2022 ALLY Furniture. All Rights Reserved by CreativeAlly.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;