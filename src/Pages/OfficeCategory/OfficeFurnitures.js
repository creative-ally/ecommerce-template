import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FurnitureDetails from './FurnitureDetails';

const OfficeFurnitures = () => {

    const [furnitures, setFurnitures] = useState([])

    useEffect(() => {
      const getOfficeProduct = async()=>{
        try{

          const response = await axios.get(
            `http://localhost:5000/officecategories`
          )
          setFurnitures(response.data)

        }

        catch{

        }
      }

      getOfficeProduct();
    }, [])

    //     fetch('officeCategory.json')
    //         .then(res => res.json())
    //         .then(data => setFurnitures(data))
    // }, [])

    console.log(furnitures)
    return (
        <div className=" text-center my-24 mx-16 bg-white">
          <h2 className="text-[27px] font-semibold mb-2">Office Furniture</h2>
          <p className="mb-5">Every Space has its unique needs.</p>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
            {furnitures.map((furniture) => (
              <FurnitureDetails key={furniture.id} newfurniture={furniture} />
            ))}
          </div>
        </div>
      );
};

export default OfficeFurnitures;