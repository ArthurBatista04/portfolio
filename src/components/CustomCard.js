import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";



const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
    height: 400,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
    marginBottom: muiBaseTheme.spacing(2),
  },
  media: {
    paddingTop: "56.25%",
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3,
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit,
    },
  },
  app: {
    fontFamilly: "sans-serif",
    textAlign: "center",
  },
});

class CustomCard extends React.Component {
  render() {
    const { classes, info } = this.props;
    return (
      <div className={classes.app}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={info.image} />
          <CardContent className={classes.content}>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              {info.title}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              {info.description}
            </Typography>
            <Divider className={classes.divider} light />
            {info.avatars && info.avatars.map((face) => (
              <Avatar className={classes.avatar} key={face} src={face} />
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CustomCard);
