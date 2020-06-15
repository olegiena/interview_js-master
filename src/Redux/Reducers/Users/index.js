
import {
  FETCHING_ALL_USERS_RECEIVED,
  FETCHING_ALL_USERS_ERROR,
  FETCHING_USER_DETAILS_RECEIVED,
  FETCHING_USER_DETAILS_ERROR,
  CREATED_NEW_USER,
  CREATING_NEW_USER_ERROR
} from '../../Actions';

export const initialState = {
  error: {}
};

const handleSuccess = (state, data) => {
  return { ...state, ...data };
};

const handleError = (state, error) => {
  return { ...state, error: { ...error } };
};

export const user = (state = initialState, action) => {
  const { type, data, error } = action;

  switch (type) {
    case FETCHING_ALL_USERS_RECEIVED:
    case FETCHING_USER_DETAILS_RECEIVED:
    case CREATED_NEW_USER:
      return handleSuccess(state, data);
    case FETCHING_ALL_USERS_ERROR:
    case FETCHING_USER_DETAILS_ERROR:
    case CREATING_NEW_USER_ERROR:
      return handleError(state, error);
    default: return state;
  }
};

export default user;
