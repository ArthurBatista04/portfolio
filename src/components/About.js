import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import db from "../firebase/Firebase";
import parse from "html-react-parser";
import { connect } from "react-redux";
import { compose } from "ramda";
import { selectAbout, getAbout } from "../redux/reducers/AboutReducer";
const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
    marginTop: 12,
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
  pos: {
    marginBottom: 12,
  },
  media: {
    marginTop: 12,
    borderRadius: "100px",
    height: "200px",
    width: "200px",
  },
});

class About extends React.Component {
  componentWillMount() {
    this.props.getAbout();
  }
  render() {
    const { classes, about } = this.props;
    return (
      <Card id="About" className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardMedia
            className={classes.media}
            component="img"
            image={about.pictures ? about.pictures.src : null}
            title="My profile picture"
          />
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              Background
            </Typography>

            {parse(about.body ? about.body : "")}
          </CardContent>
        </Grid>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    about: selectAbout(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAbout: () => dispatch(getAbout()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles)
)(About);
