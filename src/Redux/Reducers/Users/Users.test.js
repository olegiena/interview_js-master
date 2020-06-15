
import reducer, { initialState } from './index';
import { fetchAllUsers } from '../../Actions/User';
import * as type from '../../Actions';

describe('<Home />', () => {
  it('FETCH_ALL_USERS', () => {
    expect(reducer(initialState, fetchAllUsers())).toEqual({
      ...initialState
    });
  });

  it('FETCHING_ALL_USERS_RECEIVED', () => {
    const action = {
      type: type.FETCHING_ALL_USERS_RECEIVED,
      data: {
        users: {
          entities: {
            user: {}
          }
        }
      }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: {},
      users: action.data.users
    });
  });

  it('FETCHING_ALL_USERS_ERROR', () => {
    const err = new Error('Users -> There was a problem in fetching user data');
    const action = {
      type: type.FETCHING_ALL_USERS_ERROR,
      error: { ...err }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.error
    });
  });
});
