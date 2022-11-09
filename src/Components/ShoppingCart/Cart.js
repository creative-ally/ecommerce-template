import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div className='lg:p-20 md:-10 p-5'>
            <h2 className='text-3xl font-bold pb-5'>Shopping Cart</h2>
            <div className='grid lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="bg-[#F5F7FA] py-3"></th>
                                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Name</th>
                                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Price</th>
                                <th class="text-left pl-5 bg-[#F5F7FA] py-3">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=''>
                                <td class="mr-3 w-20"><img src="https://i.ibb.co/R9KwLhc/24.png" alt="" /></td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">White Modern Chair</td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">20000 Taka</td>
                                <td class="pl-5"> <p className='text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span className='px-2 cursor-pointer'><RemoveIcon /></span> 1 <span className='px-2 cursor-pointer'><AddIcon /></span></p></td>
                            </tr>
                            <tr className=''>
                                <td class="mr-3 w-20"><img src="https://i.ibb.co/R9KwLhc/24.png" alt="" /></td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">White Modern Chair</td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">20000 Taka</td>
                                <td class="pl-5"> <p className='text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span className='px-2 cursor-pointer'><RemoveIcon /></span> 1 <span className='px-2 cursor-pointer'><AddIcon /></span></p></td>
                            </tr>
                            <tr className=''>
                                <td class="mr-3 w-20"><img src="https://i.ibb.co/R9KwLhc/24.png" alt="" /></td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">White Modern Chair</td>
                                <td class="pl-5 text-lg font-medium text-[#252525] bg[]">20000 Taka</td>
                                <td class="pl-5"> <p className='text-lg text-center text-[#252525] bg-[#F5F7FA] p-2'>Qty <span className='px-2 cursor-pointer'><RemoveIcon /></span> 1 <span className='px-2 cursor-pointer'><AddIcon /></span></p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='bg-[#F5F7FA] p-10'>
                    <h3 className='text-lg font-bold'>Cart Total</h3>
                    <div>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>

                                <ListItem disableGutters
                                    secondaryAction={
                                    <ListItemText>Taka</ListItemText>
                                    }
                                >
                                    <ListItemText>Subtotal:</ListItemText>
                                </ListItem>
                                <ListItem disableGutters
                                    secondaryAction={
                                    <ListItemText>Taka</ListItemText>
                                    }
                                >
                                    <ListItemText>Delivery:</ListItemText>
                                </ListItem>
                                <ListItem disableGutters
                                    secondaryAction={
                                    <ListItemText>Taka</ListItemText>
                                    }
                                >
                                    <ListItemText>Total:</ListItemText>
                                </ListItem>
                        </List>
                        <div className='flex justify-center mt-5'>
                            <Link className='w-full btn btn-primary rounded-none text-white'>Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;