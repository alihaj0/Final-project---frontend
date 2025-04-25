import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useQuery } from "@tanstack/react-query";
import { getHandPicked } from "../../lib/my-api";
import { Link as RouterLink } from "react-router-dom";

const HandiPicked = ({ id }) => {
  const handPickedQuery = useQuery({
    queryKey: ["handpicked", "list"],
    queryFn: getHandPicked,
  });

  const handPicked = handPickedQuery.data?.products || [];

  const categories = new Map();

  handPicked.map((product) => {
    if (!categories.has(product.categories && product.categories[0]?.name)) {
      categories.set(product.categories && product.categories[0]?.name, [
        {
          name: product.name,
          image: product.images && product.images[0]?.publicURL,
        },
      ]);
    } else {
      categories
        .get(product.categories && product.categories[0]?.name)
        .push({
          name: product.name,
          image: product.images && product.images[0]?.publicURL,
        });
    }
  });
  console.log(categories);
  const collection = [];

  categories.forEach((value, key) => {
    collection.push({ name: key, img: value[0].image });
  });
  console.log(collection);

  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: "100%",
        minHeight: "422px",
        backgroundColor: "#1B4B66",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          maxWidth: "1440px",
          minHeight: "422px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        <Box
          component="h1"
          sx={{
            width: 1,
            fontWeight: 600,
            fontSize: { xs: "24px", sm: "28px", md: "34px" }, // Responsive font size
            lineHeight: { xs: "32px", sm: "36px", md: "44px" },
            color: "#FFFFFF",
            m: 0,
          }}
        >
          Handpicked Collection
        </Box>
        <Grid container spacing={3} sx={{ width: 1, minHeight: "280px" }}>
          {collection.map((product, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index} // Added key prop for list rendering
              sx={{
                width: 1,
                height: 1,
                display: "flex", // Ensure grid items stretch to full height
              }}
            >
              <Box
                component={RouterLink}
                to={`/${product.name}`}
                sx={{
                  width: 1,
                  minHeight: "280px",
                  backgroundImage: `url(${product.img})`,
                  borderRadius: "20px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  textDecoration: "none",
                }}
              >
                <Box
                  component="h1"
                  sx={{
                    width: 1,
                    height: "114px",
                    m: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    pl: "20px",
                    pb: "25px",
                    background:
                      "linear-gradient(to bottom, rgba(196, 196, 196, 0), rgba(3, 24, 26, 0.46))",
                    borderRadius: "20px",
                    fontSize: { xs: "18px", sm: "20px" }, // Responsive font size
                    color: "#FFFFFF",
                  }}
                >
                  {product.name}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HandiPicked;
