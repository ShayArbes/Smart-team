import React from "react";
import {Background} from "../style/background.style";
import DashboardNotConnected from "../components/DashboardNotConnected";
import SubNav from "../components/SubNav";
import { Box } from "@mui/material";
import SimplePaper from "../components/SimplePaper";

function Home() {
  return (
    <Box>
      <Background img = {"https://cdn.pixabay.com/photo/2023/07/18/16/25/rowing-8135184_1280.jpg"} top ={"0%"} />
      <SubNav/>
      <DashboardNotConnected />
      <Background img = {"https://mui.com/static/themes/onepirate/productCurvyLines.png"} top ={"90%"} />
      <SimplePaper/>
      <Background img = {"https://cdn.pixabay.com/photo/2023/05/25/14/13/abstract-8017507_1280.jpg"} top ={"190%"} />

    </Box>
  );
}

export default Home;
