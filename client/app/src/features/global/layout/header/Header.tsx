import { AppBar, Box, Toolbar, Typography ,Button } from "@mui/material";
import { useState, useEffect } from "react";
import Logo from "./leftNavigation/Logo";
import RightNav from "./rightNavigation/RightNav";

export default function Header() {

  return (
    <Box sx={{ zIndex: "3", flexGrow: 1, minHeight: "0px" }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#0000009f" }}>
        <Toolbar sx={{ display:"flex" ,justifyContent: "space-between" }}>
        <Logo/>
        <RightNav/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
