import { AppBar, Box, Toolbar, Typography ,Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../main";
import UserCircle from "./UserCircle";
import NotificationsIcon from '@mui/icons-material/Notifications';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
export default function Header() {
  const [, setStatusUser] = useState(false);
  const userStatus = useSelector((state: RootState) => state.user.status);

  useEffect(() => {
    setStatusUser(userStatus);
    
  }, [userStatus]);
  return (
    <Box sx={{ zIndex: "9", flexGrow: 1, minHeight: "0px" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#0000009f" }}>
        <Toolbar sx={{ display:"flex" ,justifyContent: "space-between" }}>
          <Typography  variant="h6" component="div" sx={{  color:"white" }}>
            smart team
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
