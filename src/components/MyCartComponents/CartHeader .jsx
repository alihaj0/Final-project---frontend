import React from 'react';
import { Box, Typography , Breadcrumbs, Link} from '@mui/material';

const CartHeader = () => (
  <Box sx={{ alignItems: 'center', mb: 2 , ml :"3%"}}>
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mb : "14px" ,mt : 0 }}>
      <Link underline="hover"  href="/" sx={{color :"#1B4B66" , fontWeight : "bold" , fontSize : "16px" , mr : "9px"}}>
        Home
      </Link>
      <Link underline="hover" href="/handbag" color="#626262" sx={{ fontWeight: "500" ,fontSize : "16px" , ml : "9px"}}>
        My Cart
      </Link>
    </Breadcrumbs>
    <Typography variant="h3" sx ={{color :"#1B4B66" , fontWeight: "600", fontSize: { xs: "28px", sm: "36px" }, mt : "40px"}}>My Cart</Typography>
  </Box>
);

export default CartHeader;


