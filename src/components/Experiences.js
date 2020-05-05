import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import db from "../firebase/Firebase";
import SchoolIcon from "@material-ui/icons/School";
const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

class Experiences extends React.Component {
  constructor(props) {
    super(props);
    this.state = { experiences: [] };
  }
  componentWillMount() {
    db.collection("Experiences")
      .orderBy("hasEnded", "asc")
      .get()
      .then((data) => {
        const experiences = data.docs.map((experience) => experience.data());
        this.setState({
          experiences,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  formatDate(hasEnded, beginDate, endDate) {
    const beginning = beginDate ? new Date(beginDate) : new Date();
    const ending = endDate ? new Date(endDate) : new Date();
    if (hasEnded)
      return `${beginning.getFullYear()} - ${ending.getFullYear()} `;
    return `${beginning.getFullYear()} - Present`;
  }
  render() {
    const { classes } = this.props;
    const { experiences } = this.state;
    return (
      <Card id="Experience" className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            What I've Been Doing
          </Typography>
          <VerticalTimeline>
            {experiences.map((experience, id) => (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(0, 0, 0)" }}
                date={this.formatDate(
                  experience.hasEnded,
                  experience.beginDate,
                  experience.endDate
                )}
                iconStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
                icon={
                  experience.type === "Work" ? (
                    <WorkIcon></WorkIcon>
                  ) : (
                    <SchoolIcon></SchoolIcon>
                  )
                }
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
                  {experience.locale}
                </Typography>
                <Typography paragraph={true}>
                  {experience.description}
                </Typography>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Experiences);
