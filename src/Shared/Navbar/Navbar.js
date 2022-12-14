import React, { useState } from 'react';
import {
  HiMail,
  HiPhone,
  HiOutlineShoppingCart,
  HiOutlineSearch,
} from 'react-icons/hi';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { BsBookmarkHeart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import SearchProducts from '../../SearchProducts/SearchProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import OpenCart from '../../Components/ShoppingCart/OpenCart';
import { LockPersonOutlined } from '@mui/icons-material';

const Navbar = () => {
  const [searchProducts, setSearchProducts] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [openCart, setOpenCart] = useState(false);

  const open = Boolean(openCart);
  const handleClick = (event) => {
    setOpenCart(event.currentTarget);
  };

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    // console.log(searchText);
    console.log(inputValue);
    if (inputValue === '') {
      //   alert("please write something");
      //   return;
    } else {
      const url = `http://localhost:5000/api/product/search/${inputValue}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setSearchProducts(data.data));
    }
  };

  const categories = [
    { name: 'Bedroom' },
    { name: 'Dining' },
    { name: 'Office' },
    { name: 'Door' },
    { name: 'Interior' },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [user, loading] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage?.removeItem('accessToken');
  };

  if (loading) {
    return;
  }

  return (
    <div>
      {console.log(user)}
      {/* first nav */}
      <div className=" bg-gray-200 text-end py-1">
        <div className="container">
          <Link to={'/blog'} className="px-2 text-zinc-500">
            Blog
          </Link>
          <Link to={'/showroomLocator'} className="px-2 text-zinc-500">
            Showroom Locator
          </Link>
          <Link to={'/help'} className="px-2 text-zinc-500">
            Help
          </Link>
          {user ? (
            <>
              {console.log(user)}
              <h6 onClick={logout}>Logout</h6>
            </>
          ) : (
            <>
              {console.log(user)}
              <Link to="/signin" className="px-2 text-zinc-500">
                SignIn
              </Link>
              <Link to="/signup" className="px-2 text-zinc-500">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
      {/* second nav */}
      <div className="navbar bg-gray-50">
        <div className="container">
          {/* phone and mail */}
          <div className="navbar-start text-zinc-600">
            <div className="flex items-center">
              <HiPhone />
              <p className="px-2">+880 1000000000</p>
            </div>
            <div className="flex items-center">
              <HiMail />
              <p className="px-2">allyfurniture@gmail.com</p>
            </div>
          </div>
          {/* name and logo */}
          <div className="navbar-center w-1/3">
            <Link to={'/'}>
              <img className="w-1/5 mx-auto" src={Logo} alt="" />
            </Link>
          </div>

          {/* search, cart, notification, wishlist */}
          <div className="navbar-end">
            <div className="flex justify-end">
              {/* Search form */}
              <form onSubmit={handleSearch}>
                {/* Search Input Start */}

                <div className="flex justify-end">
                  <input
                    onBlur={handleInputValue}
                    // required
                    type="text"
                    name="search"
                    className="shadow-md text-black p-3 rounded-full"
                    on
                    placeholder="search"
                  ></input>

                  {/* Search Input End */}

                  <button type="submit" className="">
                    <label
                      htmlFor="my-modal-5"
                      className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral  "
                    >
                      {' '}
                      <HiOutlineSearch className="icon" />
                    </label>
                  </button>
                </div>
              </form>
              <div>
                <button
                  id="demo-positioned-button"
                  aria-controls={open ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral"
                >
                  <div className="indicator">
                    <HiOutlineShoppingCart className="icon" />
                    <span className="badge badge-xs badge-error indicator-item"></span>
                  </div>
                </button>
                {openCart && (
                  <OpenCart
                    className="top-0 left-0"
                    openCart={openCart}
                    setOpenCart={setOpenCart}
                  ></OpenCart>
                )}
              </div>
              <button className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral">
                <div className="indicator">
                  <HiOutlineBellAlert className="icon" />
                  <span className="badge badge-xs badge-error indicator-item"></span>
                </div>
              </button>
              <button className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral">
                <div className="indicator">
                  <BsBookmarkHeart className="icon" />
                  <span className="badge badge-xs badge-error indicator-item"></span>
                </div>
              </button>
              <div className="flex flex-center items-center">
                {user ? (
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">
                          <h6>My Profile</h6>
                          <h6>Dashboard</h6>
                          <h6 onClick={logout}>Logout</h6>
                        </Typography>
                      </MenuItem>
                    </Menu>
                  </Box>
                ) : (
                  <Link className=" px-2" to="/signin">
                    <LockPersonOutlined />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      {/* third nav */}
      <div className=" bg-gray-50 text-center py-2">
        <div className="container flex justify-evenly">
          <Link to={''} className="px-2 text-zinc-500">
            New
          </Link>
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/${category.name}`}
              className="px-2 text-zinc-500"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inputValue === '' ? (
                <p>
                  Empty!
                  <br></br>
                  <span className="text-[#fc2525]">
                    please write something to search
                  </span>
                </p>
              ) : (
                searchProducts.map((searchProduct) => (
                  <SearchProducts
                    key={searchProduct._id}
                    searchProduct={searchProduct}
                  ></SearchProducts>
                ))
              )}
            </div>
            <div className="modal-action">
              <label
                htmlFor="my-modal-5"
                className="btn bg-[#ff0000] border-none text-white font-bold"
              >
                Exit
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
