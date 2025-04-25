import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";

const Information = () => {
  return (
    <Box
      component="form"
      sx={{
        width: { xs: "100%", md: "60%" }, // Full width on small screens, 60% on medium+
        height: "100%",
        padding: { xs: "0 16px", md: 0 }, // Padding for smaller screens
      }}
    >
      <Accordion
        defaultExpanded
        disableGutters
        sx={{
          boxShadow: "none",
          "&:not(:last-child)": {
            borderBottom: "none",
          },
          "&:before": {
            display: "none", // Removes the divider between the accordions
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "26px",
              color: "#13101E",
            }}
          >
            Contact Information
          </Typography>
        </AccordionSummary>
        <Divider sx={{ width: "100%" }} />
        <AccordionDetails sx={{ mt: "24px" }}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger
                justifyContent: "space-between",
                gap: "16px", // Reduced gap for better spacing on small screens
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  First Name
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Enter First Name"
                  variant="filled"
                  fullWidth
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  Last Name
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Enter Last Name"
                  variant="filled"
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger
                justifyContent: "space-between",
                gap: "16px", // Reduced gap for better spacing on small screens
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  Mobile Number
                </Typography>
                <TextField
                  id="filled-basic"
                  label="+11"
                  variant="filled"
                  fullWidth
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Enter Email"
                  variant="filled"
                  fullWidth
                />
              </Box>
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger
                justifyContent: "space-between",
                gap: "16px", // Reduced gap for better spacing on small screens
              }}
            >
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  State
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Enter State"
                  variant="filled"
                  fullWidth
                />
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "100%", sm: "50%" }, // Full width on small screens, 50% on larger
                  gap: "8px",
                }}
              >
                <Typography
                  component="label"
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "#171520",
                  }}
                >
                  City
                </Typography>
                <TextField
                  id="filled-basic"
                  label="Enter City"
                  variant="filled"
                  fullWidth
                />
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        disableGutters
        sx={{
          boxShadow: "none",
          "&:not(:last-child)": {
            borderBottom: "none",
          },
          "&:before": {
            display: "none", // Removes the divider between the accordions
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography
            variant="h6"
            component="h6"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "26px",
              color: "#13101E",
            }}
          >
            Payment
          </Typography>
        </AccordionSummary>
        <Divider sx={{ width: "100%" }} />
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Information;
