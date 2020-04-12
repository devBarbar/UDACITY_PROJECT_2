import { createSlice } from "@reduxjs/toolkit";
import { _getQuestions } from "../_DATA";
export const userSlice = createSlice({
  name: "questions",
  initialState: {
    isLoading: false,
    error: false,
    questions: {
      answeredQuestions: null,
      unansweredQuestions: null,
    },
  },
  reducers: {
    startLoadQuestions: (state) => {
      state.isLoading = true;
    },
    successLoadQuestions: (state) => {
      state.isLoading = false;
    },
    errorLoadQuestions: (state) => {
      state.error = true;
      state.isLoading = false;
    },
    loadQuestions: (state, action) => {
      state.questions.answeredQuestions = action.payload.answered;
      state.questions.unansweredQuestions = action.payload.unanswered;
    },
  },
});
export const {
  loadQuestions,
  startLoadQuestions,
  successLoadQuestions,
  errorLoadQuestions,
} = userSlice.actions;

export const getQuestions = () => async (dispatch, getState) => {
  dispatch(startLoadQuestions());
  const state = getState();
  try {
    let questions = await _getQuestions();

    const answered_questions_ids = Object.keys(state.auth.user.answers);
    let unanswered_questions = null;
    let answered_questions = answered_questions_ids.map((value) => {
      return questions[value];
    });
    unanswered_questions = Object.keys(questions)
      .filter((question_id) => {
        return typeof state.auth.user.answers[question_id] === "undefined";
      })
      .map((value) => {
        return questions[value];
      });

    dispatch(
      loadQuestions({
        answered: answered_questions,
        unanswered: unanswered_questions,
      })
    );
    dispatch(successLoadQuestions());
  } catch (error) {
    dispatch(errorLoadQuestions());
  }
};

export default userSlice.reducer;

export const LoadedQuestionsSelector = (state) => state.questions;
export const getQuestionByID = (state) => (id) =>
  state.questions.questions.answeredQuestions
    .concat(state.questions.questions.unansweredQuestions)
    .filter((value) => {
      return value["id"] === id;
    });
