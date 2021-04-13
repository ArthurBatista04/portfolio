import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {
  selectInterests,
  getInterests,
} from "../redux/reducers/InterestsReducer";
import { compose } from "redux";
import { connect } from "react-redux";
const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(4),
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
class Interests extends Component {
  componentWillMount() {
    this.props.getInterests();
  }
  render() {
    const { classes, interests } = this.props;
    return (
      <Card id="Interests" className={classes.root}>
        <Container>
          <Typography gutterBottom align="center" variant="h5" component="h2">
            Interests
          </Typography>
          <Grid container spacing={3}>
            {interests.map((interest) => {
              return (
                <Grid key={interest.id} item xs={12} sm={6} md={3}>
                  <CustomCard info={interest} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    interests: selectInterests(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInterests: () => dispatch(getInterests()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(useStyles)
)(Interests);
