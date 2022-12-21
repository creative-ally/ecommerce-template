import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const SearchProdductsDetail = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/api/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.data[0]));
  }, [id]);

  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={products.image}
            className="max-w-sm rounded-lg shadow-2xl "
          alt=""/>
          <div className=" w-8/12 md:w-10/12 lg:w-6/12 lg:ml-6">
            <h1 className="text-2xl font-bold">{products.name}</h1>
            <hr className="bg-slate-400 w-100 h-[1px]"></hr>
            <p>
              <span className="font-bold">Status: </span>
              <span className="text-success">{products.status}</span>
            </p>
            <p>
              <span className="font-bold">Subcategory:</span>{" "}
              {products.subcategory}
            </p>
            <p>
              <span className="font-bold">Material:</span> {products.material}
            </p>
            <p className="py-6">{products.description}</p>
            {/* <button className="btn btn-primary">
              <Link to={`/dashboard/payment/${id}`}>Pay</Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProdductsDetail;
