import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Pagination, Stack, Grid, Box ,Breadcrumbs, Button,Typography} from "@mui/material";
import Card from "../Card";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { getProductsByBrand } from "../../lib/my-api";
import { useQuery } from "@tanstack/react-query";
import { Link as RouterLink } from "react-router-dom";
import image1 from "../../assets/category/hero.png";
function BrandProducts() {
  const { brand } = useParams();
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["productsByBrand", brand],
    queryFn: () => getProductsByBrand(brand),
    enabled: !!brand,
    select: (response) => {
      console.log("API Response:", response); 
      return response.data.products || [];
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;

  const products = data || [];
  console.log("Products:", products); 

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  console.log("Current Items:", currentItems); 

  const handleChange = (event, value) => {
    setPage(value);
  };
  const breadcrumbs = [
    <Button
      component={RouterLink}
      underline="hover"
      key="1"
      color="inherit"
      to="/"
    >
      Home
    </Button>,
    <Button component={RouterLink} underline="hover" key="2" color="inherit">
      {brand}
    </Button>,
  ];
  return (
    <Box
      component="div"
      sx={{
        width: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
            <Box
      component="section"
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          minHeight: 400,
          backgroundImage: `url(${image1})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "24px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          overflow: "hidden",
          flexDirection: { xs: "column", md: "row" },
          mb: "40px",
        }}
      ></Box>
      <Stack spacing={2} sx={{ width: "55%", mb: "24px" }}>
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{ color: "#1B4B66", fontSize: "16px", fontWeight: 500 }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Typography
        variant="h1"
        sx={{
          width: "55%",
          fontSize: "34px",
          fontWeight: 600,
          lineHeight: "44px",
          color: "#1B4B66",
          mb: "44px",
        }}
      >
        {brand}
      </Typography>
    </Box>
      {currentItems.length === 0 ? (
        <p>No products found for {brand}.</p>
      ) : (
        <>
          <Grid container spacing={5} sx={{ width: "58%" }}>
            {currentItems.map((product) => (
              <Grid item xs={4} key={product.id} sx={{ width: 1 }}>
                <Card sx={{ width: 1 }}>
                  <Box component="section" sx={{ width: 1 }}>
                    <img
                      src={product.images[0]?.publicURL || '/placeholder.png'}
                      style={{
                        width: "100%",
                        height: "285px",
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
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box component="div" sx={{ width: "90%" }}>
                      <Box
                        component="p"
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "14px", md: "16px" },
                          color: "#171520",
                          mt: "5px",
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
                        {product.type}
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
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
                          width: "85%",
                        }}
                      >
                        <Box
                          component="p"
                          sx={{
                            fontWeight: "600",
                            fontSize: { xs: "14px", md: "16px" },
                            color: "#171520",
                            mt: 0,
                          }}
                        >
                          {product.price}
                        </Box>
                        <Box
                          component="p"
                          sx={{
                            fontWeight: "400",
                            fontSize: { xs: "14px", md: "14px" },
                            color: "#626262",
                            lineHeight: "20px",
                            textDecoration: "line-through",
                            mt: 0,
                          }}
                        >
                          {product.oldPrice}
                        </Box>
                        <Box
                          component="p"
                          sx={{
                            fontWeight: "400",
                            fontSize: { xs: "14px", md: "16px" },
                            color: "#E21D1D",
                            lineHeight: "20px",
                            mt: 0,
                          }}
                        >
                          {product.discountRate}
                        </Box>
                      </Box>
                    </Box>

                    <Box component="p" sx={{ m: 0, mt: "5px" }}>
                      <FavoriteBorderOutlinedIcon />
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(products.length / itemsPerPage)}
              page={page}
              onChange={handleChange}
              color="primary"
              shape="rounded"
              variant="outlined"
            />
          </Stack>
        </>
      )}
    </Box>
  );
}

export default BrandProducts;
