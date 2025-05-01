import React from 'react';
import { Box, Typography, IconButton, Divider, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import axios from 'axios';
import { useMutation, useQueryClient } from "@tanstack/react-query";


const DrawerItem = ({ imageSrc, itemName, itemDescription, quantity, price, id }) => {

  const useRemoveItem = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: async (itemId) => {
        const token = localStorage.getItem("token");
        const response = await axios.delete(
          `https://backend-final-g1-955g.onrender.com/api/carts/product/delete/${itemId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data;
      },
      onSuccess: () => {
        // Refresh the cart data after deletion
        queryClient.invalidateQueries({ queryKey: ["cartItems", "list"] });
      },
    });
  };

  const { mutate: removeItemFromCart, isPending } = useRemoveItem();

  const removeItem = (itemId) => {
    removeItemFromCart(itemId);

  }



  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
      <Button data-testid="removeBtn" sx={{ width: "10%", }} onClick={() => removeItem(id)}>
        x
      </Button>
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
            {/* Quantity */}
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
    </Box>
  );
};

export default DrawerItem;
