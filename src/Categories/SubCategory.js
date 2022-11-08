
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SubCategory = () => {
    const { category, code } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
          const {data} = await axios.get(`http://localhost:5000/api/product/category/${category}/${code}`)
                .then(res => {
                    console.log(res)
                    // setTitle(res.data.name)
                    setProducts(res.data.data)
                })
        })()
    }, [category, code])
    return (
        <div className='bg-white lg:px-20 md:px-10 px-5 pb-10'> 
            <h2 className='text-2xl font-bold text-center my-10'>{}</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    products.map(product =>
                        <div key={product._id} className='shadow-md p-5'>
                            <img className='mx-auto' src={product.image} alt="" />
                            <h2 className='text-xl py-5'>{product.name}</h2>
                            <p className='text-lg font-semibold'>Price:{product.price} Taka</p>
                            <p className=''>Material: {product.material}</p>
                            <Link className='btn btn-primary btn-sm text-white rounded-full' to={`/product/${product._id}`}>Details</Link>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default SubCategory;