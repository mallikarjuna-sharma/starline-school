import React from "react";
import { Typography, Grid, Paper,Card } from "@material-ui/core";
import stringConstants from "./stringConstants.js";

import Chairman from "./assests/Chairman.jpg";
import Secretary from "./assests/Secretary.jpg";
import Principal from "./assests/Principal.jpg";

import VicePrincipal from "./assests/Vice-Principal.jpg";
import FacultyAdminstrator from "./assests/Faculty_Adminstrator.jpg";



const ImgStyle = {
  width:"100%",
  height:"100%",
}

const CardStyles = {marginLeft:"25%",width:"45%",height:"200px"}

function AboutUsCard() {
  return (
    <Grid container justify="center" spacing={4} style={{marginTop:"2%"}}>
      <Grid item>
        <Typography variant="h3" style={ stringConstants.HEADER_STYLE }>
          About Us
        </Typography>
      </Grid>

      <Grid item md={12} lg={12}>
        <Grid container justify="center" alignContent="center" justify="center" spacing={8} >
          <Grid item md={11} lg={6}>
            <Paper elevation={2} style={{padding:"2%",minHeight:"100%"}}>
              <Grid container spacing={8} direction="column" alignContent="center" justify="center" style={{width:"100%"}}>
                <Grid item alignItems="center" md={12} lg={12}>
                    <Card raised  style={CardStyles}><img  src={Chairman}  style={ImgStyle}/></Card>
                </Grid>
                <Grid item alignItems="center" md={12} lg={12} style={{textAlign:"center"}}>
                    <Typography variant={"h5"}>
                    {stringConstants.CHAIRNMAN_NAME}
                    </Typography>
                </Grid>
                <Grid item alignItems="center" md={12} lg={12} style={{textAlign:"center"}}>
                <Typography>
                {stringConstants.SEC_MSG}
                </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={11} lg={6}>
          <Paper elevation={2} style={{padding:"2%",minHeight:"100%"}}>
              <Grid container  spacing={4} direction="column" alignContent="center" justify="center">
                <Grid item>
                <Card raised  style={CardStyles}> <img  src={Secretary}  style={ImgStyle}/></Card>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant={"h5"}>
                    {stringConstants.SEC_NAME}
                    </Typography>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                <Typography>
                {stringConstants.CHAIRNMAN_MSG}
                </Typography>
                </Grid>
              </Grid>
            </Paper >
          </Grid>
          <Grid item md={11} lg={12}>
          <Paper elevation={2} style={{padding:"2%",minHeight:"100%"}}>
              <Grid container spacing={4} direction="row" alignContent="center" justify="center">

                <Grid item>

                <Grid item md={12} lg={12}>
                <Card raised  style={CardStyles}> <img  src={Principal}  style={ImgStyle}/></Card>
                </Grid>
                <Grid item md={12} lg={12} style={{textAlign:"center"}}>
                    <Typography variant={"h5"}>
                    Mr.G.Venkatesan,M.com,B.Ed
                    </Typography>
                </Grid>
                <Grid item md={12} lg={12} style={{textAlign:"center"}}>
                    <Typography variant={"h6"}>
                      Principal
                    </Typography>
                </Grid>
               
                </Grid>

                <Grid item>
                <Grid item md={12} lg={12}>
                <Card raised  style={CardStyles}> <img  src={VicePrincipal}  style={ImgStyle}/></Card>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant={"h5"}>
                    Mr.A.Saravanan,M.A,M.Phil,M.Ed
                    </Typography>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant={"h6"}>
                      Vice Principal
                    </Typography>
                </Grid>
                 </Grid>

                 <Grid item>
                <Grid item md={12} lg={12}>
                <Card raised  style={CardStyles}> <img  src={FacultyAdminstrator}  style={ImgStyle}/></Card>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant={"h5"}>
                    Mrs.L.Chandra,B.Sc
                    </Typography>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant={"h6"}>
                    Faculty Adminstrator
                    </Typography>
                </Grid>
                </Grid>

              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutUsCard;
