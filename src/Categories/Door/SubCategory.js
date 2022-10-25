import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SubCategory = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('');


    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:8000/category/${id}`)
                .then(res => {
                    console.log(res)
                    setTitle(res.data.name)
                    setProducts(res.data.products)
                })
        })()
    }, [id])

    return (
        <div className='bg-white lg:px-20 md:mx-10 px-5'> 
            <h2 className='text-2xl font-bold text-center my-10'>{title}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map((product, index) =>
                        <div className='shadow-md p-5'>
                            <img className='mx-auto' src={product.image} alt="" />
                            <h2 className='text-xl py-5'>{product.name}</h2>
                            <p className='text-lg font-semibold'>Price:{product.price} Taka</p>
                            <p className=''>Material: {product.material}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SubCategory;