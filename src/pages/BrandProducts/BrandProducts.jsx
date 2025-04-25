import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography ,Link} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const BrandProducts = () => {
  const { brandId } = useParams();

  return (
    <Box sx={{ textAlign: 'center', color: '#1B4B66' }}>
        <Typography component="h1" variant="h4" >
            Products for Brand {brandId}
        </Typography>
         <Link component={RouterLink} to="/" >Home Page</Link>
    </Box>
  );
};

export default BrandProducts;
