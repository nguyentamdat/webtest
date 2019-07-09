import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Link
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
}));

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div />
      <List>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Patient" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Link component={RouterLink} to="/">
                Registration{" "}
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/info">
                Information{" "}
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={() => {
            setOpen1(!open1);
          }}
        >
          <ListItemText primary="Visit" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem>
              <Link component={RouterLink} to="/visit/addNew">
                Visit Add new{" "}
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/visit/addOld">
                Visit Add old{" "}
              </Link>
            </ListItem>
            <ListItem>
              <Link component={RouterLink} to="/visit/info">
                Visit info{" "}
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem>
          <Link component={RouterLink} to="/visit/info">
            Prescription{" "}
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/visit/info">
            Lab Test Order{" "}
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/visit/info">
            Drug{" "}
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Log out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
