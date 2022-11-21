import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import SpecificationForm from "./SpecificationForm";

const OrganizationInfoForm = () => {
  return (
    <Box>
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

      {/* Specification  */}
      <SpecificationForm />
    </Box>
  );
};

export default OrganizationInfoForm;
