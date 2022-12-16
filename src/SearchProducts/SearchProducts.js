import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchProducts = ({ searchProduct, setSearchProducts }) => {
  const { _id, image, name, category, subcategory, description } =
    searchProduct;
  const [isOpen, setIsOpen] = useState(false)
  console.log(searchProduct);
  const navigate = useNavigate();
  const handleProductsDetail = (_id) => {
    navigate(`/product/${_id}`);
    // setSearchProducts('')
  };

  return (
    <div className="card">
      {/* <div>
        <img src={image}></img>
      </div>
      name : {name}; category : {category}; subcategory: {subcategory}; */}
      <div className="card w-72 bg-base-100 shadow-xl mx-auto mb-8">
        <figure>
          <img className="w-32" src={image} alt='' />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p className="text-center w-74">category: {category}</p>
          <p className="text-center  w-74">subcategory: {subcategory}</p>
          <div className="card-actions justify-center">
            <label onClick={() => handleProductsDetail(_id)} htmlFor="my-modal-5" className="btn btn-primary cursor-pointer">
              Details
            </label>
            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchProducts;
