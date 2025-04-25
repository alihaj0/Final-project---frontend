import Summary from "../../components/CheckoutComponents/Summary";
import Information from "../../components/CheckoutComponents/Information";
import { Box, Link, Breadcrumbs, Stack, Typography } from "@mui/material";

const Checkout = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Checkout
    </Link>,
  ];

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: { xs: "16px", md: "24px" }, // Responsive margin-top
      }}
    >
      <Stack
        spacing={2}
        sx={{ width: "95%", mb: { xs: "16px", md: "24px" } }} // Responsive margin-bottom
      >
        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            color: "#1B4B66",
            fontSize: { xs: "14px", md: "16px" }, // Responsive font size
            fontWeight: 500,
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <Typography
        variant="h1"
        sx={{
          width: "95%",
          fontSize: { xs: "28px", md: "34px" }, // Responsive font size
          fontWeight: 600,
          lineHeight: { xs: "38px", md: "44px" }, // Responsive line height
          color: "#1B4B66",
          mb: { xs: "32px", md: "44px" }, // Responsive margin-bottom
        }}
      >
        Checkout
      </Typography>

      <Box
        component="div"
        sx={{
          width: "95%",
          minHeight: "545px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout direction
          justifyContent: { xs: "center", md: "space-between" }, // Adjust alignment for small screens
          mb: { xs: "50px", md: "150px" }, // Responsive margin-bottom
          gap: { xs: 4, md: 0 }, // Space between elements for smaller screens
        }}
      >
        <Information />
        <Summary />
      </Box>
    </Box>
  );
};

export default Checkout;
