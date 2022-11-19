import {
  Avatar,
  Button,
  ButtonGroup,
  ListItemButton,
  ListItemIcon,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RouteHeader from "../../Components/Dashboard/RouteHeader";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { Box } from "@mui/system";
import { AddReactionSharp, Mail, Phone, Web } from "@mui/icons-material";

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
          sx={{
            m: "0 !important",
            width: 610,
            px: 4,
            py: 3,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Stack direction="row" spacing={2}>
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 76, height: 76 }}
                />
              </StyledBadge>
            </Stack>

            {/* name and email */}
            <Stack sx={{}}>
              <Typography
                sx={{
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textTransform: "capitalize",
                  fontSize: "1.3rem",
                }}
              >
                Noman
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  lineHeight: 1.2,
                  textAlign: "left",
                  textTransform: "lowercase",
                }}
              >
                Noman@gmail.com
              </Typography>
            </Stack>
          </Box>
          <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
            <Typography
              sx={{
                whiteSpace: "nowrap",
                textTransform: "capitalize",
                fontWeight: "600",
              }}
            >
              Communication
            </Typography>
            <hr style={{ width: "100%", borderTopWidth: "0.15rem" }} />
          </Stack>

          {/* informations */}
          <Stack>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "1.7rem" }}>
                <Phone />
              </ListItemIcon>
              <Typography>Phone</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "1.7rem" }}>
                <Mail />
              </ListItemIcon>
              <Typography>hello@gmail.com</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "1.7rem" }}>
                <Web />
              </ListItemIcon>
              <Typography>Phone.com</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "1.7rem" }}>
                <AddReactionSharp />
              </ListItemIcon>
              <Typography>avenue,64road</Typography>
            </ListItemButton>
          </Stack>
          <Box>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ float: "right" }}
            >
              <Button>Edit</Button>
              <Button>Save</Button>
            </ButtonGroup>
          </Box>
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
