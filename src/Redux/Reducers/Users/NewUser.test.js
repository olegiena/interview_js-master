
import reducer, { initialState } from './index';
import { createNewUser } from '../../Actions/User';
import * as type from '../../Actions';

describe('<NewUser />', () => {
  it('CREATE_NEW_USER', () => {
    expect(reducer(initialState, createNewUser())).toEqual({
      ...initialState
    });
  });

  // TODO:
  /*it('CREATED_NEW_USER', () => {
    const action = {
      type: type.CREATED_NEW_USER,
      data: {
        // ...
      }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: {},
      // ...
    });
  });*/

  it('CREATING_NEW_USER_ERROR', () => {
    const err = new Error('Users -> There was a problem in creating new user');
    const action = {
      type: type.CREATING_NEW_USER_ERROR,
      error: { ...err }
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: action.error
    });
  });
});
