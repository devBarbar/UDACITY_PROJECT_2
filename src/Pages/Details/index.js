import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getQuestionByID } from "../../reducers/questionsReducer";
import { getUserByID } from "../../reducers/UserReducer";
import {
  loggedInUserSelector,
  getAnswerById,
} from "../../reducers/authReducer";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

function DetailPage() {
  let { id } = useParams();
  // Get Question & Author Data
  const question = useSelector(getQuestionByID)(id);
  const author = question[0].author;
  const _LoadedUsers = useSelector(getUserByID)(author);
  const { optionOne, optionTwo } = question[0];
  const { name, avatarURL } = _LoadedUsers;

  // getAnswer
  const currentUser = useSelector(loggedInUserSelector);
  const answer = useSelector(getAnswerById)(id);

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  console.log(answer, "answer");
  console.log(currentUser, "currentUser");
  console.log(name, "Author");
  return (
    <Grid
      style={{ width: "100%" }}
      container
      justify='center'
      alignItems='center'
    >
      <Card style={{ width: "50%", textAlign: "center" }}>
        <div>
          <CardContent>
            <Typography variant='h5'>Would you Rather</Typography>
            <Typography component='h5' variant='h5'>
              {author}:
            </Typography>
            <Avatar src={avatarURL}></Avatar>
            <FormControl>
              <RadioGroup value={answer} onChange={handleChange}>
                <FormControlLabel
                  value={"optionOne"}
                  control={<Radio />}
                  label={optionOne.text}
                ></FormControlLabel>
                <FormControlLabel
                  value={"optionTwo"}
                  control={<Radio />}
                  label={optionTwo.text}
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default DetailPage;
