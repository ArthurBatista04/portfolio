import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import db from "../firebase/Firebase";
import StarIcon from "@material-ui/icons/Star";
import { SvgIcon } from "./";
const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
    marginTop: 12,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    height: 300,
  },
  circle: {
    fill: "black",
    stroke: "red",
    strokeWidth: 2,
  },
});

class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [], icons: {} };
  }

  componentWillMount() {
    db.collection("Skills")
      .orderBy("name")
      .get()
      .then((data) => {
        const skills = data.docs.map((skill) => skill.data());
        this.setState({
          skills,
        });
        skills.map((skill) => this.getIcons(skill.icon_id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getIcons(id) {
    const { icons } = this.state;
    if (id in icons) return;
    db.collection("Icons")
      .doc(id)
      .get()
      .then((response) => {
        this.setState({
          icons: { ...this.state.icons, [id]: response.data() },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { classes } = this.props;
    const { skills, icons } = this.state;
    return (
      <Card id="Skills" className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Skills
          </Typography>
          <List className={classes.root}>
            {skills.map((skill, id) => {
              return (
                <React.Fragment key={id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        {skill.icon_id && skill.icon_id in icons ? (
                          <SvgIcon icon={icons[skill.icon_id]}></SvgIcon>
                        ) : (
                          <StarIcon></StarIcon>
                        )}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={skill.name}
                      secondary={skill.description ? skill.description : ""}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              );
            })}
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(useStyles)(Skills);
