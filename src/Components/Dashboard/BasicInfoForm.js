import React from "react";
import {
  Box,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
} from "@material-ui/core";
import { MenuItem } from "@mui/material";

const BasicInfoForm = () => {
  const [caterogy, setCaterogy] = React.useState("Mens");
  const [brand, setBrand] = React.useState("Mens");

  const handleCategory = (event) => {
    setCaterogy(event.target.value);
  };
  const handleBrand = (event) => {
    setBrand(event.target.value);
  };

  return (
    <Paper>
      <Box
        sx={{
          p: 3,
        }}
      >
        <Typography
          component={"p"}
          style={{
            lineHeight: "27px",
            fontSize: "17px",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          Basic Information
        </Typography>
        <Box component={"form"}>
          <Box
            sx={{
              width: "100%",
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {/* Title */}
            <Box>
              <label htmlFor="outlined">Title</label>
              <TextField
                id="outlined"
                label="Type Here..."
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                }}
              />
            </Box>

            {/* DESCRIPTION  */}
            <Box>
              <label htmlFor="outlined">Description</label>
              <TextareaAutosize
                variant="outlined"
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{
                  width: 200,
                  border: "1px solid #B9B9B9",
                  boxSizing: "border-box",
                  width: "100%",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                boxSizing: "border-box",
                width: "auto",
              }}
            >
              {/* Categories */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label htmlFor="outlined">Categories</label>
                <TextField
                  id="category"
                  select
                  value={caterogy}
                  onChange={handleCategory}
                  variant="outlined"
                  size="small"
                  style={{
                    width: "100%",
                    // padding: "0.5rem",
                  }}
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              {/* Brand */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label htmlFor="outlined">Brand</label>
                <TextField
                  id="category"
                  select
                  value={brand}
                  onChange={handleBrand}
                  variant="outlined"
                  size="small"
                  style={{
                    width: "100%",
                    // padding: "0.5rem",
                  }}
                >
                  {brands.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default BasicInfoForm;

const currencies = [
  {
    value: "Mens",
    label: "Mens",
  },
  {
    value: "Womens",
    label: "Womens",
  },
  {
    value: "Accessory",
    label: "Accessory",
  },
];
const brands = [
  {
    value: "Mens",
    label: "Mens",
  },
  {
    value: "Womens",
    label: "Womens",
  },
  {
    value: "Accessory",
    label: "Accessory",
  },
];
