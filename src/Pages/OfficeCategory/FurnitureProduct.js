import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const FurnitureProduct = ({ cate }) => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/officeproduct?category=${cate}`
                )
                setProducts(response.data)
            }

            catch (err) {
                console.log(err)
            }
        };

        getProduct();

    }, [cate])

    //   useEffect(() => {
    //     fetch('office.json')
    //     .then(res => res.json())
    //     .then(data => {

    //         const filterproducts = products.filter((item) => item.category === cate);

    //         setProducts(filterproducts);
    //         console.log(filterproducts);

    //     })

    //       }, [products]);

    return (
        <div className="grid grid-cols-4 bg-white">
            {products.map((data) => (
                <Link to={`/furnitureSingleProduct/${data._id}`}>
                    <div
                        className="card bg-base-100 shadow-xl m-3 cursor-pointer"
                        key={data._id}
                    >
                        <figure>
                            <img src={data.image} alt="furniture" />
                        </figure>
                        <div className="card-body bg-white">
                            <h2 className="card-title">
                                {data.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{data.description.slice(0, 59)}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Office</div>
                                <div className="badge badge-outline">Products</div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default FurnitureProduct;