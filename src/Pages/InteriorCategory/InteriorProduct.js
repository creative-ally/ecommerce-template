import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const InteriorProduct = ({ category }) => {
    const [product, setProduct] = useState([])

    // useEffect(() => {
    //     fetch('allinterior.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const filterProduct = product.filter((item)=> item.category=== catego)
    //             setProduct(filterProduct)
    //         }

    //             )

    // }, [product])



    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:5000/interiorproductcategory"
                )
                const data = response.data.filter((item) => (item.category === category))
                setProduct(data)
            }

            catch (err) {
                console.log(err)
            }
        };

        getProduct();


    }, [category])
    console.log(product)


    return (
        <div className="grid grid-cols-4 justify-center">
                {
                    product.map((data) => (
                       <Link to={`/singleinterior/${data._id}`}>
                         <div
                            class="card bg-base-100 shadow-xl mx-3 my-3 cursor-pointer"
                            key={data._id}
                        >
                            <figure>
                                <img src={data.image} alt="furniture" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    {data.name}
                                    <div class="badge badge-secondary">NEW</div>
                                </h2>
                                <p>{data.description.slice(0, 59)}</p>
                                <div class="card-actions justify-end">
                                    <div class="badge badge-outline">Office</div>
                                    <div class="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                       </Link>
                    ))
                }


        </div>
    );
};

export default InteriorProduct;