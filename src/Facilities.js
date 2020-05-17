import { Grid,Typography } from "@material-ui/core";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import stringConstants from "./stringConstants.js";
import StarIcon from '@material-ui/icons/Star';

const StarStyle = {
    paddingTop:"5px",
    color:"yellow"
}

const iconStyle = { background: stringConstants.APP_COLOR, color: "#fff" }

function Facilities() {
  return (
    <div id="facilities_star_lions">
    <Grid container justify="center" spacing={4} style={{marginTop:"2%"}}>

    <Grid item>
    <Typography variant="h3" style={{"fontFamily":"Ikaros","fontSize":"72px","background":"-webkit-linear-gradient(#eee,rgb(99, 218, 77) )","WebkitBackgroundClip":"text","WebkitTextFillColor":"transparent","filter":"drop-shadow(2px 2px rgb(66, 187, 84))"}}>
      Facilities
    </Typography>
  </Grid>
    <Grid
      item
      justify="center"
      md={12}
      lg={12}
      style={{ width: "100%", height: "100%" }}
    >
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: stringConstants.APP_COLOR, color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  "+stringConstants.APP_COLOR }}
        //   date="2011 - present"
          iconStyle={iconStyle}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Improving Tommorrow by learning today</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
          <p>
            Star Lions Matriculation School, one of the most prestigious school in Thanjavur district,which located on a sprawling 4.5 acre campus.Star Lions Matriculation school is committed to providing an environment that is intellectually stimulating and challenging as caring,to ensure excellence in character. The School strives to achieve academice excellence and create independent acting and thinking global citizens.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   date="2010 - 2011"
          iconStyle={iconStyle}
          contentStyle={{ background: stringConstants.APP_COLOR, color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  "+stringConstants.APP_COLOR }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Infrastructure</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p>
            Classrooms are idelly spacious,airy and illuminated modern furniture has provided for students.It helps them find learning hours a pleasure.Our class strength is small and we use an excellent student-teacher ratio to recognize different types of intelligence.Star Lions follows the syllabus prescribed by Government Of Tamil Nadu.At the terminal level,It provides Biology,Commerce and Computer Science Branches.The school does have on its faculty the best of the teaching exposed to in-service training programms and courses conducted by subject experts.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={iconStyle}
          contentStyle={{ background: stringConstants.APP_COLOR, color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  "+stringConstants.APP_COLOR }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Laboratories</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4> */}
          <p>Star Lions has separate and modern Laboratories for Biology,Physics and Chemistry.The labs has the best equipments and able staff.Our School is determined to be the leader in the domain of Computer Education and it is not a wonder that it has installed a system lab that is radically prospective. Computers are the compulsory part of the curriculum of the school.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
        //   date="2006 - 2008"
          iconStyle={iconStyle}
          contentStyle={{ background: stringConstants.APP_COLOR, color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  "+stringConstants.APP_COLOR }}
        //   icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Groups Offered</h3>
          {/* <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4> */}
          <p><h4>Part 1  </h4>Tamil</p>
          <p><h4>Part 2  </h4>English</p>
          <p><h4>Part 3  </h4>Maths,Physics,Chemistry,Biology</p>
          <p><h4>Part 4  </h4>Maths,Physics,Chemistry,Computer Science</p>
          <p><h4>Part 5  </h4>Commerce,Accountancy,Computer Science,Economics</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
        //   date="April 2013"
          iconStyle={iconStyle}
          contentStyle={{ background: stringConstants.APP_COLOR, color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  "+stringConstants.APP_COLOR }}
        //   icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Salient Aspects</h3><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Perfect School Ambience</h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Seasoned Facilities</h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Impetus on Entrance Exam</h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Excemplary Facilities  </h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Tailor-made care  </h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Ultra-modern labs  </h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Student Centered learning  </h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Attitude & Counselling programe </h4><br/>
          <h4 className="vertical-timeline-element-subtitle"><StarIcon style={StarStyle}/>Clubs & forums </h4><br/>
          {/* <p>Strategy, Social Media</p> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Grid>
    </Grid>
    </div>
  );
}

export default Facilities;
