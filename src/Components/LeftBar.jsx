import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import BasicList from "./BasicList";
import React from "react";
import CustomizedSwitches from "./Switch";

function LeftBar({ onMode }) {
  return (
    <Box className="col-span-1 lg:col-span-2 m-0 h-[100vh] overflow-y-auton overflow-x-hidden min-w-[50px] ">
      <BasicList />
      <CustomizedSwitches onMode={onMode} />
      <Button
        sx={{
          borderRadius: "20px",
          padding: "7px 35px",
          backgroundColor: "#1DA1F2",
          color: "white",
          fontWeight: "bold",
          display: "none",
        }}
        className="w-[50%] hidden"
        variant="contained"
      >
        Post
      </Button>
      <ListItem alignItems="flex-start" sx={{ margin: "10px 0px" }}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          className="hidden lg:block"
          primary="Ahmed Tarek"
          secondary={<React.Fragment>{" @Roney"}</React.Fragment>}
        />
      </ListItem>
    </Box>
  );
}

export default LeftBar;
