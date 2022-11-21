import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SubCategory = () => {
  const { category, code } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios
        .get(`http://localhost:5000/api/product/category/${category}/${code}`)
        .then((res) => {
          // setTitle(res.data.name)
          setProducts(res.data.data);
        });
    })();
  }, [category, code]);
  return (
    <div className="container">
      <h2>{}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-9">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img className="mx-auto" src={product.simage} alt="" />
            <h2>{product.name}</h2>
            <p>Price:{product.price} Taka</p>
            <p>Material: {product.material}</p>
            <Link className="btn button" to={`/product/${product._id}`}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategory;
