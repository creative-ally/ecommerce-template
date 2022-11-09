import React from 'react';
import { useLocation } from 'react-router-dom';
import FurnitureProduct from './FurnitureProduct';

const CategoryList = () => {
        const location = useLocation();
        console.log(location)
        const product = location.pathname.split("/")[2];
        console.log(product)
        return (


            <div className='my-10'>


                <FurnitureProduct cate={product} />
            </div>
        );
    };

    export default CategoryList;