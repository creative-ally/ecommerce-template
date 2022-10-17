import { Divider } from '@mui/material';
import React from 'react';
import { HiMail, HiPhone, HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div>
            {/* first nav */}
            <div class=" bg-gray-200 px-14 text-end py-1">
                <div>
                    <Link to={''} className='px-2 text-zinc-500'>Blog</Link>
                    <Link to={''} className='px-2 text-zinc-500'>Showroom Locator</Link>
                    <Link to={''} className='px-2 text-zinc-500'>Help</Link>
                    <Link to='/signin' className='px-2 text-zinc-500'>Login</Link>
                    <Link to='/register' className='px-2 text-zinc-500'>Register</Link>
                </div>
            </div>
            {/* second nav */}
            <div class="navbar bg-gray-50 px-14 py-5">
                {/* phone and mail */}
                <div class="navbar-start text-zinc-600">
                    <div>
                        <div className='flex items-center'>
                            <HiPhone />
                            <p className='px-2'>+880 1000000000</p>
                        </div>
                        <div className='flex items-center'>
                            <HiMail />
                            <p className='px-2'>hatilfurniture@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* name and logo */}
                <div class="navbar-center">
                    <Link to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                {/* search and cart */}
                <div class="navbar-end">
                    <button class="btn btn-ghost btn-circle">
                        <HiOutlineSearch className='h-6 w-6 text-zinc-600' />
                    </button>
                    <button class="btn btn-ghost btn-circle">
                        <div class="indicator">
                            <HiOutlineShoppingCart className='h-6 w-6 text-zinc-600' />
                            <span class="badge badge-xs badge-error indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
            <Divider/>
            {/* third nav */}
            <div class=" bg-gray-50 px-14 text-end py-1 flex justify-evenly">
                <Link to={''} className='px-2 text-zinc-500'>New</Link>
                <Link to={''} className='px-2 text-zinc-500'>Living Bedroom</Link>
                <Link to={''} className='px-2 text-zinc-500'>Dining</Link>
                <Link to={''} className='px-2 text-zinc-500'>Kitchen</Link>
                <Link to='/doors' className='px-2 text-zinc-500'>Door</Link>
                <Link to={''} className='px-2 text-zinc-500'>Interior</Link>
                <Link to={''} className='px-2 text-zinc-500'>Office</Link>
            </div>
        </div>
    );
};

export default Navbar;