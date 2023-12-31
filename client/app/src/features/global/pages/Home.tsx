import React from "react";
import ProductHero from "../components/ProductHero";
import DashboardNotConnected from "../components/DashboardNotConnected";
import SubNav from "../components/SubNav";
import { Box } from "@mui/material";
import SimplePaper from "../components/SimplePaper";

function Home() {
  return (
    <Box>
      <ProductHero img = {"https://cdn.pixabay.com/photo/2023/07/18/16/25/rowing-8135184_1280.jpg"} top ={"0%"} />
      <SubNav/>
      <DashboardNotConnected />
      <ProductHero img = {"https://mui.com/static/themes/onepirate/productCurvyLines.png"} top ={"90%"} />
      <SimplePaper/>
      <ProductHero img = {"https://cdn.pixabay.com/photo/2023/05/25/14/13/abstract-8017507_1280.jpg"} top ={"190%"} />

    </Box>
  );
}

export default Home;
