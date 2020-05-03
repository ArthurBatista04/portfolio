import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import db from "../firebase/Firebase";
import parse from "html-react-parser";
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
  constructor(props) {
    super(props);
    this.state = { image: "", body: "" };
  }
  componentWillMount() {
    db.collection("Abouts")
      .get()
      .then((data) => {
        const about = data.docs[0].data();
        if (about)
          this.setState({
            image: about.pictures.src,
            body: about.body,
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { classes } = this.props;
    const { image, body } = this.state;
    return (
      <Card id="About" className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <CardMedia
            className={classes.media}
            component="img"
            image={image}
            title="My profile picture"
          />
          <CardContent>
            <Typography className={classes.title} variant="h5" component="h2">
              About
            </Typography>

            {parse(body)}
          </CardContent>
        </Grid>
      </Card>
    );
  }
}

export default withStyles(useStyles)(About);
