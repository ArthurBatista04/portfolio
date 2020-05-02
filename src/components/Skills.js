import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import Divider from "@material-ui/core/Divider";
import JavascriptIcon from "./extraIcons/javascriptIcon";
import JavaIcon from "./extraIcons/javaIcon";
import LinuxIcon from "./extraIcons/linuxIcon"
import PythonIcon from "./extraIcons/pythonIcon"
import SqlIcon from './extraIcons/sqlIcon'
const useStyles = makeStyles((theme) => ({
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
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <Card id="Skills" className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Skills
        </Typography>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <JavaIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Java" secondary="Spring Boot" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <JavascriptIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Javascript"
              secondary="Angular | Express | Loopback | NodeJS | React | Redux"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LinuxIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Linux" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PythonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Python" secondary="Django" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SqlIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="SQL" secondary="MySQL" />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
