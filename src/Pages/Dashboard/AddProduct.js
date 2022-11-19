import { Box } from "@mui/system";
import React from "react";
import AddProductForm from "../../Components/Dashboard/AddProductForm";
import RouteHeader from "../../Components/Dashboard/RouteHeader";

function AddProduct() {
  return (
    <RouteHeader title={"Add Product"}>
      <Box sx={{ my: 2, P: 2 }}>
        <AddProductForm />
      </Box>
    </RouteHeader>
  );
}

export default AddProduct;
