import React, { useEffect, useState } from 'react';
import FurnitureDetails from './FurnitureDetails';

const OfficeFurnitures = () => {

    const [furnitures, setFurnitures] = useState([])

    useEffect(() => {
        fetch('officeCategory.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])

    console.log(furnitures)
    return (
        <div>
          

           <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1' >
           {
                furnitures.map(furniture => 
                <FurnitureDetails  key={furniture.id}
                newfurniture={furniture}
                />)
            }
           </div>


        </div>
    );
};

export default OfficeFurnitures;