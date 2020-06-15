
import { FETCH_ALL_USERS, FETCH_USER_DETAILS, CREATE_NEW_USER } from '../index';

export const fetchAllUsers = () => ({ type: FETCH_ALL_USERS });
export const fetchUserDetails = (id) => ({ type: FETCH_USER_DETAILS, payload: id });
export const createNewUser = (fields) => ({ type: CREATE_NEW_USER, payload: fields });
