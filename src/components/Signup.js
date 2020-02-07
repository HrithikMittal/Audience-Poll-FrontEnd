import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import Image from "../assests/pattern.png";

function Copyright() {
  return (
    <Typography
      variant="body2"
      style={{ color: "black", fontSize: "20px" }}
      align="center"
    >
      {"Copyright © "}
      <Link color="inherit" href="http://www.siamvit.in/">
        SIAM - VIT
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn(props) {
  const [regno, setregno] = useState("");
  const [password, setpassword] = useState("");
  const [token, settoken] = useState("");
  const [isSigned, setisSigned] = useState(false);
  const [message, setmessage] = useState("");

  const onLogin = () => {
    const data = {
      regno: regno,
      password: password
    };
    axios
      .post("https://mighty-plateau-37286.herokuapp.com/user/signin", data)
      .then(response => {
        console.log(response);
        settoken(response.data.token);
        setmessage(response.data.message);
        if (response.data.message === undefined) {
          setisSigned(true);
          props.click();
        }
      })
      .catch(err => {
        console.log("Error message is ", err.message);
      });
  };

  var sectionStyle = {
    backgroundImage: `url(${Image})`,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "repeat"
  };

  const classes = useStyles();

  let form = null;
  if (isSigned === false) {
    form = (
      <div>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={regno}
              onChange={event => setregno(event.target.value)}
              label="Registration Number"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={password}
              onChange={event => setpassword(event.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => onLogin()}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" disabled="disabled" variant="body2">
                  {message}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
    );
  }

  return (
    <Container style={sectionStyle} component="main" maxWidth="xs">
      {form}
    </Container>
  );
}
