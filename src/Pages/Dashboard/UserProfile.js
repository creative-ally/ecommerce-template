import { Avatar, Paper, Stack } from "@mui/material";
import React from "react";
import RouteHeader from "../../Components/Dashboard/RouteHeader";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

const UserProfile = () => {
  return (
    <RouteHeader title={"My Profile"}>
      <Stack sx={{ my: 2, P: 2, alignItems: "center" }}>
        <Paper
          container
          spacing={2}
          xs={12}
          md={12}
          lg={12}
          sx={{ m: "0 !important", width: 610, px: 5, py: 3 }}
        >
          <Stack direction="row" spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 56, height: 56 }}
              />
            </StyledBadge>
          </Stack>
        </Paper>
      </Stack>
    </RouteHeader>
  );
};

export default UserProfile;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));
