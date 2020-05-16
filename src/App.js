import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./assests/logo.jpg";
import "./App.css";
import Dashboard from './Dashboard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
    <AppBar
      position="static"
      color="default"
      style={{ backgroundColor: "white", height: "80px" }}
    >
      <Toolbar style={{ padding: 0 }}>
        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
        <img src={Logo} style={{ height: "100%", width: "20%" }}></img>

        <ul>
          <li class="">
            <a href="#">About us</a>
          </li>
          <li class="">
            <a href="#">Academics</a>
          </li>
          <li class="">
            <a href="#">Facilities</a>
          </li>
          <li class="">
            <a href="#">Gallery</a>
          </li>
          <li class="">
            <a href="#">Contact us</a>
          </li>
        </ul>

        {/* <Typography>
        Website Devlopment in Progress waiting for godaddy
        </Typography> */}
      </Toolbar>
    </AppBar>
    <Dashboard/>
    </React.Fragment>
  );
}

export default App;
