import React, { useState } from "react";
import { StyledHeader } from "./styles";
import Logo from "../../assets/Logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledTitle } from "../../globalStyles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <StyledHeader>
      <img
        style={{
          width: "60px",
          height: "49px",
          cursor: "pointer",
        }}
        src={Logo}
        alt="Logo"
      />

      <StyledTitle></StyledTitle>

      <FontAwesomeIcon
        style={{
          cursor: "pointer",
        }}
        fontSize="1.6rem"
        color="black"
        icon={faBars}
        onClick={toggleDrawer(true)}
      />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "210px",
          },
        }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Option 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Option 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Option 3" />
          </ListItem>
        </List>
      </Drawer>
    </StyledHeader>
  );
};
