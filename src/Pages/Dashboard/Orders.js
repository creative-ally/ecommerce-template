import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../Components/Dashboard/ProductCard";
import ProductTable from "../../Components/Dashboard/ProductTable";

const Orders = () => {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        width: "100%",
      }}
    >
      <Container maxWidth="xl" sx={{ m: 0, mt: 13, mb: 4 }}>
        <Grid
          container
          spacing={3}
          sx={{
            boxSizing: "border-box",
            mb: "1.5rem !important",
            mx: "0 !important",
            mt: "0 !important",
          }}
          style={{
            width: "100%",
          }}
        >
          <Grid item xs={12} sx={{ p: "0 !important" }}>
            <Paper
              sx={{ p: 2, pl: 3, display: "flex", flexDirection: "column" }}
            >
              <Typography
                component={"h3"}
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                }}
              >
                Orders
              </Typography>
            </Paper>
          </Grid>
        </Grid>
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
            <ProductTable />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Orders;
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
