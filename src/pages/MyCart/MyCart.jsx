import React from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import CartTable from "../../components/MyCartComponents/CartTable";
import OrderSummary from "../../components/MyCartComponents/OrderSummary";
import CartHeader from "../../components/MyCartComponents/CartHeader ";
import { getCart } from "../../lib/my-api";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

const MyCart = () => {
  const cartQuery = useQuery({
    queryKey: ["cart", "list"],
    queryFn: getCart,
  });
  const cart = cartQuery.data?.cart.products || [];
  console.log(cart);

  const queryClient = useQueryClient();

  const handleRemove = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(
      `https://backend-final-g1-955g.onrender.com/api/carts/product/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    queryClient.invalidateQueries(["cart", "list"]);
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const total = subtotal - discount;

  return (
    <Box sx={{ width: "100%",mb : 5 }}>
      <CartHeader />
      <Grid container>
        <Grid item xs={12} md={8}>
          <CartTable items={cart} onRemove={handleRemove} />
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderSummary subtotal={subtotal} discount={discount} total={total} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyCart;
