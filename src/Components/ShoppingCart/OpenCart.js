import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import axios from 'axios';
import { TbCurrencyTaka } from 'react-icons/tb';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    textAlign: 'left'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'left'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function PositionedMenu({ openCart, setOpenCart}) {


  const [cartItems, setCartItems] = useState([]);
  const [user] = useAuthState(auth);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const cartShow = async () => {
    await axios.get(`http://localhost:5000/api/cart`)
    .then(res => {
        setCartItems(res.data.data)
    })
}
const carts = cartItems.filter((item) => item.email === user?.email)

useEffect(() => {
    cartShow()
}, [])

  const handleClose = () => {
    setOpenCart(null);
  };

  const handleDelete = (row) => {

    ( async () => {
        await axios.delete(`http://localhost:5000/api/cart/item/${row._id}`)
        .then( res => {
            console.log(res)
            if(res.status === 200){
                console.log('data deleted')
            }
        })
    })()
}

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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Product</StyledTableCell>
                  <StyledTableCell align="right">Name</StyledTableCell>
                  <StyledTableCell align="right">Quantity</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {carts.map((row) => (
                  <StyledTableRow key=''>
                    <StyledTableCell component="th" scope="row" sx={{ width: '70px' }}>
                      <img src={row.image} alt="" />
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                    <StyledTableCell align="right">{row.price * row.quantity} <TbCurrencyTaka /></StyledTableCell>
                    <StyledTableCell align="right" className='cursor-pointer' onClick={() => handleDelete(row)}><FaTrashAlt className='text-error'/></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className='flex justify-center'>
            <Link onClick={handleClose} to='/cart' className='btn btn-sm btn-primary rounded-full text-white my-5 w-48'>CheckOut</Link>
          </div>
        </div>
      </Menu>
    </div>
  );
}