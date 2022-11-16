import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="mt-24">Please pay for : {id}</h2>
    </div>
  );
};

export default Payment;
