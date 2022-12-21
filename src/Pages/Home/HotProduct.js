import React from "react";

const HotProduct = ({product }) => {
  const {_id, subcategory, image } = product;
  return (
    <div className="product-card">
        <div>
        <span className="badge badge-sm indicator-item">Hot Products</span>
          <img src={image} alt="" />
        </div>
        <div className="flex justify-center">
          <h3>{subcategory}</h3>
        </div>
    </div>
  );
};

export default HotProduct;