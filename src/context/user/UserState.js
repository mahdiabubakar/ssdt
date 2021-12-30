import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import UserContext from './userContext';
import UserReducer from './userReducer';

import { SET_LOADING, GET_USER, USER_ERROR } from '../types';

const UserState = props => {
  const initialState = {
    user: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Get User
  const getUser = async () => {
    setLoading();

    try {
      const res = await axios.get('/api/bios/nigeriancoder');

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

  useEffect(() => {
    const func = async () => {
      setLoading();
      try {
        const res = await axios.get('/api/bios/nigeriancoder');

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
    func();
  }, []);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        getUser,
        setLoading,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
