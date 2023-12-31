import { Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function ProductHero(prop:{img : string , top :string}) {
  const imageURL = prop.img;

  return (
    <Box
      component="div"
      sx={{
        position: "absolute",
        width: "100%",
        top :prop.top,
        height: "90%",
        backgroundImage: `url(${imageURL})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
<ExpandMoreIcon sx={{fontSize: "2rem" , color :"white"}}/>
    </Box>
  );
}
