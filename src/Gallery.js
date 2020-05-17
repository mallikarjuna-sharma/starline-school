import { Grid } from "@material-ui/core";
import React from "react";
import { Zoom } from "react-slideshow-image";
import IMG1 from "./assests/_IBM1.jpg";
import IMG2 from "./assests/_IBM2.jpg";
import IMG3 from "./assests/_IBM3.jpg";
import IMG4 from "./assests/_IBM4.jpg";
import IMG5 from "./assests/_IBM5.jpg";
import "./Gallery.css";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  
  images:{
    width: "100%",
    height: "80vh",
     paddingLeft:"2%" ,
    [theme.breakpoints.down('md')]: {
      height: "40vh",
    },
  }
}));

const images = [IMG1, IMG2, IMG3, IMG4, IMG5];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

function Gallery() {
  const classes = useStyles();

  return (
    <Grid
      item
      justify="center"
      md={12}
      lg={12}
      style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
    >
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <img
              key={index}
              className={classes.images}
              src={each}
            />
          ))}
        </Zoom>
      </div>
    </Grid>
  );
}

export default Gallery;
