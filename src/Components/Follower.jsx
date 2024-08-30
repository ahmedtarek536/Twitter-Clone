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

export default function Follower() {
  const theme = useTheme();
  const borderColor = theme.palette.mode === "dark" ? "#272727" : "#eee";
  return (
    <Box className=" border-2  mt-4  rounded-xl" sx={{ borderColor }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <Typography
          variant="h5"
          gutterBottom
          className="px-3"
          sx={{ fontWeight: "bold", fontSize: "18px" }}
        >
          Who to follow
        </Typography>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="https://mui.com/static/images/avatar/1.jpg" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="https://mui.com/static/images/avatar/2.jpg" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img src="https://mui.com/static/images/avatar/3.jpg" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
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
