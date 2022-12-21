import { Box, Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../../Components/Dashboard/ProductCard";
import RouteHeader from "../../Components/Dashboard/RouteHeader";
import ProductTable from "../../Components/Dashboard/Table/ProductTable";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  const dashboardCardItem = [
    {
      title: "Total Users",
      user: 222,
      icon: "<FaUserCircle />",
      background: "linear-gradient(#64b3f6, #2b77e5)",
    },
    {
      title: "Total Orders",
      user: 338,
      icon: "<FaUserCircle />",
      background: "linear-gradient(#4eda89, #1a9f53)",
    },
    {
      title: "Total Products",
      user: products.length,
      icon: "<FaUserCircle />",
      background: "linear-gradient(to left, #ed68ff, #be0ee1)",
    },
  ];

  return (
    <RouteHeader title={"Products"}>
      <Grid container spacing={2} sx={{ m: "0 !important" }}>
        <Grid container spacing={2} xs={12} md={12} lg={12}>
          {dashboardCardItem.map((card) => (
            <ProductCard key={card} card={card} />
          ))}
        </Grid>
      </Grid>
      <Box sx={{ my: 2, P: 2 }}>
        <Grid
          container
          spacing={2}
          xs={12}
          md={12}
          lg={12}
          sx={{ m: "0 !important" }}
        >
          <ProductTable
            rows={products}
            headCells={headCells}
            component={"products"}
            listTitle={"Best Selling Products"}
          />
        </Grid>
      </Box>
    </RouteHeader>
  );
};

export default Products;

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "Price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "Quantity",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "sold",
    numeric: true,
    disablePadding: false,
    label: "Sold",
  },
  {
    id: "carbs2",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "Status",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];
