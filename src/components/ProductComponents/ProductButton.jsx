import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const IconButton = styled(Button)(({ theme, customStyles }) => ({
  minWidth: "auto",
  padding: theme.spacing(1),
  textTransform: "none",
  fontWeight: 600,
  fontSize: "14px",
  ...customStyles,
}));

const ProductButton = ({ iconSrc, alt, text, customStyles, ...props }) => {
  return (
    <IconButton fullWidth customStyles={customStyles} {...props}>
      <img
        src={iconSrc}
        alt={alt}
        style={{
          width: 22,
          height: 22,
          objectFit: "contain",
          marginRight: 8,
        }}
      />
      {text}
    </IconButton>
  );
};

export default ProductButton;
