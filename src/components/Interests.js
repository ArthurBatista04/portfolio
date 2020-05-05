import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CustomCard from "./CustomCard";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
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
const hobbies = [
  {
    image:
      "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg",
    title: "Nature Around Us",
    description:
      "We are going to learn different kinds of species in nature that live together to form amazing environment",
    avatars: [
      "http://i.pravatar.cc/300?img=1",
      "http://i.pravatar.cc/300?img=2",
      "http://i.pravatar.cc/300?img=3",
      "http://i.pravatar.cc/300?img=4",
    ],
  },
];
class Interests extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card id="Interests" className={classes.root}>
          <Typography className={classes.title} variant="h5" component="h2">
            My Life Pleasures
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {hobbies.map((hobbie) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
                  <CustomCard info={hobbie} />
                </Grid>
              );
            })}
          </Grid>
        </Card>
      </div>
    );
  }
}

export default withStyles(useStyles)(Interests);
