
import { all, take, put, call, fork } from 'redux-saga/effects';
import { normalize } from 'normalizr';
import Schemas from '../../Schemas';
import { camelizeKeys } from 'humps';
import { BASE_API_URL } from '../../../Api';
import { errorHandler } from '../../Utils/Error';

import {
  FETCH_ALL_USERS,
  FETCHING_ALL_USERS_RECEIVED,
  FETCHING_ALL_USERS_ERROR,
  FETCH_USER_DETAILS,
  FETCHING_USER_DETAILS_RECEIVED,
  FETCHING_USER_DETAILS_ERROR,
  CREATE_NEW_USER,
  CREATED_NEW_USER,
  CREATING_NEW_USER_ERROR
} from '../../Actions';
import DummyUsersService from '../../Actions/User/dummy-users-service';

export function* fetchUsers () {

  const constructRequest = () => {
    // headers: {'Content-Type': 'application/json'},
    return fetch(`${BASE_API_URL}/users`, {
      mode: 'no-cors'
    }).then(data => ({data})).catch(errorHandler);
  };

  const { data, error } = yield call(constructRequest);

  if (data.ok) {
    yield put({
      type: FETCHING_ALL_USERS_RECEIVED,
      data: normalize(camelizeKeys(data.body), Schemas.USERLIST)
    });
  } else if (!data.ok) {
    yield put({
      type: FETCHING_ALL_USERS_RECEIVED,
      data: new DummyUsersService().getAllUsers()
    });
  } else if (error) {
    yield put({
      type: FETCHING_ALL_USERS_ERROR,
      error: new Error('Users -> There was a problem in fetching user data')
    });
  }
}

// TODO:
/*export function* fetchUserDetails (id) {
}*/

// TODO:
/*export function* createNewUser (fields) {
}*/

export function* sagaAllUsers () {
  while (true) {
    const { type } = yield take([ FETCH_ALL_USERS ]);

    if (type === FETCH_ALL_USERS) {
      yield fork(fetchUsers);
    }
  }
}

export function* sagaUserDetails () {
  while (true) {
    const { type, payload } = yield take([ FETCH_USER_DETAILS ]);

    if (type === FETCH_USER_DETAILS) {
      // TODO:
      // yield fork(fetchUserDetails, payload);
    }
  }
}

export function* sagaNewUser () {
  while (true) {
    const { type, payload } = yield take([ CREATE_NEW_USER ]);

    if (type === CREATE_NEW_USER) {
      // TODO:
      // yield fork(createNewUser, payload);
    }
  }
}

export function* usersSaga (...fields) {
  yield all([
    sagaAllUsers(),
    sagaUserDetails(fields),
    sagaNewUser(fields)
  ]);
}

export default { users: usersSaga };
