import React from "react";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "react-vertical-timeline-component/style.min.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from "sweetalert2";
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", message: "", invalid: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { email, message } = this.state;
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegEx.test(email)){
      this.setState({invalid:true})
      return 
    }
    this.setState({invalid:false})
    try {
      await axios.post("https://formspree.io/xdownjvq", {
        message,
        email,
      });
      this.setState({email:"", message:""})
      this.fireStatus("success");
    } catch (error) {
      this.fireStatus("error");
    }
  }
  fireStatus(status) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: status,
      title:
        status === "success"
          ? "Your message was sent sucessfully"
          : "An error has occured",
    });
  }
  render() {
    const { classes } = this.props;
    const { email, message, invalid } = this.state;

    return (
      <Card id="Contact" className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Contact me
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="standard-full-width"
              name="email"
              label="E-mail"
              style={{ margin: 8 }}
              value={email}
              onChange={this.handleChange}
              error={invalid}
              helperText={invalid ? "Invalid e-mail." : ""}
              fullWidth
              margin="normal"
              required
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Message"
              name="message"
              multiline
              required
              rows={5}
              rowsMax={5}
              style={{ margin: 8 }}
              value={message}
              onChange={this.handleChange}
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
              <Button type="submit" size="medium" variant="outlined">
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
export default withStyles(styles)(ContactForm);
