import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProductCarousel from './ProductCarousel';
import Cart from '../Components/ShoppingCart/Cart';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [value, setValue] = React.useState(5);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)
                .then(res => {
                    setProduct(res.data.data)
                })
        })()
    }, [id]);
 
    console.log(product)
    
    const handleAddCart = (e) => {
        e.preventDefault();
        if(!product){
            console.log('Product did not match')
        }else{
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
                email: "mahbub4noyon96@gmail.com"
            }
            console.log(cartData)
        //     axios.post('http://localhost:5000/api/cart', cartData)
        //     .then(function (response) {
        //      if (response.status === 200) {
        //        console.log('Product updated to cart Successfully ');
        //      }
        //    });
        }
    }

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
                        <div className='flex justify-between items-center w-32 my-5'>
                           <input className='bg-slate-100 p-3' type="number" name="count" id="" placeholder='Quantity 1' defaultValue='1'/>
                           <input className='btn bg-primary text-white rounded-none hover:bg-secondary my-5' type="submit" value="Add to Cart" />
                        </div>
                    </form>
                    <Link to='/cart' className='btn bg-primary text-white rounded-none hover:bg-secondary my-5'>Go to Cart</Link>
                </div>
            </div>

        </div>
    );
};

export default Product;