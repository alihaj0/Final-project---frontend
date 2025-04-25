import Box from "@mui/material/Box";
import Button from "../Button";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import EastIcon from "@mui/icons-material/East";
import { Link as RouterLink } from "react-router-dom";

const Cards = ({ id }) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        width: "95%",
        minHeight: "668px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mb: "69px",
        alignItems: "center",
        mt: "88px",
        alignSelf: "center",
      }}
    >
      <Box
        component={RouterLink}
        to={`/Limited Edition`}
        sx={{
          width: "100%",
          minHeight: "400px",
          backgroundImage: `url(${card1})`,
          borderRadius: "20px",
          backgroundRepeat: "round",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          textDecoration: "none",
        }}
      >
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "start",
            pl: { xs: "10px", md: "40px" },
          }}
        >
          <Box
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "20px", sm: "25px", md: "30px" },
              lineHeight: "20px",
              color: "#97451F",
              m: 0,
              mb: "23px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Limited Edition
          </Box>
          <Box
            component="h1"
            sx={{
              maxWidth: { xs: "50%", md: "618px" },
              fontWeight: 700,
              fontSize: { xs: "30px", sm: "40px", md: "50px" },
              lineHeight: { xs: "40px", sm: "50px", md: "68px" },
              color: "#97451F",
              m: 0,
            }}
          >
            Limited Edition Products From Top Brands
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "228px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box
          component={RouterLink}
          to={`/Discounted`}
          sx={{
            width: { xs: "100%", sm: "49%" },
            minHeight: "100%",
            backgroundImage: `url(${card2})`,
            backgroundRepeat: "round",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "40%",
              minHeight: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              pr: "40px",
            }}
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                fontWeight: 700,
                fontSize: { xs: "30px", sm: "35px", md: "40px" },
                lineHeight: "52px",
                color: "#A53F64",
                textAlign: "end",
                width: "100%",
              }}
            >
              15% off and more!
            </Box>
            <Button
              sx={{
                height: "60px",
                background: "#F1F1F1",
                borderRadius: "50%",
                p: 0,
              }}
            >
              <EastIcon
                sx={{
                  p: 0,
                  width: "50%",
                  height: 1,
                  color: "#A53F64",
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box
          component={RouterLink}
          to={`/Popular`}
          sx={{
            width: { xs: "100%", sm: "49%" },
            minHeight: "100%",
            backgroundImage: `url(${card3})`,
            backgroundRepeat: "round",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "50%",
              minHeight: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-end",
              pr: "40px",
            }}
          >
            <Box
              component="h1"
              sx={{
                m: 0,
                fontWeight: 700,
                fontSize: { xs: "30px", sm: "35px", md: "40px" },
                lineHeight: "52px",
                color: "#1B4B66",
                textAlign: "end",
                width: "100%",
              }}
            >
              Popular in the community!
            </Box>
            <Button
              sx={{
                height: "60px",
                background: "#F1F1F1",
                borderRadius: "50%",
                p: 0,
              }}
            >
              <EastIcon
                sx={{ p: 0, width: "50%", height: 1, color: "#1B4B66" }}
              />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
