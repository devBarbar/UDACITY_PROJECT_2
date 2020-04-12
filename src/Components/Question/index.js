import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
} from "@material-ui/core";
import { formatDate } from "../../util/helper";
import { Link } from "react-router-dom";

function Question({
  id,
  author,
  optionOne,
  optionTwo,
  timestamp,
  avatar,
  ...props
}) {
  const allProps = {
    id,
    author,
    optionOne,
    optionTwo,
    timestamp,
    avatar,
    ...props,
  };
  const date = formatDate(timestamp);
  return (
    <Card>
      <div>
        <CardContent>
          <Typography component='h5' variant='h5'>
            {author}:
          </Typography>
          <Typography>{date}</Typography>
          <Avatar src={avatar}></Avatar>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Button
              component={Link}
              allProps={allProps}
              to={`/questions/${id}`}
            >
              View Poll
            </Button>
          </Box>
        </CardContent>
      </div>
    </Card>
  );
}

export default Question;
