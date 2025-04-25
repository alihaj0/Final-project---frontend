import React, { useState } from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const QuantitySelector = ({
  showLabel = true,
  quantity,
  increment,
  decrement,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "1px",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
      }}
    >
      {showLabel && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "16px", md: "20px" },
            mr: { xs: 0, sm: "16px" },
          }}
        >
          Quantity:
        </Typography>
      )}
      <Stack
        direction="row"
        border={`1px solid ${theme.palette.primary.main}`}
        borderRadius="4px"
        spacing={0}
      >
        <Button
          onClick={decrement}
          sx={{ minWidth: "0", padding: "4px", mr: "8px" }}
        >
          <RemoveIcon sx={{ fontSize: "18px", color: "black" }} />
        </Button>
        <Typography sx={{ fontSize: "14px", marginTop: "4px" }}>
          {quantity}
        </Typography>
        <Button onClick={increment} sx={{ minWidth: "0", padding: "4px" }}>
          <AddIcon sx={{ fontSize: "18px", color: "black", ml: "8px" }} />
        </Button>
      </Stack>
    </Box>
  );
};

export default QuantitySelector;
