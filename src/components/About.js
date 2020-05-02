import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
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
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card id="About" className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <CardMedia
          className={classes.media}
          component="img"
          image="https://scontent.fmgf6-1.fna.fbcdn.net/v/t1.0-9/72558723_974502879576298_799131562238017536_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=h12t2rSzD4UAX9tQWYR&_nc_ht=scontent.fmgf6-1.fna&oh=1df081c2da325843464aaae8c7d5f9c4&oe=5ED1394C"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            About
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Ever since I was a kid, my parents always told me that if I loved
            being on the computer so much, why not stop thinking as a user and
            start thinking as the creator. Who would've thought that from that
            moment on I'd develop a passion for science, more specifically,
            computer science. Thank you, mom and dad.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Years pass by and I am now enrolled at the State University of
            Maringá where I study computer science. After being at the
            University for these couple of years I've accumulated many
            experiences. Although most of them have marked me in a positive way,
            there are two of which I'll mention because they're the reason why I
            love being involved with what I do. I couldn't imagine myself not
            having software engineering and programming as part of the daily
            routine.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            That being said I am starting to develop a relation with machine
            learning and artificial intelligence. Thus my current thesis on
            pattern recognition, in specific, vehicle detection and
            classification using traffic images. In addition, I am currently
            working with web development at Eureka Labs mostly focused on
            Javascript frameworks such as React and Angular alongside Express
            and Java Spring Boot.
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
}
