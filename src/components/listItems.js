import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link
      to={"/personagens"}
      style={{ color: "black", textDecoration: "none" }}
    >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Personagens" />
      </ListItem>
    </Link>
    <Link to={"/planetas"} style={{ color: "black", textDecoration: "none" }}>
      <ListItem button>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <ListItemText primary="Planetas" />
      </ListItem>
    </Link>
  </div>
);
