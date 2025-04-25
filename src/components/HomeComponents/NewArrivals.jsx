import { useQuery } from "@tanstack/react-query";
import Box from "@mui/material/Box";
import Button from "../Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { getProducts } from "../../lib/my-api";
import { Link as RouterLink } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const NewArrivals = () => {
  const productsQuery = useQuery({
    queryKey: ["products", "list"],
    queryFn: getProducts,
  });
  const products = productsQuery.data?.products || [];
  console.log(products);

  if (productsQuery.isLoading) {
    return <CircularProgress />;
  }
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        mb: "24px",
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          mb: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          pl: { xs: "16px", sm: "24px", md: "40px" },
        }}
      >
        <Box
          component="h1"
          sx={{
            m: 0,
            fontWeight: 600,
            fontSize: { xs: "24px", md: "34px" },
            lineHeight: { xs: "32px", md: "44px" },
          }}
        >
          New Arrivals
        </Box>
        <Button
          component={RouterLink}
          to={`/New Arrivals`}
          sx={{
            color: "#1B4B66",
            fontSize: { xs: 12, md: 14 },
            fontWeight: 600,
            mb: "20px",
          }}
        >
          View all <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Grid
        container
        spacing={5}
        sx={{ width: 1, pl: { xs: "16px", sm: "24px", md: "40px" } }}
      >
        {products.map(
          (product, index) =>
            index < 4 && (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={index + 1}
                sx={{ width: 1 }}
              >
                <RouterLink
                  to={`/product/${product.id}`}
                  style={{ width: 1, textDecoration: "none" }}
                >
                  <Box component="section" sx={{ width: 1 }}>
                    <img
                      src={product.images[0] && product.images[0].publicURL}
                      style={{
                        width: "100%",
                        height: "285px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
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
                        {product.description}
                      </Box>
                      <Box
                        component="p"
                        sx={{
                          fontWeight: "600",
                          fontSize: { xs: "14px", md: "16px" },
                          color: "#171520",
                          mt: 0,
                        }}
                      >
                        ${product.price}
                      </Box>
                    </Box>
                    <Box component="p" sx={{ m: 0, mt: "5px" }}>
                      <FavoriteBorderOutlinedIcon
                        style={{ color: "#171520" }}
                      />
                    </Box>
                  </Box>
                </RouterLink>
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default NewArrivals;
