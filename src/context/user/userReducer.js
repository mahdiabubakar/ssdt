import { SET_LOADING, GET_USER, USER_ERROR } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
