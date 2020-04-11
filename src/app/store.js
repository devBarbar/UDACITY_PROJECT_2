import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducers/UserReducer"
import thunk from "redux-thunk";
export default configureStore(
  {
    reducer: {
      users:userReducer
    },
    middleware: [thunk]
  }
);
