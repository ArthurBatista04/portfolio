import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "react-vertical-timeline-component/style.min.css";
import { TextInput } from "./inputs";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { compose } from "ramda";
import { emailRegEx } from "../constants";
import { fireStatus } from "./SwalMixin";
import { Field, reduxForm } from "redux-form";
class ContactForm extends React.Component {
  submit = async (values) => {
    const SUCCESS = true;
    const FAILED = false;
    const email = values.email;
    const message = values.message;
    try {
      await axios.post("https://formspree.io/xdownjvq", {
        message,
        email,
      });
      fireStatus(SUCCESS, "Your message was sent successfully");
      this.props.reset()
    } catch (error) {
      fireStatus(FAILED);
    }
  };
  render() {
    const { classes, handleSubmit, pristine, submitting } = this.props;

    return (
      <Card id="Contact" className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Contact me
          </Typography>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="email"
              component={TextInput}
              label="E-mail"
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              required
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Field
              label="Message"
              name="message"
              component={TextInput}
              multiline
              required
              rows={5}
              rowsMax={5}
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Button
                type="submit"
                size="medium"
                disabled={pristine || submitting}
                variant="outlined"
              >
                Send
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    );
  }
}
const styles = (theme) => ({
  root: {
    minWidth: 275,
    marginBottom: theme.spacing(5),
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const validate = (values) => {
  const errors = {};
  const requiredFields = ["message", "email"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (values.email && !emailRegEx.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
export default compose(
  withStyles(styles),
  reduxForm({ validate, form: "contactForm" })
)(ContactForm);
