import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../Components/Dashboard/ProductCard";
import RouteHeader from "../../Components/Dashboard/RouteHeader";
import ProductTable from "../../Components/Dashboard/Table/ProductTable";

const UserHistory = () => {
  return (
    <RouteHeader title={"History"}>
      {/* <Grid container spacing={2} sx={{ m: "0 !important" }}>
        <Grid container spacing={2} xs={12} md={12} lg={12}>
          {dashboardCardItem.map((card) => (
            <ProductCard key={card} card={card} />
          ))}
        </Grid>
      </Grid> */}
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
            rows={rows}
            headCells={headCells}
            component={"orders"}
            listTitle={"My History"}
          />
        </Grid>
      </Box>
    </RouteHeader>
  );
};

export default UserHistory;

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

const dashboardCardItem = [
  {
    title: "Total Order",
    user: 634,
    icon: "<FaUserCircle />",
    background: "linear-gradient(#64b3f6, #2b77e5)",
  },
  {
    title: "Shipped Orders",
    user: 433,
    icon: "<FaUserCircle />",
    background: "linear-gradient(#4eda89, #1a9f53)",
  },
  {
    title: "Pending Orders",
    user: 384,
    icon: "<FaUserCircle />",
    background: "linear-gradient(to left, #ed68ff, #be0ee1)",
  },
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Sells",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Pending",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
];
