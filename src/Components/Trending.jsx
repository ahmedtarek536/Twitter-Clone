import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Trending() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <Box
      className=" border  mt-4  rounded-xl"
      sx={{ borderColor: borderColor }}
    >
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography
          variant="h5"
          gutterBottom
          className="px-3"
          sx={{ fontWeight: "bold", fontSize: "18px" }}
        >
          What's happening
        </Typography>
        <ListItem>
          <ListItemText secondary="Trending In Egypt" />
          <ListItemText primary="Sport" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="Trending In Egypt" />
          <ListItemText primary="Education" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="500k posts" />

          <ListItemText primary="" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="Trending In Egypt" />

          <ListItemText primary="Hals" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="2000k posts" />

          <ListItemText primary="Mohamed Salah" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="Trending In Egypt" />

          <ListItemText primary="Programming" />
        </ListItem>
        <ListItem>
          <ListItemText secondary="Trending In Egypt" />

          <ListItemText primary="Saudi" />
        </ListItem>

        <Typography
          variant="p"
          gutterBottom
          className="px-4  text-xs text-blue-500"
        >
          Show More
        </Typography>
      </List>
    </Box>
  );
}
