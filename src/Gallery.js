import React from "react";
import { Typography, Grid, Paper } from "@material-ui/core";
import { Zoom } from 'react-slideshow-image';
 import './Gallery.css';
 import CHAIRMAN_MSG from './assests/chairman_msg.jpeg'
 import SEC_MSG from './assests/sec_msg.jpeg'
 import FACULTY from './assests/falculty.jpeg'

 import Gallery1 from './assests/gallery_img1.jpeg'


const images = [
    Gallery1,
    SEC_MSG,
    FACULTY
];


const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }


function Gallery(){



    return (
      <Grid item justify="center" md={12} lg={12} style={{width:"100%",height:"400px",padding:0,margin:0,marginBottom:"10%"}}>
       
       <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%",height:"400px"}} src={each} />)
          }
        </Zoom>
      </div>

      </Grid>
    );

}

export default Gallery;