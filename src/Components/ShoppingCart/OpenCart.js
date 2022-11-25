import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function PositionedMenu({ openCart, setOpenCart }) {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:5000/api/cart')
        .then(res => {
          console.log(res.data.data)
          setCartItems(res.data.data)
        })
    })()
  }, [])

  console.log(cartItems)


  const handleClose = () => {
    setOpenCart(null);
  };


  return (
    <div className='z-50'>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        openCart={openCart}
        open={openCart}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{ top: '17vh' }}
      >
        <div className='px-5 '>
          <table class="w-full">
            <thead>
              <tr>
                <th class="bg-[#F5F7FA] py-3"></th>
                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Name</th>
                <th class=" pl-5 bg-[#F5F7FA] py-3">Quantity</th>
                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                cartItems.map((item) =>
                  <tr className=''>
                    <td class="mr-3 w-48"><img src={item.image} alt="" /></td>
                    <td class="pl-5 text-md font-medium text-[#252525] bg[]">{item.name}</td>
                    <td class="pl-5 text-md font-medium text-[#252525] bg[]">{item.quantity} Pcs.</td>
                    <td class="pl-5 text-md font-medium text-[#252525] bg[]">{item.totalPrice} Tk.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <Link to='/cart' className='btn btn-sm btn-primary rounded-full text-white my-5'>CheckOut</Link>
        </div>
      </Menu>
    </div>
  );
}