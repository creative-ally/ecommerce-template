import React from 'react';
import { Link } from 'react-router-dom';

const InteriorFurnitureDetails = (props) => {
    const { image, name,category } = props.newInterior
    return (
       <Link to={`/interiorcategorylist/${category}`}>
        <div className="card card-compact w-11/12 mx-2 my-5 bg-base-100 shadow-xl">
            <figure><img src={image} alt="" className=" w-full h-80 rounded-sm p-3" /></figure>
            <div className=" py-3 text-lg font-bold text-black w-full flex flex-row justify-evenly">
                <h2 className="">{name}</h2>

                <button className=" text-rose-400 border-none hover:text-rose-600 hover:underline">Explore Now</button>
            </div>
        </div>
       </Link>

    );
};

export default InteriorFurnitureDetails;