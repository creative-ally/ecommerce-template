import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ProductCarousel from './ProductCarousel';

const Product = () => {
    
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1)
    const [value, setValue] = React.useState(5);

    const handleDecrement = () => {
        if (quantity > 1 ) {
            setQuantity(quantity - 1)
        }else {
            alert('Product must be at least one.')
        }
    }

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)
                .then(res => {

                    setProduct(res.data.data)
                })
        })()
    }, [id]);

    console.log(product[0]?.price);

    return (
        <div>
            <div className='lg:grid grid-cols-2 gap-10 lg:p-20 md:p-10 p-5'>
                <div className=' w-full'><ProductCarousel/></div>
                <div className=''>
                    <p>{product[0]?.price} Taka</p>
                    <h2>{product[0]?.name}</h2>
                    <div className='flex justify-between'>
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating sx={{fontSize: '20px'}} name="read-only" value={value} readOnly />
                        </Box>
                        <button className='btn button'>Write Review</button>
                    </div>
                    <p className='py-4'> <span className='text-sm text-success'><CircleIcon style={{fontSize: '15px'}}/></span> In Stock</p>
                    <p><span className='text-lg font-bold'>Material:</span> {product[0]?.material}</p>
                    <p>{product[0]?.description}</p>
                    <div className='flex justify-start items-center bg-[#F5F7FA] w-32 my-5'>
                        <p className='text-md text-[#252525] p-2 '>Qty <span className='mx-5'>{quantity}</span></p>
                        <ul>
                            <li onClick={() => setQuantity(quantity + 1)} className='cursor-pointer'><ArrowDropUpIcon /></li>
                            <li onClick={() => handleDecrement()} className='cursor-pointer'><ArrowDropDownIcon /></li>
                        </ul>
                    </div>
                    <Link to='/cart' className='btn button'>Add To Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;