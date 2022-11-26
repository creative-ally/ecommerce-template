import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoaderTop from "../../Shared/Loader/LoaderTop";
import HotProduct from './HotProduct';

const HotProducts = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            const data = await axios
                .get(`http://localhost:5000/api/product/category/${category}`)
                .then((res) => {
                    console.log(res.data)
                    setProducts(res.data.data);
                });
        })();
        // axios.get(`http://localhost:5000/api/product/category/${category}`)
        //     .then(response => {
        //         console.log(response.data.data);
        //         setProducts(response.data.data)


        //     });

    }, [category]);

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