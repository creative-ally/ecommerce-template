import React from 'react';
import { Link } from 'react-router-dom';

const InCategory = ({ c }) => {
    const {category, code, subcategory, image} = c;
    return (
        <div>
            <Link to={`/category/${category}/${code}`}>
                <div><img src={image} alt="" /></div>
                <div className='flex justify-center mt-2 mb-8'>
                    <h2 className='text-lg text-center'>{subcategory}</h2>
                </div>
            </Link>
        </div>
    );
};

export default InCategory;