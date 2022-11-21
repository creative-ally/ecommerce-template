import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";

export const ListItems = () => (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard"}
        style={{ textDecoration: "none", color: "black" }}
      >
        Dashboard
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/products"}
        style={{ textDecoration: "none", color: "black" }}
      >
        Products
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/addproducts"}
        style={{ textDecoration: "none", color: "black" }}
      >
        Add Product
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/orders"}
        style={{ textDecoration: "none", color: "black" }}
      >
        Orders
      </Link>
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      User Dashboard
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/userProfile"}
        style={{ textDecoration: "none", color: "black" }}
      >
        Profile
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/userOrders"}
        style={{ textDecoration: "none", color: "black" }}
      >
        My Orders
      </Link>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <Link
        to={"/dashboard/UserHistory"}
        style={{ textDecoration: "none", color: "black" }}
      >
        History
      </Link>
    </ListItemButton>
  </React.Fragment>
);
