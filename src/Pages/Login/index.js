import React, { useEffect } from "react";

import Login from "../../Components/Login";

import { useDispatch } from "react-redux";
import { loadUser, loadUsers } from "../../reducers/UserReducer";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  return (
    <>
      <Login></Login>
    </>
  );
};

Login.propTypes = {};

export default LoginPage;
