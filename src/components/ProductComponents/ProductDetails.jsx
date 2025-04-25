import React from "react";
import { Typography, Box, Rating } from "@mui/material";

const ProductDetails = ({ product }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "36px" } }}
      >
        {product.name}
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        sx={{
          fontWeight: "bold",
          color: "#626262",
          fontSize: { xs: "14px", md: "16px" },
        }}
      >
        {product.description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginY: 2 }}>
        <Rating name="simple-controlled" />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginLeft: 1, fontSize: { xs: "14px", md: "16px" } }}
        >
          ({product.userRatings?.length}) Ratings
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Typography
          variant="h5"
          component="span"
          sx={{ fontWeight: "bold", fontSize: { xs: "24px", md: "38px" } }}
        >
          ${product.price}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          sx={{
            marginLeft: 2,
            textDecoration: "line-through",
            color: "#B6B6B6",
            fontWeight: 600,
            fontSize: { xs: "16px", md: "32px" },
          }}
        >
          $
          {(
            product.price /
            (product.discount && 1 - product.discount["discountRate"] / 100)
          ).toFixed(2)}
        </Typography>
        <Typography
          variant="body1"
          component="span"
          sx={{
            marginLeft: 2,
            color: "red",
            fontWeight: 600,
            fontSize: { xs: "14px", md: "20px" },
          }}
        >
          {product.discount && product.discount["discountRate"]}% OFF
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
