import React from 'react';

const InteriorProjects = ({interior}) => {
   const {image}=interior
    return (
        <div>
            <img className='mb-5 mx-auto' src={image} alt="" />
        </div>
    );
};

export default InteriorProjects;