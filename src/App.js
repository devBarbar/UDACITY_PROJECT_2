import React, { useEffect } from "react";
import logo from "./logo.svg";
import { loadUser, loadUsers } from "./reducers/UserReducer";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import Navbar from "./Components/Navbar";
import { Box } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PrivateRoute from "./Components/privateRoute";
import Polls from "./Components/Polls";
import DetailPage from "./Pages/Details";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Box display='flex' pt={2} pr={1}>
        <PrivateRoute path='/' exact>
          <Polls></Polls>
        </PrivateRoute>
        <Route path='/login'>
          <LoginPage></LoginPage>
        </Route>
        <PrivateRoute path='/questions/:id'>
          <DetailPage></DetailPage>
        </PrivateRoute>
      </Box>
    </Router>
  );
}

export default App;
