import React, { useState } from "react";
import { Pagination, Stack, Grid, Box } from "@mui/material";
import Card from "../Card";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import pink from "../../assets/newArriavls/pink.png";
import StarIcon from "@mui/icons-material/Star";
import { getProductsByCate } from "../../lib/my-api";
import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";

function PaginatedList({ category }) {
  console.log(category);
  const productsQuery = useQuery({
    queryKey: ["productsCate", "list"],
    queryFn: () => getProductsByCate(category),
  });
  const products = productsQuery.data?.data.products || [];

  const items = products.map((product, index) => product);
  console.log(items);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the items to display on the current page
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mb: "69px",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Grid container spacing={2} sx={{ width: { xs: "100%", md: "90%" } }}>
        {currentItems.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ width: 1 }}>
            <Card
              component={RouterLink}
              sx={{ width: 1, textDecoration: "none" }}
              to={`/product/${product.id}`}
            >
              <Box component="section" sx={{ width: 1 }}>
                <img
                  src={product.images && product.images[0]?.publicURL}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "285px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  alt={product.name}
                />
              </Box>
              <Box
                component="section"
                sx={{
                  width: 1,
                  display: "flex",
                  flexDirection: "column",
                  p: { xs: 1, md: 2 },
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    mb: 1,
                  }}
                >
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#171520",
                      mb: "2px",
                    }}
                  >
                    {product.name}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "12px", md: "14px" },
                      color: "#626262",
                    }}
                  >
                    {product.description}
                  </Box>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box component="p" sx={{ color: "#FF8C4B", m: 0 }}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      m: 0,
                      color: "#1B4B66",
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "18px",
                    }}
                  >
                    {product.ratingsNum} Ratings
                  </Box>
                </Box>
                <Box
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#171520",
                      m: 0,
                    }}
                  >
                    ${product.price}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "14px", md: "14px" },
                      color: "#626262",
                      lineHeight: "20px",
                      textDecoration: "line-through",
                      m: 0,
                    }}
                  >
                    $
                    {(
                      product.price /
                      (1 - product.discount["discountRate"] / 100)
                    ).toFixed(2)}
                  </Box>
                  <Box
                    component="p"
                    sx={{
                      fontWeight: "400",
                      fontSize: { xs: "14px", md: "16px" },
                      color: "#E21D1D",
                      lineHeight: "20px",
                      m: 0,
                    }}
                  >
                    {product.discount["discountRate"]}% off
                  </Box>
                </Box>
              </Box>
              <Box
                component="p"
                sx={{
                  m: 0,
                  mt: "5px",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(items.length / itemsPerPage)}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
          variant="outlined"
          sx={{ mx: "auto" }}
        />
      </Stack>
    </Box>
  );
}

export default PaginatedList;
