import { List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import paymentImage from '../../assets/payment2.png'
const Checkout = () => {


    const handleInput = (e) => {
        e.preventDefault();
        const inputValue = {
            firstName : e.target.firstname.value,
            lastName: e.target.lastname.value,
            email: e.target.email.value,
            country: e.target.country.value,
            address: e.target.address.value,
            town: e.target.town.value,
            zip: e.target.zip.value,
            phone: e.target.phone.value,
            comment: e.target.comment.value,
            totalCost: '115000',
            paymentMethod: e.target.value,
        }
       axios.post('http://localhost:5000/api/orders', inputValue)
       .then(function (response) {
        if (response.status === 200) {
          console.log('Product updated to orders Successfully ');
        }
      });
       
    }


    return (
        <div className='lg:p-20 md:p-10 p-5'>
            <h2 className='text-3xl font-bold mb-10 p-0 text-left'>Shopping Cart</h2>
            <form onSubmit={handleInput} action="">
                <div className='lg:grid grid-cols-3 gap-5'>
                    <div className='col-span-2'>
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-slate-100 mr-5 w-full' type="text" name="firstname" id="" placeholder='*First Name' required/>
                            <input className='p-3 bg-slate-100 w-full' type="text" name="lastname" id="" placeholder='Last Name' />
                        </div>
                        <input className='p-3 bg-slate-100 w-full mb-5' type="email" name="email" id="" placeholder='*Email' required/>
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="country" id="" placeholder='*Country' required/>
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="address" id="" placeholder='*Address' required/>
                        <input className='p-3 bg-slate-100 w-full mb-5' type="text" name="town" id="" placeholder='*Town' required/>
                        <div className='lg:flex mb-5'>
                            <input className='p-3 bg-slate-100 mr-5 w-full' type="text" name="zip" id="" placeholder='Zip Code' />
                            <input className='p-3 bg-slate-100 w-full' type="text" name="phone" id="" placeholder='*Phone Number' required/>
                        </div>
                        <textarea className='p-3 bg-slate-100 w-full mb-5' type="text" name="comment" id="" placeholder='Leave a comment about your order.' />
                        <div className='flex '>
                            <input type="checkbox" name="differentAddress" id="" />
                            <p className='text-sm'>Ship to different adderess</p>
                        </div>
                        <div className='flex '>
                            <input type="checkbox" name="account" id="" />
                            <p className='text-sm'>Create a new account</p>
                        </div>

                    </div>
                    <div className='bg-[#E4E8EB] lg:p-10 p-5'>
                        <h3 className='text-lg font-bold text-left p-0'>Cart Total</h3>
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
                                    <ListItemText>Total: </ListItemText>
                                </ListItem>
                            </List>
                            <div className='flex '>
                                <input type="radio" name="cashOn" id="" />
                                <p className='text-sm'>Cash on delivery</p>
                            </div>
                            <div className='flex '>
                                <input type="radio" name="cashOn" id="" checked />
                                <div className=''>
                                    <div className='w-full inline'><img src={paymentImage} alt="" /></div>
                                </div>
                            </div>
                            <div className='flex justify-center mt-5'>
                               <input className='w-full btn btn-primary rounded-none text-white' type="submit" value="MAKE PAYMENT" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Checkout;