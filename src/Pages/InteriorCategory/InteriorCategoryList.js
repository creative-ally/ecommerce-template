import React from 'react';
import { useLocation } from 'react-router-dom';
import InteriorProduct from './InteriorProduct';

const InteriorCategoryList = () => {
    const location = useLocation()
    const product = location.pathname.split('/')[2];
    console.log(product)
    return (
        <div>
            <InteriorProduct category={product}/>
        </div>
    );
};

export default InteriorCategoryList;