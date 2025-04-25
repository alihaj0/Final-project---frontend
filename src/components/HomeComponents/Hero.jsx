import Box from "@mui/material/Box";
import Button from "../Button";
import image1 from "../../assets/homeBackground.png";
import EastIcon from "@mui/icons-material/East";

const Hero = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          mt : "37px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "52px",
        }}
      >
        <Box
          component="section"
          sx={{
            width: "95%",
            minHeight: 400,
            backgroundImage: `url(${image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "24px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            overflow: "hidden",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            component="section"
            sx={{
              width: { xs: "100%", md: "50%" },
              minHeight: { xs: "auto", md: "315px" },
              backgroundColor: "rgba(222 , 222 , 222 , 0.7)",
              borderRadius: { xs: 0, md: "24px 0 0 24px" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              padding: { xs: 2, md: 3 },
              boxSizing: "border-box",
            }}
          >
            <Box
              component="section"
              sx={{
                width: "95%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "self-start",
              }}
            >
              <Box
                component="h1"
                sx={{
                  width: "100%",
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "52px" },
                  lineHeight: { xs: "48px", md: "84px" },
                  color: "#1B4B66",
                  opacity: "100%",
                  m: 0,
                }}
              >
                Carry your Funk
              </Box>
              <Box
                component="p"
                sx={{
                  width: "100%",
                  fontWeight: 500,
                  fontSize: { xs: "18px", md: "29px" },
                  lineHeight: { xs: "28px", md: "38px" },
                  color: "#1B4B66",
                  opacity: "100%",
                  m: 0,
                  mt: { xs: 1, md: 2 },
                }}
              >
                Trendy handbags collection for your party animal
              </Box>
            </Box>

            <Box sx={{ width: "95%", mt: { xs: 2, md: 0 } }}>
              <Button
                sx={{
                  minWidth: "180px",
                  backgroundColor: "#1B4B66",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  padding: { xs: "8px 16px", md: "10px 20px" },
                }}
              >
                <EastIcon sx={{ maxWidth: "24px", pr: 1 }} /> See More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
