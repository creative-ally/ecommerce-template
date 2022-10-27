import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import InteriorFurnitureDetails from './InteriorFurnitureDetails';

const InteriorFurnitures = () => {
    const [interios, getInteriors] = useState([])

    useEffect(() => {
        fetch('interiorCategory.json')
            .then(res => res.json())
            .then(data => getInteriors(data))
    }, [])
    return (

        <div className=" text-center my-24 mx-16">
            <h2 className="text-[27px] font-semibold mb-2">Interior Furniture</h2>
            <p className="mb-5">Every Space has its unique needs.</p>
            <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
                {
                    interios.map((interior)=>(
                        <InteriorFurnitureDetails key={interior.id} 
                        newInterior = {interior} />
                    ))
                }
            </div>

        </div>
    );
};

export default InteriorFurnitures;