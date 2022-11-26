import React from "react";
import { Link } from "react-router-dom";

const InCategory = ({ c }) => {
  const { category, code, subcategory, image } = c;
  return (
    <div className="product-card">
      <Link to={`/category/${category}/${code}`}>
        <div>
          <img src={image} alt="" />
        </div>
        <div className="flex justify-center">
          <h3>{subcategory}</h3>
        </div>
      </Link>
    </div>
  );
};

export default InCategory;
