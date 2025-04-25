import React, { useState } from "react";
import { Box, Paper, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styles from "./ProductImage.module.scss";

const ProductImage = ({ product }) => {
  const [index, setIndex] = useState(0);
  const thumbnails =
    product.images && product.images.map((img) => img.publicURL);
  const visibleThumbnails = thumbnails && thumbnails.slice(index, index + 4);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Paper elevation={0} sx={{ flexShrink: 0 }}>
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0].publicURL
              : "default-image-url"
          }
          alt="Product"
          style={{
            maxHeight: "100%",
            width: "100%",
            objectFit: "cover",
            borderRadius: "16px",
            maxWidth: "530px",
          }}
        />
      </Paper>
      <Box
        className={styles.container}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          flexWrap: "nowrap",
        }}
      >
        <IconButton
          onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}
          sx={{ p: 1 }}
        >
          <ChevronLeft />
        </IconButton>
        <Box
          className={styles.imagesContainer}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {visibleThumbnails &&
            visibleThumbnails.map((thumb, idx) => (
              <img
                key={idx}
                src={thumb}
                width="70px"
                height="70px"
                className={styles.image}
              />
            ))}
        </Box>
        <IconButton
          onClick={() =>
            setIndex((prev) => Math.min(prev + 1, thumbnails.length - 4))
          }
          sx={{ p: 1 }}
        >
          <ChevronRight />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductImage;
