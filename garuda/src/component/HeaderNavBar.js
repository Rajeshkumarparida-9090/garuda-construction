import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = ['About Us', 'Expertise', 'Commitment', "Investors","Landmarks", "Media","Human Capital", "Contact"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const HeaderNavBar = ()=>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    return(
        <>
        <AppBar position="static" sx={{background:"#160255",height:44}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters className="flex justify-end items-center w-100">

                {/* Desktop view */}
                {/* <Box className="flex justify-end items-center w-100"> */}
               
                <Box className="flex justify-end items-center w-100">
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>

                {/* </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}
export default HeaderNavBar