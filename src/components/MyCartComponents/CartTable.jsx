import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link,
  Stack,
  Box,
  Typography,
} from "@mui/material";

const CartTable = ({ items, onRemove }) => {
  return (
    <TableContainer sx={{ mb: 8, ml: "3%", width: "100%", maxWidth: "730px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                borderBottom: "0.1px solid #626262",
                color: "#626262",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Product Name
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderBottom: "0.1px solid #626262",
                color: "#626262",
                fontWeight: "bold",
                fontSize: "16px",
                display: { xs: "none", sm: "table-cell" }, // Hide Price column on mobile
              }}
            >
              Price
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderBottom: "0.1px solid #626262",
                color: "#626262",
                fontWeight: "bold",
                fontSize: "16px",
                display: { xs: "none", sm: "table-cell" }, // Hide Qty column on mobile
              }}
            >
              Qty
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderBottom: "0.1px solid #626262",
                color: "#626262",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Subtotal
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell align="left" sx={{ borderBottom: "none" }}>
                <Stack direction="row" spacing={2}>
                  <Box
                    component="img"
                    src={item.images[0] && item.images[0].publicURL}
                    alt={item.name}
                    sx={{
                      width: { xs: 60, sm: 80 },
                      height: { xs: 60, sm: 80 },
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "12px", sm: "14px" },
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "10px", sm: "12px" } }}
                    >
                      {item.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#626262"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px" },
                        display: { xs: "block", sm: "none" }, // Show Price on mobile below product name
                      }}
                    >
                      Price: ${item.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#626262"
                      sx={{
                        fontSize: { xs: "10px", sm: "12px" },
                        display: { xs: "block", sm: "none" }, // Show Qty below product name on mobile
                      }}
                    >
                      Qty: {item.quantity}
                    </Typography>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "none",
                  fontWeight: "400",
                  fontSize: { xs: "12px", sm: "14px" },
                  display: { xs: "none", sm: "table-cell" }, // Hide Price on mobile
                }}
              >
                ${item.price}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "none",
                  fontWeight: "400",
                  fontSize: { xs: "12px", sm: "14px" },
                  display: { xs: "none", sm: "table-cell" }, // Hide Qty on mobile
                }}
              >
                {item.quantity}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderBottom: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontWeight: "400",
                  fontSize: { xs: "12px", sm: "14px" },
                }}
              >
                ${(item.price * item.quantity).toFixed(2)}{" "}
                <Link
                  component="button"
                  variant="body2"
                  sx={{
                    color: "#B00020",
                    fontWeight: 600,
                    mt: 1,
                    textDecoration: "underline",
                    textUnderlineOffset: "2px",
                    textDecorationColor: "#B00020",
                    "&:hover": {
                      textDecorationColor: "#B00020",
                    },
                  }}
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartTable;
