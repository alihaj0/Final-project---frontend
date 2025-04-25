import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import theme from "../../themes/theme";

const StyledImage = styled("img")(({ theme }) => ({
  aspectRatio: "1/1",
  width: "100%",
  objectFit: "cover",
  borderRadius: "16px",
  backgroundColor: "#f4f4f4",
}));

const BrandItem = ({ image, id, name }) => {
  return (
    <Link to={`/brands/${name}`}>
      <StyledImage src={image} alt="brand item" />
    </Link>
  );
};
export default BrandItem;
