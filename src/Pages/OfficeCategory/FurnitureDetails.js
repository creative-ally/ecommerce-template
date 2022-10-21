import React from 'react';
import { Link } from 'react-router-dom';


const FurnitureDetails = (props) => {
  const { id, image, name, category } = props.newfurniture;
  return (
    // <div className="w-96 text-center shadow-xl bg-base-100 rounded-xl">

    //     <div className="mx-auto">
    //       <img src= width="400" height="auto" alt="" />
    //       <h3 className="text-[18px] mt-2"></h3>
    //       <p className="text-[14px]  ">Explore now</p>
    //     </div>

    // </div>

    <div className="card card-compact w-11/12 mx-2 my-5 bg-white shadow-xl">
      <Link to={`/categorylist/${category}`}>
        <figure><img src={image} alt="" className=" w-full h-80 rounded-sm p-3" /></figure>
        <div className=" py-3 text-lg font-bold text-black w-full flex flex-row justify-evenly">
          <h2 className="">{name}</h2>

          <button className=" text-rose-400 border-none hover:text-rose-600 hover:underline">Explore Now</button>
        </div>
      </Link>
    </div>
  );
};

export default FurnitureDetails;