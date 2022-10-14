import React from 'react';
import { ImLocation2 } from "react-icons/im";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaHouzz, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer class="footer p-10 bg-base-200 text-base-content">
                {/* logo */}
                <div>
                    <FaHouzz className="h-10 w-10" />
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
                <div className='flex items-center my-auto'>
                    <a class="link link-hover"><FaFacebookF className='mx-1 h-5 w-5' /></a>
                    <a class="link link-hover"><FaInstagram className='mx-1 h-5 w-5' /></a>
                    <a class="link link-hover"><FaLinkedinIn className='mx-1 h-5 w-5' /></a>
                    <a class="link link-hover"><FaTwitter className='mx-1 h-5 w-5' /></a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;