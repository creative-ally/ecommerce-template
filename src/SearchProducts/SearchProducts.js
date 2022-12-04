import React from "react";
import { useNavigate } from "react-router-dom";

const SearchProducts = ({ searchProduct }) => {
  const { _id, image, name, category, subcategory, description } =
    searchProduct;
  console.log(searchProduct);
  const navigate = useNavigate();
  const handleProductsDetail = (_id) => {
    navigate(`/searchPrducts/${_id}`);
  };
  return (
    <div className="card">
      {/* <div>
        <img src={image}></img>
      </div>
      name : {name}; category : {category}; subcategory: {subcategory}; */}
      <div className="card w-72 bg-base-100 shadow-xl mx-auto mb-8">
        <figure>
          <img className="w-32" src={image} alt=''/>
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p className="text-center w-74">category: {category}</p>
          <p className="text-center  w-74">subcategory: {subcategory}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleProductsDetail(_id)}
              className="btn btn-primary"
            >
              <label htmlFor="my-modal-5" className="">
                detals
              </label>
            </button>
            <div className="modal-action"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchProducts;
