import { Box, Button } from '@mui/material'
import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import UserCircle from './menu/UserCircle';
function RightNav() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } , justifyContent:"space-evenly" ,width: "15%" , alignItems: "center" ,padding: "1px 8px" }}>
    <Button>
    <NotificationsIcon sx={{ fontSize: 23 , color:"white"}} />
    </Button>
    <Button>
    <FavoriteIcon sx={{ fontSize: 23 , color:"white"}} />
    </Button>
    <Button>
    <HomeIcon sx={{ fontSize: 23 , color:"white"}} />
    </Button>
    <UserCircle />
  </Box>
  )
}

export default RightNav