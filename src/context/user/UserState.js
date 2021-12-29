import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';

import { SET_LOADING, GET_USER, CLEAR_USERS, USER_ERROR } from '../types';

const UserState = props => {
  const initialState = {
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Get User
  const getUser = async () => {
    setLoading();

    try {
      const res = await axios.get(
        `https://bio.torre.co/api/bios/nigeriancoder`,
      );

      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_ERROR,
        payload: err,
      });
    }
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        clearUsers,
        getUser,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
