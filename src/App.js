import { Grid, Toolbar } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
// import Logo from "./assests/StarLionSchoolLogo.jpg";
import Logo from "./assests/logo_trans.png";
import Dashboard from "./Dashboard";

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
  appBar: {
    // paddingLeft:"25%",
    backgroundColor: "white",
    height: "10vh",
    [theme.breakpoints.down("md")]: {
      height: "5%",

    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <AppBar position="fixed" color="inherit" className={classes.appBar}> */}
      <Grid container>
        <Grid item>
          <img
            src={Logo}
            style={{ height: "100%", width: "18%", paddingLeft: "40%" }}
          ></img>
        </Grid>
      </Grid>

      <AppBar position="sticky" color="inherit" className={classes.appBar}>
        <Toolbar style={{ padding: 0 }}>



       

          <Grid container justify="center">
            <button  className="btn btn1">
            About us
              {/* <a href="#">About us</a> */}
            </button>
            <button className="btn btn2">
            Academics
              {/* <a href="#">Academics</a> */}
            </button>
            <button  className="btn btn1">
            Facilities
              {/* <a href="#">Facilities</a> */}
            </button>
            <button className="btn btn2">
            Gallery
              {/* <a href="#">Gallery</a> */}
            </button>
            <button  className="btn btn1">
            Contact us
              {/* <a href="#">Contact us</a> */}
            </button>
          </Grid>

          {/* <Typography>
        Website Devlopment in Progress waiting for godaddy
        </Typography> */}
        </Toolbar>
      </AppBar>
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
