import { createSlice } from "@reduxjs/toolkit";
import { _getQuestions } from "../_DATA";
export const userSlice = createSlice({
  name: "questions",
  initialState: {
    isLoading: false,
    error: false,
    questions: null,
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
      state.questions = action.payload;
      console.log(state);
    },
  },
});
export const {
  loadQuestions,
  startLoadQuestions,
  successLoadQuestions,
  errorLoadQuestions,
} = userSlice.actions;

export const getQuestions = () => async (dispatch) => {
  dispatch(startLoadQuestions());
  try {
    const questions = await _getQuestions();
    dispatch(loadQuestions(questions));
    dispatch(successLoadQuestions());
  } catch {
    dispatch(errorLoadQuestions());
  }
};

export default userSlice.reducer;

export const LoadedQuestionsSelector = (state) => state.questions;
