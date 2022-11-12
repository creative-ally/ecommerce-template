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
    const [product, setProduct] = useState('');
    const [value, setValue] = React.useState(5);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/api/product/${id}`)
                .then(res => {

                    setProduct(res.data.data)
                })
        })()
    }, [id]);

    return (
        <div>
            <div className='lg:grid grid-cols-2 gap-10 lg:p-20 md:p-10 p-5'>
                <div className=' w-full'><ProductCarousel/></div>
                <div className=''>
                    <p>{product.price} Taka</p>
                    <h2>{product.name}</h2>
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
                    <p> <span className='text-sm text-success'><CircleIcon style={{fontSize: '15px'}}/></span> In Stack</p>
                    <p>Material: {product.material}</p>
                    <p>{product.description}</p>
                    <div className='flex justify-start items-center bg-[#F5F7FA] w-32 my-5'>
                        <p className='text-md'>Qty 1</p>
                        <ul>
                            <li className='cursor-pointer'><ArrowDropUpIcon /></li>
                            <li className='cursor-pointer'><ArrowDropDownIcon /></li>
                        </ul>
                    </div>
                    <Link to='#' className='btn button'>Add To Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;