// import { AppBar, Box, Toolbar, Typography ,Button } from "@mui/material";
// import { useState, useEffect } from "react";
// import Logo from "./leftNavigation/Logo";
// import RightNav from "./rightNavigation/RightNav";

// export default function Header() {

//   return (
//     <Box sx={{ zIndex: "3", flexGrow: 1, minHeight: "0px" }}>
//       <AppBar position="fixed" sx={{ backgroundColor: "#0000009f" }}>
//         <Toolbar sx={{ display:"flex" ,justifyContent: "space-between" }}>
//         <Logo/>
//         <RightNav/>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import React, { useState } from 'react';
import styled from 'styled-components';
import NotificationsIcon from "@mui/icons-material/Notifications";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// Define styled components
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  top: 0;
  position: sticky;
  background-color: #333333e3;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.button`
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Functional component for the responsive navbar
const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <NavbarContainer>
      <Logo>smart team</Logo>

      <IconsContainer>
        <IconButton onClick={() =>{}}><NotificationsIcon sx={{ fontSize: 23, color: "white" }} /></IconButton>
        <IconButton onClick={() => {}}><FavoriteIcon sx={{ fontSize: 23, color: "white" }} /></IconButton>
        <IconButton onClick={() =>{}}><HomeIcon sx={{ fontSize: 23, color: "white" }} /></IconButton>
        <IconButton onClick={() =>{}}><AccountCircleIcon/></IconButton>
        <MenuButton onClick={handleMobileMenuToggle}>☰</MenuButton>
      </IconsContainer>
    </NavbarContainer>
  );
};

export default Header;
