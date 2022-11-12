import React from 'react';
// import { HiMail, HiPhone, HiOutlineShoppingCart } from "react-icons/hi";
import { Divider } from '@mui/material';
// import React from 'react';
import { HiMail, HiPhone, HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Navbar = () => {
    const categories = [
        { "name": "Bedroom" },
        { "name": "Dining" },
        { "name": "Office" },
        { "name": "Door" },
        { "name": "Interior" }
    ]

    return (
        <div>
            {/* first nav */}
            <div className=" bg-gray-200 px-14 text-end py-1">
                <div>
                    <Link to={'/blog'} className='px-2 text-zinc-500'>Blog</Link>
                    <Link to={'/showroomLocator'} className='px-2 text-zinc-500'>Showroom Locator</Link>
                    <Link to={'/help'} className='px-2 text-zinc-500'>Help</Link>
                    <Link to='/signin' className='px-2 text-zinc-500'>SignIn</Link>
                    <Link to='/signup' className='px-2 text-zinc-500'>SignUp</Link>
                </div>
            </div>
            {/* second nav */}
            <div className="navbar bg-gray-50 px-14 py-0">
                {/* phone and mail */}
                <div className="navbar-start text-zinc-600">
                    <div>
                        <div className='flex items-center'>
                            <HiPhone />
                            <p className='px-2'>+880 1000000000</p>
                        </div>
                        <div className='flex items-center'>
                            <HiMail />
                            <p className='px-2'>allyfurniture@gmail.com</p>
                        </div>
                    </div>
                </div>
                {/* name and logo */}
                <div className="navbar-center">
                    <Link to={'/'}>
                        <img className='w-1/5 mx-auto' src={Logo} alt="" />
                    </Link>
                </div>
                {/* search and cart */}
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                        <HiOutlineSearch className='h-6 w-6 text-zinc-600' />
                    </button>
                    <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                        <div className="indicator">
                            <HiOutlineShoppingCart className='h-6 w-6 text-zinc-600' />
                            <span className="badge badge-xs badge-warning indicator-item"></span>
                        </div>
                    </button>
                    <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                        <div className="indicator">
                            <HiOutlineBellAlert className='h-6 w-6 text-zinc-600' />
                            <span className="badge badge-xs badge-warning indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
            <Divider />
            {/* third nav */}
            <div className=" bg-gray-50 px-14 text-end py-2 flex justify-evenly">
                <Link to={''} className='px-2 text-zinc-500'>New</Link>
                {
                    categories.map((category, index) =>
                        <Link key={index} to={`/${category.name}`} className='px-2 text-zinc-500'>{category.name}</Link>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;