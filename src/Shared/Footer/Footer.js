import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaHouzz, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 justify-evenly items-center bg-gray-200 text-zinc-500">
                {/* logo */}
                <div>
                    <FaHouzz className="h-10 w-10 text-zinc-700" />
                    <p>HATIL Furnitures
                        <br />
                        Providing reliable furnitures</p>
                </div>
                {/* contact us */}
                <div>
                    <span class="footer-title">Contact Us</span>
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
                        <p className='px-2'>hatilfurniture@gmail.com</p>
                    </div>
                </div>
                {/* more informations */}
                <div>
                    <span class="footer-title">More Information</span>
                    <a class="link link-hover">FAQ</a>
                    <a class="link link-hover">Feedback</a>
                    <a class="link link-hover">Privacy Policy</a>
                    <a class="link link-hover">Return Policy</a>
                    <a class="link link-hover">Billing Terms and Conditions</a>
                </div>
                {/* social media icons  */}
                <div className='flex items-center justify-evenly text-zinc-700'>
                    <a class="link link-hover"><FaFacebookF className='h-5 w-5' /></a>
                    <a class="link link-hover"><FaInstagram className='h-5 w-5' /></a>
                    <a class="link link-hover"><FaLinkedinIn className='h-5 w-5' /></a>
                    <a class="link link-hover"><FaTwitter className='h-5 w-5' /></a>
                </div>

            </footer>
            <footer class="footer footer-center p-4 bg-black text-white">
                <div>
                    <p>&copy; Copyright 2022 HATIL. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;