import { Grid } from "@material-ui/core";
import React from "react";
import BasicInfoForm from "./BasicInfoForm";
import OrganizationInfoForm from "./OrganizationInfoForm";

const AddProductForm = () => {
  return (
    <Grid
      container
      spacing={2}
      gap={3}
      style={{ margin: "0.1rem !important", width: "100%" }}
    >
      <Grid item xs={12} md={7}>
        <BasicInfoForm />
      </Grid>

      <Grid item xs={12} md={5}>
        <OrganizationInfoForm />
      </Grid>
    </Grid>
  );
};

export default AddProductForm;
