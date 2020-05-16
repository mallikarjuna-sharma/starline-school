import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import stringConstants from './stringConstants.js'
import CHAIRMAN_MSG from './assests/chairman_msg.jpeg'
import SEC_MSG from './assests/sec_msg.jpeg'
import FACULTY from './assests/falculty.jpeg'


function Dashboard(){



    return (
      <Grid container justify="center">
        <Grid item>
          <Typography variant="h3" style={{ color: stringConstants.APP_COLOR }}>
            About Us
          </Typography>
        </Grid>


        <Grid item md={12} lg={12}>
         <Grid container justify="center" spacing={2} style={{height:"500px"}}>
          <Grid item md={4} lg={4}><img src={CHAIRMAN_MSG}  style={{height:"100%",width:"100%"}} /> </Grid>
          <Grid item md={4} lg={4}><img src={SEC_MSG}  style={{height:"100%",width:"100%"}} /></Grid>
          <Grid item md={4} lg={4}><img src={FACULTY}  style={{height:"100%",width:"100%"}} /></Grid>
          </Grid>
        </Grid>

      </Grid>
    );

}

export default Dashboard;