import React from "react";
import { Card, makeStyles } from "@material-ui/core";
import Question from "../Question";
import { LoadedUsers } from "../../reducers/UserReducer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  unorderedList: {
    listStyle: "None",
    width: "50%",
  },
  listItem: {
    margin: "1rem",
  },
}));

function PollList({ questions }) {
  const classes = useStyles();
  const _LoadedUsers = useSelector(LoadedUsers);

  const orderedQuestions = questions.slice().sort((a, b) => {
    return b.timestamp - a.timestamp;
  });
  return (
    <ul className={classes.unorderedList}>
      {orderedQuestions.map((value, index) => {
        return (
          <li className={classes.listItem}>
            <Question
              id={value.id}
              author={value["author"]}
              optionOne={value["optionOne"].text}
              optionTwo={value["optionTwo"].text}
              timestamp={value["timestamp"]}
              avatar={_LoadedUsers.users[value["author"]].avatarURL}
            ></Question>
          </li>
        );
      })}
    </ul>
  );
}

export default PollList;
