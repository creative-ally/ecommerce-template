import { Search } from '@material-ui/icons';
import { IconButton, InputBase, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { HiMail, HiPhone, HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const categories = [
        {"name" : "Bedroom"},
        {"name" : "Dining"},
        {"name" : "Office"},
        {"name" : "Door"},
        {"name" : "Interior"}
    ]

    return (
        <div>
            <div class="flex flex-row justify-between px-12  py-3 items-center bg-grey-100">
                <div className='flex flex-col'>
                    <div className='flex items-center'>
                        <HiPhone />
                        <p className='px-2'>+880 1000000000</p>
                    </div>
                    <div className='flex items-center'>
                        <HiMail />
                        <p className='px-2'>furniture@gmail.com</p>
                    </div>
                </div>
                <div>
                    <Paper component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search any product"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <Search />
                        </IconButton>
                    </Paper>
                </div>

            </div>
            {/* second nav */}
            <div class="navbar px-14 bg-teal-600 py-5 text-white">
                {/* phone and mail */}
                <div class="navbar-start ">
                    <Link to={'/'}>
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <div class="navbar-center">
                    {
                        categories.map((category, index) => 
                        <Link key={index} to={`/${category.name}`} className='px-2 '>{category.name}</Link>
                        )
                    }
                    {/* <Link to={''} className='px-2 '>Living Bedroom</Link>
                    <Link to='/dining' className='px-2 '>Dining</Link>
                    <Link to='/kitchen' className='px-2 '>Kitchen</Link>
                    <Link to='/doors' className='px-2 '>Door</Link>
                    <Link to="/interior" className='px-2 '>Interior</Link>
                    <Link to='/office' className='px-2 '>Office</Link>
                    <Link to='/blog' className='px-2 '>Blog</Link> */}
                </div>
                <div class="navbar-end">

                    <HiOutlineShoppingCart className='h-6 w-6 ' />
                    <span class="badge badge-xs badge-error indicator-item"></span>
                    <Link to="/signin" className='px-2 '>SignIn</Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;