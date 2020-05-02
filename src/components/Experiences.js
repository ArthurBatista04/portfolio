import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work"
import SchoolIcon from "@material-ui/icons/School"
const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4)
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
}));


export default function(props) {
  const classes = useStyles();
  const { experiences } = props;

  return (
    <Card id="Experience" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Experiences
        </Typography>
        <VerticalTimeline>
          {experiences.map(experience => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
              date={experience.date}
              iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
              icon={experience.icon ==="work" ? <WorkIcon></WorkIcon> : <SchoolIcon></SchoolIcon> }
            >
              <Typography
                className="vertical-timeline-element-title"
                variant="h5"
                component="h3"
              >
                {experience.title}
              </Typography>

              <Typography
                className="vertical-timeline-element-subtitle"
                variant="caption"
                component="h1"
              >
                {experience.local}
              </Typography>
              <Typography paragraph={true}>{experience.description}</Typography>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </CardContent>
    </Card>
  );
}
