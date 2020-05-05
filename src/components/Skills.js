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
import StarIcon from "@material-ui/icons/Star";
import { SvgIcon } from "./";
import { connect } from "react-redux";
import { compose } from "ramda";
import { selectSkills, getSkills } from "../redux/reducers/SkillsReducer";
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

  componentWillMount() {
    this.props.getSkills();
  }
  render() {
    const { classes, skills } = this.props;
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
                        {skill.icon ? (
                          <SvgIcon icon={skill.icon}></SvgIcon>
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

const mapStateToProps = (state) => {
  return {
    skills: selectSkills(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSkills: () => dispatch(getSkills()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles)
)(Skills);
