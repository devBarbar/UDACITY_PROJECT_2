import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import Grid from "@material-ui/core/Grid";
import {
  CssBaseline,
  Select,
  MenuItem,
  InputLabel,
  Typography,
  FormControl,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, loadUsers, LoadedUsers } from "../../reducers/UserReducer";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const Users = useSelector(LoadedUsers);
  const [dropdownValue, setDropdownValue] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    console.log(Users);
  }, [Users]);

  const handleUserChange = (e) => {
    let id = e.target.value;
    if (id) {
      setDropdownValue(id);
      setAvatar(Users.users[id].avatarURL);
    } else {
      setDropdownValue("");
      setAvatar("");
    }
  };

  return (
    <Container className={classes.root} maxWidth='xs'>
      <CssBaseline></CssBaseline>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {avatar ? <img src={avatar}></img> : <LockOutlinedIcon />}
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <FormControl className={classes.form}>
          <InputLabel id='demo-simple-select-outlined-label'>Users</InputLabel>
          <Select
            labelId='demo-simple-select-outlined-label'
            id='demo-simple-select-outlined'
            value={dropdownValue}
            onChange={(e) => handleUserChange(e)}
            label='Users'
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            {Users.users &&
              Object.entries(Users.users).map((value) => (
                <MenuItem key={value[1]["id"]} value={value[1]["id"]}>
                  {value[1]["id"]}
                </MenuItem>
              ))}
          </Select>

          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
