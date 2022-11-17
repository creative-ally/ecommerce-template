import { alpha } from "@material-ui/core";
import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import TableSorting from "../../../Components/Dashboard/TableSorting";

export default function EnhancedTableToolbar(props) {
  const { numSelected, component } = props;
  const sortItems = [
    {
      lable: "Show by",
      items: ["12 Row", "24 Row", "36 Row"],
    },
    {
      lable: "rating by",
      items: ["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"],
    },
    {
      lable: "CATEGORY by",
      items: ["Mens", "Womens", "Kids"],
    },
    {
      lable: "Brand by",
      items: ["Lotto", "RFL", "Akij"],
    },
  ];
  return (
    <Toolbar
      sx={{
        pl: { sm: 0 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "1.2rem",
              mt: 3,
              color: "#403e57",
              textTransform: "capitalize",
            }}
          >
            {component === "orders" ? "All Orders" : "Best Selling Products"}
          </Typography>
          <Box
            sx={{
              flex: "1 1 100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 1,
              mb: 3,
              mt: 1,
            }}
          >
            {sortItems.map((item) => (
              <TableSorting key={item.lable} item={item} />
            ))}
          </Box>
        </Box>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
