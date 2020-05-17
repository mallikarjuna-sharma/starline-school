import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import stringConstants from "./stringConstants.js";
import Gallery from './Gallery';
import AboutUsCard from './AboutUsCard';
import { makeStyles } from "@material-ui/core/styles";
import Facilities from './Facilities';
import ContactUs from './ContactUs';


const useStyles = makeStyles((theme) => ({
  
  gallery:{
    padding:0,
    margin:0,
    height:"90vh",
    marginTop:"1vh",
    [theme.breakpoints.down('md')]: {
      height:"90%",
      marginTop:"0vh",
    },
  }
}));

function Dashboard() {
  const classes = useStyles();

  return (
    <Grid container justify="center" direction="column" spacing={6}>

      <Grid item md={12} lg={12} className={classes.gallery} >
        <Gallery />
      </Grid>

      <Grid item md={12} lg={12} >
        <AboutUsCard/>
      </Grid>

      <Grid item md={12} lg={12} >
        <Facilities/>
      </Grid>


      {/* <Grid item md={12} lg={12} >
        <ContactUs/>
      </Grid> */}
     
    </Grid>
  );
}

export default Dashboard;
