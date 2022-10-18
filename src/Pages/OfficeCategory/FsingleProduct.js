
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const FsingleProduct = () => {

    const location = useLocation();
    const id = location.pathname.split('/')[2]

    console.log(id)

    const [product, setProduct] = useState([]);

    useEffect(() => {

        // fetch(`http://localhost:5000/singleproduct/${id}`)
        // .then(res=>res.json())
        // .then(data => setProduct(data))
        const singleProduct = async () => {
            try {

                const response = await axios.get(
                    `http://localhost:5000/singleproduct/${id}`)
                setProduct(response.data)
            }


            catch (err) {
                console.log(err)
            }
        }
        singleProduct();
    }, [id])

    console.log(product)



    return (
        <div>
            <h2>Single product{product.image}</h2>
        </div>
    )
};

export default FsingleProduct;