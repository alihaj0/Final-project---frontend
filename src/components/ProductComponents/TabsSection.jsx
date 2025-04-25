import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const TabsSection = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst.",
    "Tincidunt malesuada malesuada. Viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
    "Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique. Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat. Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.",
  ];

  return (
    <Box>
      <Tabs 
        value={value} 
        onChange={handleChange} 
        variant={isMobile ? "fullWidth" : "standard"} // Full width for mobile, standard for larger screens
        sx={{ 
          backgroundColor: "#F1F1F1", 
          borderRadius: "12px",
          p: "8px",
          height: isMobile ? "42px" : "48px", // Smaller height for mobile
          display: 'flex',
          justifyContent: 'center',
        }}
        TabIndicatorProps={{ style: { display: 'none' ,borderRadius: '8px'} }}  
      >
        <Tab 
          label="Product Description" 
          sx={{
            backgroundColor: value === 0 ? '#1B4B66' : 'transparent',
            color: value === 0 ? '#FFFFFF' : '#626262',
            borderRadius: '8px',
            fontWeight: 600,
            minWidth: 0, // Allow tabs to shrink
            fontSize: isMobile ? '10px' : '12px',
            px: isMobile ? '8px' : '10px',
            py: isMobile ? '1px' : '2px',
            
            '&.Mui-selected': { // Target selected tab
            backgroundColor: '#1B4B66',
            color: '#FFFFFF',
    },
          }} 
        />
        <Tab 
          label="Related Products" 
          sx={{
            backgroundColor: value === 1 ? '#1B4B66' : 'transparent',
            color: value === 1 ? '#FFFFFF' : '#626262',
            borderRadius: '8px',
            fontWeight: 600,
            minWidth: 0, 
            fontSize: isMobile ? '10px' : '12px',
            px: isMobile ? '8px' : '10px',
            py: isMobile ? '1px' : '2px',
            '&.Mui-selected': { // Target selected tab
            backgroundColor: '#1B4B66',
            color: '#FFFFFF',
    },
          }} 
        />
        <Tab 
          label="Ratings and Reviews" 
          sx={{
            backgroundColor: value === 2 ? '#1B4B66' : 'transparent',
            color: value === 2 ? '#FFFFFF' : '#626262',
            borderRadius: '8px',
            fontWeight: 600,
            minWidth: 0, 
            fontSize: isMobile ? '10px' : '12px',
            px: isMobile ? '8px' : '10px',
            py: isMobile ? '1px' : '2px',
            '&.Mui-selected': { // Target selected tab
              backgroundColor: '#1B4B66',
              color: '#FFFFFF',
    },
          }} 
        />
    
      </Tabs>
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, lineHeight: 1.6, fontWeight: 'bold', color: "#626262" }}>
          {tabContent[value]}
        </Typography>
      </Box>
    </Box>
  );
};

export default TabsSection;
