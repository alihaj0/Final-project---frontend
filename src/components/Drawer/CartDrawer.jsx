import React, {useState} from 'react';
import { Drawer, Box, IconButton, Typography, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DrawerItem from './DrawerItem';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCart } from '../../lib/my-api';

const CartDrawer = ({ open, onClose }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const cartQuery = useQuery({
    queryKey: ["cartItems", "list"],
    queryFn: getCart,
    onError: (error) => console.error("Failed to fetch cart items", error),
  });
  const cartItems = cartQuery.data?.cart?.products || [];;

  const queryClient = useQueryClient();
  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://backend-final-g1-955g.onrender.com/api/carts/product/set",
        { productId: itemId, quantity: newQuantity },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      queryClient.invalidateQueries(["cartItems", "list"]);
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const handleBackClick = () => {
    onClose();
  };

  const handleApplyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); // Example: 10% discount
    } else {
      setDiscount(0); // No discount
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Example: 10% tax
  const total = subtotal + tax - discount;

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      transitionDuration={{ enter: 150, exit: 150 }} 
      sx={{ 
        '& .MuiDrawer-paper': {
          top: '80px',
          height: 'auto',
          maxHeight: '80%',
          width: { xs: '100%', sm: 400 }, 
          boxSizing: 'border-box',
          transition: 'transform 150ms ease-in-out', 
        },
      }}
    >
      <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={handleBackClick} sx={{ mr: 1, color: '#1B4B66' }}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#1B4B66' }}>
            Back
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          {cartItems.map((item) => (
            <DrawerItem
              key={item.id}
              imageSrc={item.images[0] && item.images[0].publicURL}
              itemName={item.name}
              itemDescription={item.description}
              quantity={item.quantity}
              price={item.price}
              onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
            />
          ))}
        </Box>

        <Box sx={{ my: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>Subtotal:</Typography>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>${subtotal.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>Tax:</Typography>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>${tax.toFixed(2)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>Total:</Typography>
            <Typography variant="body1" sx={{ fontSize: '14px', fontWeight: 400 }}>${total.toFixed(2)}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#F1F1F1', width: '80%', px: '8px', margin: '0 auto' }}>
          <TextField
            placeholder="Apply Coupon Code"
            variant="standard"
            fullWidth
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            InputProps={{
              disableUnderline: true,
              sx: {
                padding: '8px 0',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '18px',
                color: '#626262',
                '&::placeholder': { fontWeight: 500, fontSize: '16px' },
              },
            }}
          />
          <Button
            onClick={handleApplyCoupon}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
              color: '#1B4B66',
              marginLeft: 1,
              padding: 0,
            }}
          >
            Check
          </Button>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/checkout"
            fullWidth
            sx={{
              backgroundColor: '#1B4B66',
              color: 'white',
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '16px',
              padding: '4px 0',
              '&:hover': {
                backgroundColor: '#143A4F',
              },
            }}
          >
            Place Order
          </Button>
        </Box>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: 'underline',
              color: '#1B4B66',
              cursor: 'pointer',
              fontWeight: 600,
            }}
            onClick={onClose}
          >
            Continue Shopping
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
