import React from "react";
import { Breadcrumbs, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Breadcrumb = ({ product }) => {
  return (
    <Breadcrumbs
      separator="›"
      aria-label="breadcrumb"
      sx={{ mb: "14px", mt: 0 }}
    >
      <Button
        component={RouterLink}
        to="/"
        sx={{ color: "#1B4B66", fontWeight: 600, fontSize: "16px" }}
      >
        Home
      </Button>
      <Button
        component={RouterLink}
        to={`/${product.categories && product.categories[0]?.name}`}
        sx={{ color: "#1B4B66", fontWeight: "600", fontSize: "16px" }}
      >
        {product.categories && product.categories.length > 0
          ? product.categories[0].name
          : "not found"}
      </Button>
      <Typography color="#626262" sx={{ fontSize: "16px", fontWeight: 500 }}>
        {product.name}
      </Typography>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
