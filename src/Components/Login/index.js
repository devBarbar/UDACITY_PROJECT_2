import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const Login = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Grid
          container
          item
          xs
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <FormControl
            size="medium"
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel id="user-label"> User</InputLabel>
            <Select labelId="user-label" value="test" label="User">
              <MenuItem value="User1">User1</MenuItem>
              <MenuItem value="User2">User2</MenuItem>
              <MenuItem value="User3">User3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs spacing={3}>
          <Button variant="outlined" color="primary">
            {" "}
            Login
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
