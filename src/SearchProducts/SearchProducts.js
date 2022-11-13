import React from "react";

const SearchProducts = ({ searchProduct }) => {
  const { image, name, category, subcategory, description } = searchProduct;
  console.log(searchProduct);
  return (
    <div className="card">
      {/* <div>
        <img src={image}></img>
      </div>
      name : {name}; category : {category}; subcategory: {subcategory}; */}
      <div className="card w-72 bg-base-100 shadow-xl mx-auto mb-8">
        <figure>
          <img className="w-32" src={image} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p className="text-center w-74">category: {category}</p>
          <p className="text-center  w-74">subcategory: {subcategory}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchProducts;
