import React, { useEffect, useState } from 'react';

const FurnitureProduct = ({ cate }) => {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('Office.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)


    return (
        <div>
            {products.filter(item => item.category !== cate).map(filteredProduct => (
                <div>
                    {filteredProduct.image}
                </div>
            ))}
        </div>
    );
};

export default FurnitureProduct;