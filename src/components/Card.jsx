import Box from "@mui/material/Box";

const Card = ({ children, sx, ...props }) => {
  return (
    <Box sx={{ ...sx }} {...props}>
      {children}
    </Box>
  );
};

export default Card;
