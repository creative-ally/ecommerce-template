import {
  Box,
  Button,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const OrganizationInfoForm = () => {
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
          Organization
        </Typography>
        <Box component={"form"}>
          <Box
            sx={{
              width: "100%",
              my: 2,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {/* add category */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined"
                label="add category"
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                  textTransform: "capitalize",
                }}
              />
              <Button variant="contained">Add</Button>
            </Box>
            {/* add brand */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined"
                label="add brand"
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                  textTransform: "capitalize",
                }}
              />
              <Button variant="contained">Add</Button>
            </Box>
            {/* add color */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined"
                label="add color"
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                  textTransform: "capitalize",
                }}
              />
              <Button variant="contained">Add</Button>
            </Box>
            {/* add size  */}
            <Box sx={{ display: "flex", gap: 1 }}>
              <TextField
                id="outlined"
                label="add size"
                variant="outlined"
                size="small"
                style={{
                  width: "100%",
                  textTransform: "capitalize",
                }}
              />
              <Button variant="contained">Add</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default OrganizationInfoForm;
