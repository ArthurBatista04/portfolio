import React from "react";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import withTheme from "@material-ui/core/styles/withTheme";
import Backdrop from "@material-ui/core/Backdrop";
import { Rotate as Hamburger } from "hamburger-react";
import Fab from "@material-ui/core/Fab";

const drawerWidth = "50%";
const drawerWidthMobile = "100%";

const useStyles = makeStyles((theme) => ({
  topAnchor: {
    position: "absolute",
    top: 0,
  },
  backdrop: {
    zIndex: theme.zIndex.modal - 1,
  },
  menu: {
    borderRadius: 0,
    top: 0,
    bottom: 0,
    position: "fixed",
    color: theme.palette.primary.main,
    zIndex: theme.zIndex.modal,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.between("md", "xl")]: {
      width: drawerWidth,
      left: drawerWidth,
      padding: theme.spacing(8),
    },

    [theme.breakpoints.only("sm")]: {
      width: "80%",
      padding: theme.spacing(4),
    },

    [theme.breakpoints.only("xs")]: {
      width: drawerWidthMobile,
      left: 0,
      padding: theme.spacing(2),
    },

    scroll: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      zIndex: theme.zIndex.modal + 1,
    },
  },
  menuOpened: {
    [theme.breakpoints.between("sm", "xl")]: {
      left: drawerWidth,
    },
    [theme.breakpoints.only("xs")]: {
      left: 0,
    },
  },
  menuAction: {
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: theme.zIndex.modal + 1,
    transition: "opacity 1s",
  },

  menuButton: {
    backgroundColor: theme.palette.common.white,
  },

  menuItems: {
    height: "100%",
  },
  menuItem: {
    color: "white",

    "&:hover": {
      fontWeight: "bold",
    },
  },
  socialNetworks: {
    marginTop: theme.spacing(3),
  },
  scroll: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: theme.zIndex.modal + 1,
  },
}));

const ScrollTop = (props) => {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Zoom in={trigger}>
      <div
        onClick={() => handleClick("#back-to-top-anchor")}
        role="presentation"
        className={classes.scroll}
      >
        {children}
      </div>
    </Zoom>
  );
};

const handleClick = (section) => {
  const anchor = document.querySelector(section);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

function Menu(props) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <div
        id="back-to-top-anchor"
        className={clsx(classes.topAnchor, classes.scrollAnimation)}
      />
      <Backdrop
        className={classes.backdrop}
        open={isOpen}
        onClick={() => setIsOpen(false)}
      ></Backdrop>

      <Slide
        direction={isWidthUp("sm", props.width) ? "left" : "down"}
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <Paper
          className={clsx(
            classes.menu,
            isOpen ? classes.menuOpened : classes.menuClosed
          )}
          elevation={2}
        >
          <Grid
            container
            justify="space-around"
            className={classes.menuItems}
            alignItems="center"
          >
            {props.sections.map(({ title, url }, index) => (
              <Grid item xs={12} key={index}>
                <Button
                  size="large"
                  fullWidth
                  onClick={() => {
                    handleClick(url);
                    setIsOpen(false);
                  }}
                  className={classes.menuItem}
                  color="primary"
                >
                  {title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Slide>

      <div className={classes.menuAction}>
        <Hamburger
          color={props.menuColor}
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>

      {!isOpen && (
        <ScrollTop>
          <Fab size="large" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      )}
    </React.Fragment>
  );
}

export default withTheme(withWidth()(Menu));
