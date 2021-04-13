import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {"Arthur Rodrigues Batista "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  icons: {
    "& > svg": {
      margin: theme.spacing(2),
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.icons}
        >
          <Button target="_blank" href="https://github.com/ArthurBatista04">
            <GitHubIcon></GitHubIcon>
          </Button>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/arthur-rodrigues-batista-468903158/"
          >
            <LinkedInIcon></LinkedInIcon>
          </Button>
        </Grid>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
