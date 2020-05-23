import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import stringConstants from "./stringConstants.js";
import PhoneIcon from "@material-ui/icons/Phone";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import RoomIcon from "@material-ui/icons/Room";

function ContactUs() {
  return (
    <Grid
      container
      style={{
        width: "100%",
        height: "150px",
        padding: 0,
        backgroundImage: "linear-gradient(white, #499F56)",
      }}
      justify="center"
    >
      <Grid item xs={12} sm={12} md={12}>
        <Grid container justify="center">

          <Grid item sm={6} md={6}>
            <Typography style={{textAlign:"right",paddingRight:"1%",color:"#446963",fontFamily: "Comic Sans MS"}}>
              {" "}
        
              04374 - 242299      <PhoneIcon />
            </Typography>
          </Grid>

          <Grid item sm={6} md={6}>
            <Typography style={{color:"#446963",fontFamily: "Comic Sans MS"}}>
              <PhoneAndroidIcon /> +91 76397 79434
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Grid container justify="center">
          <Grid item sm={6} md={6}>
              <Grid container justify="flex-end" style={{paddingRight:"1%"}}>
            <a style={{color:"#446963",fontFamily: "Comic Sans MS"}}>
                 officeslmhss@gmail.com{" "}       <EmailIcon />
            </a>
            </Grid>
          </Grid>
          <Grid item sm={6} md={6}>
            <a href="https://goo.gl/maps/97TCJuWCNawcuMZQ7" style={{ color:"#446963", textDecoration: "none",fontFamily: "Comic Sans MS"}}>
              <RoomIcon /> https://goo.gl/maps/97TCJuWCNawcuMZQ7{" "}
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Grid container justify="center">
        <Typography style={{color:"#304A46",fontFamily: "Comic Sans MS"}}> Star Lions Matriculation Hr Sec School </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Grid container justify="center">
        <Typography style={{color:"#304A46",fontFamily: "Comic Sans MS"}} > No.9, Agraharam, Ayyampettai, Tamil Nadu 614201 </Typography>
        </Grid>
      </Grid>


    </Grid>
  );
}

export default ContactUs;
