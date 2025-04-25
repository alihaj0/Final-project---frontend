import React from 'react';
import { Grid, Typography , Box} from '@mui/material';
import BagsImage from "./AboutImages/bags.png";
import WatchesImage from "./AboutImages/watches.png";
import GlassesImage from "./AboutImages/glasses.png";
import MainImage from './MainImage';
const About = () => {
  return (
    <Box sx={{mb : "55px"}}>
        <Box sx={{mb : 4}}><MainImage/></Box>
        <Box sx={{mt : "30px", width : "710px", margin :  "0 auto "}}>
            <Typography align='center' variant="h5" component="div" sx={{ marginBottom: '10px' , fontWeight : 600 , fontSize : "20px"}}>
                About
            </Typography>
            <Typography variant="h6" align="center" color="#626262"  sx={{fontWeight : 400, fontSize :"16px", lineHeight :"20px"}}>Lorem ipsum dolor sit consectetur adipisicing elit. amet consectetur adipisicing elit. Ratione cum doloribus quas necessitatibus molestiae eum itaque voluptate quisquam, sequi facere. Fugit neque odit soluta eius deleniti in natus cum autem.</Typography>
        </Box>
        <Box sx={{p : 2, mt : 3}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={5}>
                    <Typography variant="h5" component="div" sx={{ marginBottom: '10px' , fontWeight : 600 , fontSize : "20px"}}>
                        About
                    </Typography>
                    <Typography variant="h6" align="left" color="#626262" sx={{fontWeight : 400, fontSize :"16px", lineHeight :"20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odit nulla illo similique vero natus maiores,consectetur adipisicing elit.  earum aspernatur nihil sint quidem optio deleniti tempora corporis hic? Modi soluta accusamus nesciunt?
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <img src= {BagsImage} alt="Description" style={{ width: '100%', height: 'auto' }}/>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{p : 2}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={7}>
                    <img src= {WatchesImage} alt="Description" style={{ width: '100%', height: 'auto' }}/>
                </Grid>
                <Grid item xs={5}>
                    <Typography variant="h5" component="div" sx={{ marginBottom: '10px' , fontWeight : 600 , fontSize : "20px"}}>
                        About
                    </Typography>
                    <Typography variant="h6" align="left" color="#626262" sx={{fontWeight : 400, fontSize :"16px", lineHeight :"20px"}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odit nulla illo similique vero natus maiores, consectetur adipisicing elit. earum aspernatur nihil sint quidem optio deleniti tempora corporis hic? Modi soluta accusamus nesciunt?
                    </Typography>
                </Grid>
            </Grid>
        </Box>

        <Box sx={{p : 2}}>
            <Grid container alignItems="center" spacing={2}>
                <Grid item xs={5}>
                    <Typography variant="h5" component="div" sx={{ marginBottom: '10px' , fontWeight : 600 , fontSize : "20px"}}>
                        About
                    </Typography>
                    <Typography variant="h6" color="#626262" fontSize="16px" align="left" >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus odit nulla illo similique vero natus maiores, earum aspernatur nihil sint quidem optio deleniti tempora corporis hic? Modi soluta accusamus nesciunt?
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    <img src= {GlassesImage} alt="Description" style={{ width: '100%', height: 'auto' }}/>
                </Grid>
            </Grid>
        </Box>
    </Box>




  );
};

export default About;