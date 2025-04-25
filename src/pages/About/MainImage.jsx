import React from 'react';
import { Box, Typography } from '@mui/material';
import mainImg from "./AboutImages/banner.png";
const MainImage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
      }}
    >
      <img
        src={mainImg}
        alt="Description"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          left: '55%',
          color: 'black',
          textAlign: 'left',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        <Typography variant="h5" component="div" sx={{ marginBottom: '10px' , fontWeight:600,fontSize : "50px",letterSpacing: '9px'}}>
            ABOUT
        </Typography>
        <Typography variant="h6" component="div" sx={{width : "450px" , fontSize : "16px", fontWeight : 400, color :"#626262", lineHeight :"20px"}}>
          Lorem ipsum nostrum  ipsum cum accmagnam voluptate delectus fugit! Laboriosam.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainImage;
