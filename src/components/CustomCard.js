import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const styles = (muiBaseTheme) => ({
  card: {
    maxWidth: 300,
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
    padding: muiBaseTheme.spacing(3),
  },
  divider: {
    margin: `${muiBaseTheme.spacing(3)}px 0`,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    lineHeight: 1.8,
  },
  avatar: {
    display: "inline-block",
    border: "2px solid gray",
    "&:not(:first-of-type)": {
      marginLeft: muiBaseTheme.spacing(-1),
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
          <CardMedia className={classes.media} image={info.pictures.src} />
          <CardContent className={classes.content}>
            <Typography
              variant={"h6"}
              gutterBottom
              align="center"
            >
              {info.name}
            </Typography>
            <Typography
              variant={"caption"}
              align="justify"
            >
              {info.description}
            </Typography>
            <Divider className={classes.divider} light />
            <AvatarGroup>
              {info.avatars &&
                info.avatars.map((face) => {
                  console.log(face)
                  return (
                    <Avatar
                      className={classes.avatar}
                      alt={face.name}
                      key={face.avatarId}
                      src={face.pictures.src}
                    />
                  );
                })}
            </AvatarGroup>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CustomCard);
