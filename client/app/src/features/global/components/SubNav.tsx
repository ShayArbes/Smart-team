// import { AppBar, Box, Button } from "@mui/material";
// import React from "react";

// function SubNav() {
//   return (
//     // <Box sx={{width:"40%" , background:"red", position: "sticky", top: "100px"}}>
//     <Box sx={{ display: "flex", justifyContent: "center" }}>
//       <Box
//         sx={{
//           paddingTop: "8px",
//           paddingBottom: "8px",
//           margin: "74px 24px",
//           width: "57%",
//           position: "fixed",
//           zIndex: "10",
//           opacity: "1",
//           background: "rgb(255 255 255 / 67%);",
//           color: "rgb(52, 71, 103)",
//           borderRadius: "0.75rem",
//           boxShadow: "rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem",

//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             WebkitBoxPack: "justify",
//             justifyContent: "space-between",
//             WebkitBoxAlign: "center",
//             alignItems: "center",
//             opacity: 1,
//             background: "transparent",
//             color: "rgb(52, 71, 103)",
//             boxShadow: "none",
//           }}
//         >
//             <Box sx={{margin: "2px 2%",}}>
//                 smart team
//             </Box>
        
//           <Box sx={{display:"flex" ,    width: "40%"}}>

//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#d87d0c",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             בנייה
//           </Button>
//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#d87d0c",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             ריהוט
//           </Button>
//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#d87d0c",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             אחר
//           </Button>

//           </Box>
//           <Box sx={{display:"flex" ,    width: "40%"}}>

//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#44b700",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             אודות
//           </Button>
//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#44b700",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             חיפוש דיל
//           </Button>
//           <Button
//             sx={{
//               "&:hover": {
//                 color: "black",
//               },
//               background: "#44b700",
//               margin: "2px 2%",
//               color: "#ffffff",
//             }}
//           >
//             פתח קבוצת רכישה
//           </Button>

//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// export default SubNav;
import styled from 'styled-components';

const StyledBox = styled.div`
  padding-top: 8px;
  padding-bottom: 8px; 
  margin: 74px 24px;
  width: 57%;
  position: fixed;
  z-index: 10;
  opacity: 1;
  background: rgb(255 255 255 / 67%);
  color: rgb(52, 71, 103);
  border-radius: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, 
              rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem;
`;

const InnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 1;
  background: transparent;
  color: rgb(52, 71, 103);
  box-shadow: none; 
`;

const StyledButton = styled.button`
  &:hover {
    color: black;
  }
  background: ${props => props.color};
  margin: 2px 2%;
  color: ${props => (props.color === '#44b700' ? '#ffffff' : '#ffffff')}; 
  border: 0px;
  border-radius: 3px;
  padding: 0.25em 1em;
`;

export default function SubNav() {
  return (
    <StyledBox>
      <InnerBox>

        <div>smart team</div>

        <div>
          <StyledButton color="#d87d0c">בנייה</StyledButton>
          <StyledButton color="#d87d0c">ריהוט</StyledButton>
          <StyledButton color="#d87d0c">אחר</StyledButton>
        </div>

        <div>
          <StyledButton color="#44b700">אודות</StyledButton>
          <StyledButton color="#44b700">חיפוש דיל</StyledButton>  
          <StyledButton color="#44b700">פתח קבוצת רכישה</StyledButton>
        </div>

      </InnerBox>
    </StyledBox>
  );
}