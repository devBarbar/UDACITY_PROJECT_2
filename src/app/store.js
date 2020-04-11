import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "../reducers/UserReducer";
import authReducer from "../reducers/authReducer";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  users: userReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
