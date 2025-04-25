import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Container,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BrandItem from "./BrandItem";
import { getBrands } from "../../lib/my-api";

const Brands = ({ id }) => {
  const [startIndex, setStartIndex] = useState(0); // Index of the first brand to show
  const containerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const brandsQuery = useQuery({
    queryKey: ["brands", "list"],
    queryFn: getBrands,
  });
  const brands = brandsQuery.data?.brands || [];
  console.log(brands);

  const handleScroll = (direction) => {
    if (direction === "right") {
      setStartIndex((prev) => Math.min(prev + 1, brands.length - 6)); // Show one more brand
    } else if (direction === "left") {
      setStartIndex((prev) => Math.max(prev - 1, 0)); // Hide one brand
    }
  };

  // Determine number of visible brands and grid template columns
  let brandsToShow = 6;
  let columns = 6;

  if (isMobile) {
    brandsToShow = 1; // Show 3 brands on mobile
    columns = 1;
  } else if (isTablet) {
    brandsToShow = 4; // Show 4 brands on tablet
    columns = 4;
  }

  return (
    <Container
      id={id}
      maxWidth={false}
      disableGutters
      sx={{
        mt: "70px",
        width: "95%",
        maxWidth: "1440px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, fontWeight: 600 }}
      >
        Shop by Brands
      </Typography>
      <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
        {/* Left Chevron */}
        {startIndex > 0 && (
          <IconButton
            onClick={() => handleScroll("left")}
            sx={{ position: "absolute", left: 0, zIndex: 1 }}
          >
            <ChevronLeftIcon />
          </IconButton>
        )}

        <Box
          ref={containerRef}
          sx={{
            display: "grid",
            gridTemplateColumns: `repeat(${columns}, minmax(175px, 1fr))`,
            gap: 2,
            overflow: "hidden",
            width: "100%", // Ensure the Box takes full width
          }}
        >
          {brands.slice(startIndex, startIndex + brandsToShow).map((brand) => (
            <BrandItem
              key={brand.id}
              id={brand.id}
              image={brand.icon}
              name={brand.name}
            />
          ))}
        </Box>

        {/* Right Chevron */}
        {startIndex + brandsToShow < brands.length && (
          <IconButton
            onClick={() => handleScroll("right")}
            sx={{ position: "absolute", right: 0, zIndex: 1 }}
          >
            <ChevronRightIcon />
          </IconButton>
        )}
      </Box>
    </Container>
  );
};

export default Brands;
