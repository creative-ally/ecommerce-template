import { Grid, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import AddProductForm from "../../Components/Dashboard/AddProductForm";

function AddProduct() {
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
          sx={{ mb: 2, m: "0 !important", width: "100% !important" }}
        >
          <Grid item xs={12}>
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
                Add Product
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ my: 2, P: 2 }}>
          <AddProductForm />
        </Box>
      </Container>
    </Box>
  );
}

export default AddProduct;
