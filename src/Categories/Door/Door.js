import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Door = ({ door }) => {
    const [mouseEnter, setMouseEnter] = useState(false);
    const {name, image, subcategory } = door;

    return (
        <Link to={`/doors/${subcategory}`}>
            <div onMouseEnter={() => setMouseEnter(true && subcategory)}
                onMouseLeave={() => setMouseEnter(false && subcategory)}
            >
                {
                    mouseEnter ? <img src='https://i.ibb.co/xY2btD9/Solid-Engineered-Wooden-Door.png' alt="" /> : <img src={image} alt="" />
                }
            </div>

            <div className='flex justify-center mt-2 mb-8'>
                <h2 className='text-lg text-center'>{name}</h2>
            </div>
        </Link>
    );
};

export default Door;