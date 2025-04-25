import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const DrawerItem = ({ imageSrc, itemName, itemDescription, quantity, price, onQuantityChange }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on mobile, row on larger screens
          alignItems: { xs: 'flex-start', sm: 'center' }, // Align items differently based on screen size
          py: 2,
          px: { xs: 1, sm: 2 }, // Adjust padding for mobile
          width: '100%',
        }}
      >
        {/* Item Image */}
        <Box
          component="img"
          src={imageSrc}
          alt={itemName}
          sx={{
            width: { xs: '50px', sm: '80px' }, // Smaller width for mobile
            height: { xs: '50px', sm: '80px' }, // Smaller height for mobile
            objectFit: 'cover',
            borderRadius: '8px',
            mr: { xs: 0, sm: 2 }, // Margin only on larger screens
            mb: { xs: 1, sm: 0 }, // Margin bottom only on mobile
          }}
        />

        {/* Item Details and Quantity Selector */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px' }, // Smaller font size for mobile
              fontWeight: 600,
              color: '#1B4B66',
              mb: 0.5,
            }}
          >
            {itemName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: '12px', sm: '14px' }, // Adjust font size for mobile
              color: '#626262',
              mb: 1,
              maxWidth: '100%',
            }}
          >
            {itemDescription}
          </Typography>

          {/* Quantity Selector and Price */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', sm: 'row' }, // Keep row layout on larger screens
              alignItems: 'center',
              justifyContent: 'space-between', // Distribute space between quantity and price
              mt: 1,
            }}
          >
            {/* Quantity Controls */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #E0E0E0',
                borderRadius: '4px',
                px: 1,
                mr: 2, // Margin to separate price and quantity
              }}
            >
              <IconButton
                onClick={() => onQuantityChange(quantity - 1)}
                size="small"
                sx={{ color: '#1B4B66', padding: 0 }}
              >
                <Remove fontSize="small" />
              </IconButton>
              <Typography
                variant="body2"
                sx={{
                  mx: 1,
                  fontSize: { xs: '14px', sm: '16px' },
                  fontWeight: 500,
                  color: '#1B4B66',
                }}
              >
                {quantity}
              </Typography>
              <IconButton
                onClick={() => onQuantityChange(quantity + 1)}
                size="small"
                sx={{ color: '#1B4B66', padding: 0 }}
              >
                <Add fontSize="small" />
              </IconButton>
            </Box>

            {/* Price */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                fontWeight: 600,
                color: '#1B4B66',
                minWidth: '50px', // Ensures consistent width
                textAlign: 'center',
              }}
            >
              ${price.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ width: '100%', my: 1 }} />
    </>
  );
};

export default DrawerItem;
