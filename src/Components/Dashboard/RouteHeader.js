import React from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";

const RouteHeader = ({ children, title }) => {
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
                {title}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <>{children}</>
      </Container>
    </Box>
  );
};

export default RouteHeader;
