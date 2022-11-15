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
              <label
                style={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                }}
                htmlFor="outlined"
              >
                Title
              </label>
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
              <label
                style={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                }}
                htmlFor="outlined"
              >
                Description
              </label>
              <TextareaAutosize
                variant="outlined"
                aria-label="minimum height"
                minRows={5}
                placeholder="Type Here..."
                style={{
                  width: 200,
                  border: "1px solid #B9B9B9",
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "0.5rem",
                  paddingLeft: "0.8rem",
                  borderRadius: "0.3rem",
                }}
              />
            </Box>

            {/* category & brand */}
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
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  Categories
                </label>
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
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  Brand
                </label>
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

            {/* Regular & Discount Price */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                boxSizing: "border-box",
                width: "auto",
              }}
            >
              {/* Regular Price */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  Regular Price
                </label>
                <TextField
                  id="regular-price"
                  variant="outlined"
                  size="small"
                  type={"number"}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              {/* Discount Price */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  Discount Price
                </label>
                <TextField
                  id="discount-price"
                  variant="outlined"
                  size="small"
                  type={"number"}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
            </Box>

            {/* shipping fee and tax rate */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                boxSizing: "border-box",
                width: "auto",
              }}
            >
              {/* SHIPPING FEE */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  SHIPPING FEE
                </label>
                <TextField
                  id="shipping-fee"
                  variant="outlined"
                  size="small"
                  type={"number"}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
              {/* Tax Rate */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: 330,
                }}
              >
                <label
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "600",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="outlined"
                >
                  Tax Rate
                </label>
                <TextField
                  id="shipping-fee"
                  variant="outlined"
                  size="small"
                  type={"number"}
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
            </Box>

            {/* Tags  */}
            <Box>
              <label
                style={{
                  textTransform: "uppercase",
                  fontWeight: "600",
                  fontSize: "0.8rem",
                }}
                htmlFor="outlined"
              >
                Tags
              </label>
              <TextareaAutosize
                variant="outlined"
                aria-label="minimum height"
                minRows={5}
                placeholder="Type Here..."
                style={{
                  width: 200,
                  border: "1px solid #B9B9B9",
                  boxSizing: "border-box",
                  width: "100%",
                  padding: "0.5rem",
                  paddingLeft: "0.8rem",
                  borderRadius: "0.3rem",
                }}
              />
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
