import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LoaderTop from "../../Shared/Loader/LoaderTop";
import HotProduct from './HotProduct';

const HotProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
             await axios.get('http://localhost:5000/api/product')
             .then( res => {
                // console.log(res.data.data)
                setProducts(res.data.data.slice(Math.max(res.data.data.length -9, 0)))
             })
        })();
    }, []);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, [1000]);
    }, []);

    return (
        < div className="container" >
            <h1 className='m-auto justify-center'>Hot Products</h1>
            {
                loading ? (
                    <LoaderTop />
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-9">
                        {products.map((product) => (
                            <HotProduct key=
                                {product._id}
                                product={product}
                            ></HotProduct>
                        ))}
                    </div>

                    // <div>
                    //     product
                    // </div>
                )
            }
        </div >
    );
};


export default HotProducts;