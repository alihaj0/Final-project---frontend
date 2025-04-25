import MuiButton from "@mui/material/Button";

const Button = ({ children, sx, ...props }) => {
  return (
    <MuiButton sx={sx} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
