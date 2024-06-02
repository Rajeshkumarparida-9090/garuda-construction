import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import logo from "../assets/images/gc-logo.png"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HeaderNavBar from "./HeaderNavBar";
import ReactPlayer from 'react-player';
import video3 from "../assets/images/vid3.mp4";
import video2 from "../assets/images/vid2.mp4";
import video1 from "../assets/images/vid1.mp4";
import bannerVideo from "../assets/images/home-banner-video.m4v";


const Header = ()=>{
    return(
        <>
            <Container  maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={4}>
                        <img src={logo} alt="logo" />
                    </Grid>
                    <Grid item md={8} className="flex justify-end items-center">
                        <Box className="flex items-center mr-4">
                            <CallIcon color="disabled" fontSize="small" className="mr-2" />
                            <Typography className="text-3xl font-bold"><a href="tel:9337179974">+91 9337179974</a></Typography>
                        </Box>
                        <Box className="flex items-center border-l pl-2">
                            <EmailIcon color="disabled" fontSize="small" className="mr-2" />
                            <Typography className="text-3xl font-bold"><a href="mailto:paridarajesh08@gmail.com" target="_top">paridarajesh08@gmail.com</a></Typography>
                        </Box>
                     
                    </Grid>
                </Grid>
            </Container>
            <HeaderNavBar />
            <ReactPlayer
            playing={true}
             loop={true}
             url={video3}
             width="100vw"
             height={`calc(100vh - 150px)`}
            //  loop
            //  controls
            />
        </>
    )
}
export default Header;