import React from "react";
import { Container, Typography, Link, Divider, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { NavHashLink } from "react-router-hash-link";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youTube from "../assets/icons/youtube.svg";
import { Link as RouterLink } from 'react-router-dom';
const categories = ["Handbags", "Watches", "Skincare", "Jewelry", "Apparels"];
const products = [
  { name: "Featured", link: "/#handiPicked" },
  { name: "Trendy", link: "/#trendy" },
  { name: "Brands", link: "/#brands" },
];

const Footer = () => {
  return (
    <Container sx={{ backgroundColor: "#1b4b66" }} width="100%" maxWidth="1440px">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        sx={{ padding: "30px", paddingBottom: "70px" }}
        spacing={3}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, md: 10 }}>
          <Stack spacing={1}>
            <Typography sx={{ color: "white" }} component="div">Shop by Category</Typography>
            {categories.map((category) => (
              <Link key={category} sx={{ color: "#B6B6B6", textDecoration: 'none' }}>
                {category}
              </Link>
            ))}
          </Stack>

          <Stack spacing={1}>
            <Typography sx={{ color: "white" }} component="div">Shop by Products</Typography>
            {products.map((product) => (
              <NavHashLink key={product.name} to={product.link} style={{ textDecoration: "none" }} smooth>
                <Typography color="#B6B6B6">{product.name}</Typography>
              </NavHashLink>
            ))}
          </Stack>
          <Stack spacing={1} sx={{ flexShrink: 0 }}>
              <Link component={RouterLink} to="/about" sx={{ color: "white", textDecoration: 'none' }}>
                <Typography component="div">About Us</Typography>
              </Link>
        </Stack>
        </Stack>


      

        <Stack spacing={2}>
          <Divider
            sx={{
              width: "100%",
              height: "1px",
              bgcolor: "primary.tint",
              display: { xs: "block", sm: "none" },
            }}
          />
          <Stack direction="row" gap={2} justifyContent={{ xs: "flex-start", sm: "flex-end" }} flexWrap="wrap">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
            <img src={youTube} alt="YouTube" />
          </Stack>

          <Stack spacing={0.5}>
            <Stack direction="row" alignItems="center" spacing={1} justifyContent={{ xs: "flex-start", sm: "flex-end" }}>
              <LocationOnOutlinedIcon sx={{ color: "white" }} fontSize="medium" />
              <Typography sx={{ color: "white" }}>United States</Typography>
            </Stack>
            <Typography sx={{ color: "#B6B6B6" }}>
              © 2021 | Cora Leviene All Rights Reserved
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
