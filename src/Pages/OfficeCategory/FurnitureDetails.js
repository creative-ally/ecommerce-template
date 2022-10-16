import React from 'react';
import { Link } from 'react-router-dom';

const FurnitureDetails = (props) => {

    const { id, image,category } = props.newfurniture
    return (
        <div>
            <Link to={`/categorylist/${category}`}>
                <div>
                    <img src={image} alt='' />
                    <p>Explore now</p>
                </div>
            </Link>




        </div>
    );
};

export default FurnitureDetails;