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
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start">
          <MenuIcon></MenuIcon>
        </IconButton>
        <Typography className={classes.title} variant="h6">
          Would you Rather
        </Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
