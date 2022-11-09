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
            <div className='lg:grid grid-cols-2 gap-10 lg:p-20 md:10 p-5'>
                <div className=' w-full'><ProductCarousel/></div>
                <div className=''>
                    <p className='text-primary text-lg font-semibold py-2'>{product.price} Taka</p>
                    <h2 className='text-accent text-2xl font-semibold'>{product.name}</h2>
                    <div className='flex justify-between py-2'>
                        <Box
                            sx={{
                                '& > legend': { mt: 5 },
                            }}
                        >
                            <Rating sx={{fontSize: '20px'}} name="read-only" value={value} readOnly />
                        </Box>
                        <button className='btn bg-transparent btn-sm border-0 text-accent hover:bg-primary hover:rounded-none hover:text-white'>Write Review</button>
                    </div>
                    <p> <span className='text-sm text-success'><CircleIcon style={{fontSize: '15px'}}/></span> In Stack</p>
                    <p className='text-lg text-accent py-2'>Material: {product.material}</p>
                    <p className='text-accent py-5'>{product.description}</p>
                    <div className='flex justify-start items-center bg-[#F5F7FA] w-32 my-5'>
                        <p className='text-md text-[#252525] p-2 '>Qty <span className='mx-5'>1</span></p>
                        <ul>
                            <li className='cursor-pointer'><ArrowDropUpIcon /></li>
                            <li className='cursor-pointer'><ArrowDropDownIcon /></li>
                        </ul>
                    </div>
                    <Link to='#' className='btn bg-primary text-white rounded-none hover:bg-secondary my-5'>Add To Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default Product;