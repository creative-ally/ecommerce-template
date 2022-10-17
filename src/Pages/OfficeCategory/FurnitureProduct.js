import React, { useEffect, useState } from 'react';
import axios from "axios";

const FurnitureProduct = ({ cate }) => {


    const [products, setProducts] = useState([])

useEffect(()=>{
    const getProduct = async ( ) =>{
        try{
            const response = await axios.get(
                 `http://localhost:7000/officeproducts?category=${cate}`
            )
            setProducts(response.data)
        }

        catch(err){
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
        <div className="flex justify-center">
            {products.map((data) => (
                <div
                    class="card bg-base-100 shadow-xl mx-3 cursor-pointer"
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
            ))}
        </div>
    );
};

export default FurnitureProduct;