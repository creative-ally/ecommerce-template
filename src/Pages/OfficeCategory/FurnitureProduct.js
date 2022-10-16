import React, { useEffect, useState } from 'react';

const FurnitureProduct = ({cate}) => {


    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('Office.json')
        .then(res => res.json())
        .then(data=> {
            const filterData = data.filter(item => item !== cate)

            setProducts(filterData);

            return products
            
        })
    } ,[])

    console.log(products)


    return (
        <div>
            <h2>Products</h2>
        </div>
    );
};

export default FurnitureProduct;