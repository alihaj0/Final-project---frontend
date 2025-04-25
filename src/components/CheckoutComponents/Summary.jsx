import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../lib/my-api";

const Summary = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cart", "list"],
    queryFn: getCart,
  });
  const cart = data?.cart.products || [];

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = 10;
  const total = subtotal - discount;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading cart data.</div>;

  return (
    <Box
      component="div"
      sx={{
        width: { xs: "100%", md: "35%" }, // Full width on mobile, 35% on larger screens
        height: "100%",
        px: { xs: 2, md: 0 }, // Padding on mobile for better spacing
      }}
    >
      <Box component="div" sx={{ minHeight: "60px", mb: "12px" }}>
        <Typography
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "18px", md: "20px" }, // Responsive font size
            lineHeight: "26px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Order Summary
        </Typography>
        <Divider textAlign="center" />
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "242px",
          mb: "24px",
        }}
      >
        {cart.map((product) => (
          <Box
            key={product.id}
            component="div"
            sx={{
              minHeight: "97px",
              display: "flex",
              mb: "24px",
            }}
          >
            <Box
              component="img"
              sx={{
                width: { xs: "65px", md: "75px" }, // Adjust image size for smaller screens
                height: { xs: "70px", md: "80px" },
                ml: "5px",
                borderRadius: "5px",
              }}
              src={product.images && product.images[0]?.publicURL}
              alt={product.name}
            />
            <Box
              component="div"
              sx={{
                width: "100%",
                maxHeight: "80px",
                ml: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Typography
                component="h3"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "14px", md: "16px" }, // Responsive font size
                  lineHeight: "20px",
                  color: "#171520",
                }}
              >
                {product.name}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "20px",
                  color: "#626262",
                }}
              >
                {product.description}
              </Typography>
              <Typography
                component="h3"
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: "20px",
                  color: "#626262",
                }}
              >
                Qty - {product.quantity}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box component="div" sx={{ minHeight: "195px" }}>
        <Box component="div" sx={{ minHeight: "60px" }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "18px", md: "20px" },
              lineHeight: "26px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Order Details
          </Typography>
          <Divider textAlign="center" />
        </Box>
        <Box component="div">
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Sub Total
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              ${subtotal.toFixed(2)}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Discount
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              -${discount}
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20px",
                color: "#626262",
              }}
            >
              Delivery Fee
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 500,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              -$0.00
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "space-between",
              mb: "12px",
            }}
          >
            <Typography
              component="p"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              Grand Total
            </Typography>
            <Typography
              component="p"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "18px",
                color: "#171520",
              }}
            >
              ${total.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Summary;
