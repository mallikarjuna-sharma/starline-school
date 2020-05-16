import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import stringConstants from "./stringConstants.js";
import AboutUs from './AboutUs';
import Gallery from './Gallery';


function Dashboard() {
  return (
    <Grid container justify="center" direction="column" spacing={2}>

      <Grid item md={12} lg={12} style={{padding:0,margin:0}} >
        <Gallery />
      </Grid>

      <Grid item md={12} lg={12} >
        <AboutUs />
      </Grid>

    
     
    </Grid>
  );
}

export default Dashboard;
