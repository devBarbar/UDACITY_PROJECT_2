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
import { isLoggedInSelector, logout } from "../../reducers/authReducer";
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

const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(isLoggedInSelector);

  const classes = useStyles();

  const handleLogout = (e) => {
    dispatch(logout());
    history.push("/login");
  };

  const handleLogin = (e) => {
    history.push("/login");
  };
  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar>
        <IconButton className={classes.menuButton} edge='start'>
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography className={classes.title} variant='h6'>
          Would you Rather
        </Typography>
        {isAuth ? (
          <Button onClick={() => handleLogout()}>Logout</Button>
        ) : (
          <Button onClick={handleLogin}>Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
