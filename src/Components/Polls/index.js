import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  FormGroup,
  Paper,
  Tabs,
  Tab,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import PollList from "../PollList";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  LoadedQuestionsSelector,
} from "../../reducers/questionsReducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  formGroup: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },
}));

function Polls() {
  const [checked, setChecked] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  const LoadedQuestions = useSelector(LoadedQuestionsSelector);
  useEffect(() => {
    dispatch(getQuestions());
  }, []);
  console.log(LoadedQuestions);
  const handleChange = (event, newValue) => {
    setChecked(newValue);
  };
  return (
    <Grid alignItems='center' container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography
          className={classes.root}
          color='primary'
          variant='h2'
          align='center'
        >
          Pools
        </Typography>
      </Grid>
      <Grid
        className={classes.root}
        container
        alignItems='center'
        justify='center'
        spacing={3}
        item
        xs={12}
      >
        <Paper className={classes.paper}>
          <Tabs
            value={checked}
            indicateColor='primary'
            textColor='primary'
            onChange={handleChange}
          >
            <Tab label='Answered'></Tab>
            <Tab label='Unanswered'></Tab>
          </Tabs>
        </Paper>
      </Grid>
      <Grid
        className={classes.root}
        container
        alignItems='center'
        justify='center'
        spacing={3}
        item
        xs={12}
      >
        <PollList></PollList>
      </Grid>
    </Grid>
  );
}

export default Polls;
