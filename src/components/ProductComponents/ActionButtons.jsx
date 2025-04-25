import React from "react";
import { Box } from "@mui/material";
import ProductButton from "./ProductButton";
import bagIcon from "../../assets/icons/bag.svg";
import heartIcon from "../../assets/icons/heart.svg";

const ActionButtons = ({ onClick }) => {
  const addToBagButtonStyles = {
    backgroundColor: "#1B4B66",
    color: "#ffffff",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#16334f",
    },
  };

  const addToWishlistButtonStyles = {
    backgroundColor: "#ffffff",
    color: "#1B4B66",
    border: "2px solid #1B4B66",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#c60055",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <ProductButton
        iconSrc={bagIcon}
        alt="Add to bag"
        text="Add to bag"
        customStyles={addToBagButtonStyles}
        onClick={onClick}
      />
      <ProductButton
        iconSrc={heartIcon}
        alt="Add to Wishlist"
        text="Add to Wishlist"
        customStyles={addToWishlistButtonStyles}
      />
    </Box>
  );
};

export default ActionButtons;
