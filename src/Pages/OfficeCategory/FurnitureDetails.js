import React from 'react';
import { Link } from 'react-router-dom';


    const FurnitureDetails = (props) => {
        const { id, image, name, category } = props.newfurniture;
        return (
          <div className="w-96 text-center">
            <Link to={`/categorylist/${category}`}>
              <div className="mx-auto">
                <img src={image} width="400" height="auto" alt="" />
                <h3 className="text-[18px] mt-2">{name}</h3>
                <p className="text-[14px]  text-red-500">Explore now</p>
              </div>
            </Link>
          </div>
        );
      };

export default FurnitureDetails;