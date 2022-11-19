import { Box, Grid } from "@mui/material";
import React from "react";
import RouteHeader from "../../Components/Dashboard/RouteHeader";

const UserProfile = () => {
  return (
    <RouteHeader title={"My Profile"}>
      <Grid container spacing={2} sx={{ m: "0 !important" }}>
        <Grid container spacing={2} xs={12} md={12} lg={12}>
          {/* {dashboardCardItem.map((card) => (
              <ProductCard key={card} card={card} />
            ))} */}
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
          {/* <ProductTable
              rows={rows}
              headCells={headCells}
              component={"orders"}
            /> */}
        </Grid>
      </Box>
    </RouteHeader>
  );
};

export default UserProfile;
