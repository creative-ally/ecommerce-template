import { Search } from '@material-ui/icons';
import { IconButton, InputBase, Paper } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { HiMail, HiPhone, HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";
import { useEffect } from 'react';
// import { HiMail, HiPhone, HiOutlineShoppingCart } from "react-icons/hi";
import { Divider } from '@mui/material';
// import React from 'react';
import { HiOutlineBellAlert } from "react-icons/hi2";
import { BsBookmarkHeart } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import SearchProducts from '../../SearchProducts/SearchProducts';

const Navbar = () => {

    const [searchProducts, setSearchProducts] = useState([]);
    const handleSearch = event => {
        event.preventDefault();
        const searchText = event.target.search.value;



        const url = `http://localhost:5000/api/product/search/${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSearchProducts(data.data))
    }
    console.log(searchProducts)
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
            <div className=" bg-gray-200 text-end py-1">
                <div className='container'>
                    <Link to={'/blog'} className='px-2 text-zinc-500'>Blog</Link>
                    <Link to={'/showroomLocator'} className='px-2 text-zinc-500'>Showroom Locator</Link>
                    <Link to={'/help'} className='px-2 text-zinc-500'>Help</Link>
                    <Link to='/signin' className='px-2 text-zinc-500'>SignIn</Link>
                    <Link to='/signup' className='px-2 text-zinc-500'>SignUp</Link>
                </div>
            </div>
            {/* second nav */}
            <div className="navbar bg-gray-50">
                <div className='container'>
                    {/* phone and mail */}
                    <div className="navbar-start text-zinc-600">
                        
                            <div className='flex items-center'>
                                <HiPhone />
                                <p className='px-2'>+880 1000000000</p>
                            </div>
                            <div className='flex items-center'>
                                <HiMail />
                                <p className='px-2'>allyfurniture@gmail.com</p>
                            </div>
                        
                    </div>
                    {/* name and logo */}
                    <div className="navbar-center w-1/3">
                        <Link to={'/'}>
                            <img className='w-1/5 mx-auto' src={Logo} alt="" />
                        </Link>
                    </div>

                    {/* search, cart, notification, wishlist */}
                    <div className="navbar-end">
                        <div className='flex justify-end'>
                            {/* Search form */}
                            <form onSubmit={handleSearch}>
                                {/* Search Input Start */}

                                <div className='flex justify-end'>
                                    <input required type="text" name="search" className='shadow-md text-black p-3 rounded-full' on placeholder='search'></input>

                                    {/* Search Input End */}


                                    <button type="submit" className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral" >
                                        <HiOutlineSearch className='icon' />
                                    </button>
                                </div>
                            </form>
                            <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                                <div className="indicator">
                                    <HiOutlineShoppingCart className='icon' />
                                    <span className="badge badge-xs badge-warning indicator-item"></span>
                                </div>
                            </button>
                            <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                                <div className="indicator">
                                    <HiOutlineBellAlert className='icon' />
                                    <span className="badge badge-xs badge-warning indicator-item"></span>
                                </div>
                            </button>
                            <button className="btn btn-ghost btn-circle hover:shadow-md hover:shadow-neutral">
                                <div className="indicator">
                                    <BsBookmarkHeart className='icon' />
                                    <span className="badge badge-xs badge-warning indicator-item"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            {/* third nav */}
            <div className=" bg-gray-50 text-center py-2">
                <div className='container flex justify-evenly'>
                    <Link to={''} className='px-2 text-zinc-500'>New</Link>
                    {
                        categories.map((category, index) =>
                            <Link key={index} to={`/${category.name}`} className='px-2 text-zinc-500'>{category.name}</Link>
                        )
                    }
                </div>
            </div>
            {/* <div>
               Search Products: {searchProducts.length}

              
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>{
                searchProducts.map(searchProduct=><SearchProducts key={searchProduct._id} searchProduct={searchProduct} ></SearchProducts>)
              }</div>
            </div> */}
        </div>
    );
};

export default Navbar;