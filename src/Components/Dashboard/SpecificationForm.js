import { Button, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SpecificationForm = () => {
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
          mt: 4,
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
          Specification
        </Typography>
        <Box component={"form"}>
          <Box
            sx={{
              width: "100%",
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Size and Color */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 3,
                boxSizing: "border-box",
                width: "auto",
              }}
            >
              {/* Color */}
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
                  Color
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
                  }}
                >
                  {colors.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              {/* Size */}
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
                  Size
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
                  }}
                >
                  {sizes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
            </Box>

            {/**********Stock and Weight ***********/}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                gap: 4,
                boxSizing: "border-box",
                width: "auto",
              }}
            >
              {/* Stock */}
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
                  Stock
                </label>
                <TextField
                  id="category"
                  type={"number"}
                  onChange={handleCategory}
                  variant="outlined"
                  size="small"
                  style={{
                    width: "100%",
                  }}
                />
              </Box>

              {/* Weight */}
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
                  Weight
                </label>
                <TextField
                  id="category"
                  onChange={handleBrand}
                  variant="outlined"
                  size="small"
                  style={{
                    width: "100%",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default SpecificationForm;
const colors = [
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
const sizes = [
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
