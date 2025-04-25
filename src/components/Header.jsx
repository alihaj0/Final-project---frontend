import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Box,
  Button,
  Link,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import HeartIcon from "../assets/icons/heart.svg";
import UserIcon from "../assets/icons/user.svg";
import BagIcon from "../assets/icons/bag.svg";
import CartDrawer from "./Drawer/CartDrawer.jsx";
import { useAuth } from "../context/AuthContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F1F1F1",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    display: "none", // Hide search on larger screens
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0.8),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    "&::placeholder": {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "18px",
      color: "#626262",
    },
  },
}));

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const isBelow1200px = useMediaQuery("(max-width:1200px)");

  const handleBagClick = () => {
    if (!isAuthenticated) {
      navigate("/signup");
    } else {
      setDrawerOpen(!drawerOpen);
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/signin");
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "black",
        height: "80px",
        padding: "6px 12px",
        maxWidth: "1600px",
        width: "100%",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open menu"
            edge="start"
            onClick={handleMenuOpen}
            sx={{ display: { xs: "block", sm: "none" }, marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link component={RouterLink} to="/">
            <img src={logo} alt="Logo" style={{ height: "22px" }} />
          </Link>
          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              marginLeft: 2,
            }}
          >
            {[
              "Shoes",
              "Shirts",
              "Watches",
              "Handbags",
              "Sunglasses",
              "Sportswear",
              "Bags",
              "Accessories",
            ].map((item) => (
              <Button
                key={item}
                component={RouterLink}
                to={`/${item.toLowerCase()}`}
                sx={{
                  marginLeft: 1,
                  marginRight: 1,
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "18px",
                  color: "black",
                  textTransform: "none",
                  fontFamily: "Inter",
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>

        <Search
          sx={{
            marginLeft: { xs: 0, sm: 10 },
            display: { xs: "none", sm: "block" },
          }}
        >
          <SearchIconWrapper>
            <SearchIcon fontSize="small" style={{ fontSize: 24 }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for products or brands…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            aria-label="show favorite items"
            color="inherit"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img src={HeartIcon} style={{ width: "24px" }} />
          </IconButton>
          <IconButton
            sx={{ display: { xs: "none", sm: "block" } }}
            size="large"
            aria-label="user account"
            color="inherit"
            onClick={handleMenuOpen}
          >
            <img src={UserIcon} style={{ width: "24px" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {isAuthenticated ? (
              <>
                <MenuItem
                  component={RouterLink}
                  to="/myCart"
                  onClick={handleMenuClose}
                >
                  My Cart
                </MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  component={RouterLink}
                  to="/signin"
                  onClick={handleMenuClose}
                >
                  Sign In
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/signup"
                  onClick={handleMenuClose}
                >
                  Sign Up
                </MenuItem>
              </>
            )}
          </Menu>
          <IconButton
            size="large"
            aria-label="shopping cart"
            color="inherit"
            onClick={handleBagClick}
          >
            <img src={BagIcon} style={{ width: "24px" }} />
          </IconButton>
        </Box>
      </Toolbar>
      {isBelow1200px && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
          }}
        >
          {isAuthenticated ? (
            <>
              <MenuItem
                component={RouterLink}
                to="/myCart"
                onClick={handleMenuClose}
              >
                My Cart
              </MenuItem>
              <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                component={RouterLink}
                to="/signin"
                onClick={handleMenuClose}
              >
                Sign In
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/signup"
                onClick={handleMenuClose}
              >
                Sign Up
              </MenuItem>
            </>
          )}

          <Divider />
          <MenuItem>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize="small" style={{ fontSize: 24 }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products or brands…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </MenuItem>
          <Divider />
          {["Handbags", "Watches", "Skincare", "Jewelry", "Apparels"].map(
            (item) => (
              <MenuItem
                key={item}
                component={RouterLink}
                to={`/${item.toLowerCase()}`}
                onClick={handleMenuClose}
              >
                {item}
              </MenuItem>
            )
          )}
        </Menu>
      )}

      {isAuthenticated && (
        <CartDrawer open={drawerOpen} onClose={handleBagClick} />
      )}
    </AppBar>
  );
};

export default Header;
