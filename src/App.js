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
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Box display='flex' pt={2} pr={1}>
        <PrivateRoute path='/' exact>
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />

              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <span>
                <span>Learn </span>
                <a
                  className='App-link'
                  href='https://reactjs.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React
                </a>
                <span>, </span>
                <a
                  className='App-link'
                  href='https://redux.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Redux
                </a>
                <span>, </span>
                <a
                  className='App-link'
                  href='https://redux-toolkit.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Redux Toolkit
                </a>
                ,<span> and </span>
                <a
                  className='App-link'
                  href='https://react-redux.js.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  React Redux
                </a>
              </span>
            </header>
          </div>
        </PrivateRoute>
        <Route path='/login'>
          <LoginPage></LoginPage>
        </Route>
      </Box>
    </Router>
  );
}

export default App;
