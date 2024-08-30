import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  BoltOutlined,
  BookmarkBorderOutlined,
  BorderColorOutlined,
  EmailOutlined,
  Home,
  ModeStandbyOutlined,
  MoreHorizOutlined,
  NotificationsNone,
  PeopleOutlined,
  PersonOutlined,
  Search,
} from "@mui/icons-material";

export default function BasicList() {
  return (
    <Box
      className="bg-red-500"
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Search />
              </ListItemIcon>
              <ListItemText primary="Explore" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsNone />
              </ListItemIcon>
              <ListItemText
                primary="Notifications"
                className="hidden lg:block"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailOutlined />
              </ListItemIcon>
              <ListItemText primary="Messages" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BorderColorOutlined />
              </ListItemIcon>
              <ListItemText primary="Grok" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderOutlined />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PeopleOutlined />
              </ListItemIcon>
              <ListItemText primary="Communities" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeStandbyOutlined />
              </ListItemIcon>
              <ListItemText primary="Premium" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BoltOutlined />
              </ListItemIcon>
              <ListItemText
                primary="Verified Orgs"
                className="hidden lg:block"
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PersonOutlined />
              </ListItemIcon>
              <ListItemText primary="Profile" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MoreHorizOutlined />
              </ListItemIcon>
              <ListItemText primary="More" className="hidden lg:block" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
