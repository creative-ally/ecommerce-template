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
    const [quantity, setQuantity] = useState(1)
    const [value, setValue] = React.useState(5);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        } else {
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

    const [fieldValue, setFieldValue] = React.useState('');



    const handleBlur = (e) => setFieldValue(e.target.value);
    const price = product.price * fieldValue;
    const cartData = {
        category : product.category,
        subcategory: product.subcategory,
        code: product.code,
        image: product.image,
        name: product.name,
        price: product.price,
        totalPrice: price,
        quantity: fieldValue,
        email: "mahbub4noyon96@gmail.com"
    }
    console.log(cartData)
    axios.post('', cartData)

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
                    <div className='flex justify-start items-center w-32 my-5'>
                            <input type="number" className='bg-[#E4E8EB] border text-black p-3 w-full' onBlur={handleBlur} placeholder="Quantity 1" />
                        {/* <ul>
                            <li onClick={() => setQuantity(quantity + 1)} className='cursor-pointer'><ArrowDropUpIcon /></li>
                            <li onClick={() => handleDecrement()} className='cursor-pointer'><ArrowDropDownIcon /></li>
                        </ul> */}
                    </div>
                    <Link to='/cart' className='btn bg-primary text-white rounded-none hover:bg-secondary my-5'>Add To Cart</Link>
                </div>
            </div>

        </div>
    );
};

export default Product;