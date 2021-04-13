import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://i.pinimg.com/originals/2b/84/53/2b8453d9c9f6e1e1c35dcb523e516478.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(5),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <div className={classes.mainFeaturedPostContent}>
        <Typography
          component="h1"
          align="center"
          variant="h3"
          color="inherit"
          gutterBottom
        >
          {post.title}
        </Typography>

        <img alt="" src="/static/media/me.6041b04d.png"></img>
      </div>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
