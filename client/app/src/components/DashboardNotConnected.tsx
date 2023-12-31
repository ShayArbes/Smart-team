import React from "react";
import { Box, Button, Typography } from "@mui/material";
function DashboardNotConnected() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "5%"
      }}
    >
      <Box sx={{  background: " #ff8c0087", borderRadius: "21px", backdropFilter: "blur(1px)", width: "50%", textAlign: "center" }}>
        <Typography sx={{ direction: "rtl" }} color="white" align="center" variant="h4">
          הצטרפו לקהילה של הרכישה הקבוצתית והשיגו עסקאות בלעדיות במחירים מוזלים באמצעות כוחה של קנייה קולקטיבית.
        </Typography>
      </Box>
      <Box>

        <Button sx={{fontSize:"20px", padding: "1% 6vw", margin:"25px", border : "1px" ,borderRadius:"25px" , background:"#44b700e6" ,color: "white"}}>הרשמה</Button>
        <Button sx={{fontSize:"20px", padding: "1% 6vw", margin:"25px" , border : "1px" ,borderRadius:"25px" , background:"#44b700e6" ,color: "white"}}>כניסה</Button>
      </Box>
    </Box>
  );
}

export default DashboardNotConnected;
