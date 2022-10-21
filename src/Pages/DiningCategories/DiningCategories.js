import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DiningCategories = () => {

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState('')

    useEffect(() => {
        (async () => {
            await axios.get(`http://localhost:8001/category/${id}`)
                .then(res => {
                    console.log(res)
                    setTitle(res.data.name)
                    setProducts(res.data.products)
                })
        })()
    }, [id])


    return (
        <div className='bg-white pb-10'>
            <h2 className='pt-6 text-center font-semibold text-xl'>All {title}</h2>
            <div className='md:grid grid-cols-3 gap-6 mx-12 my-14'>
                {
                    products.map((product, index) =>
                        <div className='p-4 rounded-lg hover:shadow-2xl'>
                            <img className='rounded-md shadow-xl cardImage' src={product.image} alt="" />
                            <h2 className='py-4 text-center text-lg'>{product.name}</h2>
                            <p className='py-4 text-center text-lg font-semibold'>Price:{product.price} Taka</p>
                            <p className='py-4 text-left text-lg'>Material: {product.material}</p>
                            <p className='py-4 text-left text-lg'>Color: {product.color}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default DiningCategories;