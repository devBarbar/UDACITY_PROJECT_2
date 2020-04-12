import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector, useDispatch } from "react-redux";
import {
  isLoggedInSelector,
  logout,
  loggedInUserSelector,
} from "../../reducers/authReducer";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const LoginOutButton = ({ isAuth }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const handleLogout = (e) => {
    dispatch(logout());
    history.push("/login");
  };

  const handleLogin = (e) => {
    history.push("/login");
  };
  return isAuth ? (
    <Button onClick={() => handleLogout()}>Logout</Button>
  ) : (
    <Button onClick={handleLogin}>Login</Button>
  );
};

const User = ({ user, className }) => {
  return (
    user && <Typography className={className}>Hello, {user.name}</Typography>
  );
};

const Navbar = () => {
  const isAuth = useSelector(isLoggedInSelector);
  const user = useSelector(loggedInUserSelector);
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} edge='start'>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography className={classes.title} variant='h6'>
          Would you Rather
        </Typography>
        <User user={user} className={classes.menuButton}></User>
        <LoginOutButton isAuth={isAuth}></LoginOutButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
