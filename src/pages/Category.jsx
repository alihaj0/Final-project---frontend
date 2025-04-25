import { Box, Breadcrumbs, Stack, Typography, Button } from "@mui/material";
import image1 from "../assets/category/hero.png";
import { Link as RouterLink } from "react-router-dom";
import PaginatedList from "../components/CategoryComponents/Pagination";
import { useParams } from "react-router-dom";

const Category = () => {
  const { category } = useParams();
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
      {category}
    </Button>,
  ];
  return (
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
        {category}
      </Typography>
      <PaginatedList category={category} />
    </Box>
  );
};

export default Category;
