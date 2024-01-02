import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardContent, List, Table, TableRow, Typography, TableCell, ListItem, ListItemText, Grid, Tooltip, Fab, Stack, Rating, IconButton, CardActionArea, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Deal, data } from "../interfaces/dealInterface";
import { useState } from "react";
import { LinearProgress } from "@mui/material";
import moment from "moment";
const DealInfo = () => {
  const currentDate = moment();
  const endDate = moment(data.deals[0].endDate);
  let daysRemaining = endDate.diff(currentDate, "days");
  daysRemaining = daysRemaining < 1 ? 0 : daysRemaining;

  return (
    <div>
      <Box sx={{ direction: "rtl" }}>
        <Card
          sx={{
            borderRadius: 2,
            boxShadow: 2,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            paddingTop: { lg: 10, xs: "70px" },
          }}
        >
          <CardMedia component="img" sx={{ width: { lg: "30vw", xs: "95vw" }, borderRadius: 2, marginBottom: 2 }} width={1000} image={data.deals[0].pictures[0].imgUrl} alt="product images" />
          <CardContent sx={{ width: { lg: "30vw", xs: "95vw" }, p: 3, pt: 2 }}>
            <Typography variant="h5">{data.deals[0].productName}</Typography>
            <Typography paddingTop={5} paddingBottom={5} variant="body1" width={"100%"}>
              {data.deals[0].description}
            </Typography>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress sx={{ width: "100vw%" }} variant="determinate" value={75} />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(75)}%`}</Typography>
              </Box>
            </Box>
            <Stack paddingTop={1} paddingBottom={5} direction="row" alignItems="center" justifyContent="space-between" mt={1}>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "1000", fontSize: "18px" }} variant="body1">
                  {data.deals[0].amount.current}
                </Typography>
                <Typography variant="body1">{"שותפים"}</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "1000", fontSize: "18px" }} variant="body1">
                  {daysRemaining}
                </Typography>
                <Typography variant="body1">{"ימים נותרו"}</Typography>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography sx={{ fontWeight: "1000" }} variant="h6">
                  ₪{data.deals[0].priceOffers[0].price}
                </Typography>
                <Typography variant="body1">{"מחיר נוכחי"}</Typography>
              </Box>
            </Stack>
            <Button sx={{ width: "100%" }} variant="contained" disableElevation>
              להצטרפות
            </Button>
          </CardContent>
        </Card>
        <Box width={50}>
          <Table>
            <TableRow>
              <TableCell>אורך</TableCell>
              <TableCell>{data.deals[0].length} ס"מ</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>רוחב</TableCell>
              <TableCell>{data.deals[0].width} ס"מ</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>גובה</TableCell>
              <TableCell>{data.deals[0].height} ס"מ</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>חומר פנימי</TableCell>
              <TableCell>{data.deals[0].interiorMaterial}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>חומר חיצוני</TableCell>
              <TableCell>{data.deals[0].exteriorMaterial}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>מיקום</TableCell>
              <TableCell>{data.deals[0].location}</TableCell>
            </TableRow>
          </Table>
        </Box>
      </Box>
    </div>
  );
};

export default DealInfo;
