import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import ProductCarousel from './ProductCarousel';
import OpenCart from '../Components/ShoppingCart/OpenCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Product = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [value, setValue] = React.useState(5);
    const [openCart, setOpenCart] = useState(false)

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)
                .then(res => {
                    setProduct(res.data.data)
                })
        })()
    }, [id]);

console.log(user?.email)

    const handleAddCart = (e) => {
        e.preventDefault();
        if (!product) {
            console.log('Product did not match')
        } else {
            const price = product?.price * e.target.count.value;
            const cartData = {
                category: product?.category,
                subcategory: product?.subcategory,
                code: product?.code,
                image: product?.image,
                name: product?.name,
                price: product?.price,
                totalPrice: price,
                quantity: e.target.count.value,
                email: user?.email
            }
            console.log(cartData)
            axios.post('http://localhost:5000/api/cart', cartData)
                .then(function (response) {
                    if (response.status === 200) {
                        console.log('Product updated to cart Successfully ');
                    }
                });
        }
    }

    const handleClickOpen = () => {
        setOpenCart(true);
    };

    return (
        <div>
            <div className='lg:grid grid-cols-2 gap-10 lg:p-20 md:p-10 p-5'>
                <div className=' w-full'><ProductCarousel /></div>
                <div className=''>
                    <p>{product?.price} Taka</p>
                    <h2>{product?.name}</h2>
                    <div className='flex justify-between'>
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating sx={{ fontSize: '20px' }} name="read-only" value={value} readOnly />
                        </Box>
                        <button className='btn button'>Write Review</button>
                    </div>
                    <p> <span className='text-sm text-success'><CircleIcon style={{ fontSize: '15px' }} /></span> In Stack</p>
                    <p>Material: {product.material}</p>
                    <p>{product.description}</p>
                    <form onSubmit={handleAddCart} action="">
                        <div className='block w-32 my-5'>
                            <input className='bg-slate-100 p-3' type="number" name="count" id="" placeholder='Quantity 1' min="1" />
                            {
                                user ? 
                                <input onClick={handleClickOpen} className='btn bg-primary text-white rounded-none hover:bg-secondary my-5' type="submit" value="Add to Cart" />
                                :
                                navigate('/signin')
                            }
                        </div>
                    </form>
                </div>
            </div>
            {
                openCart && <OpenCart openCart={openCart} setOpenCart={setOpenCart}></OpenCart>
            }
        </div>
    );
};

export default Product;