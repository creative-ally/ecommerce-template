import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";

const SearchProdductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/api/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.data[0]));
  }, [id]);
  console.log(products);
  // if (!id) {
  //   return <Loader></Loader>;
  // }

  return (
    <div>
      welcome to Details of: {id}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={products.image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold">{products.name}</h1>
            <p className="py-6">{products.description}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      s
    </div>
  );
};

export default SearchProdductsDetail;
