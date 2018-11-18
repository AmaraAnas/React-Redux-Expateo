import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import AuthForm from './auth.container';
import { login } from './auth.actions';
import AuthReducer from './auth.reducer';

describe('Auth render', () => {
  it('Should render', () => {
    shallow(<AuthForm store={store} />);
  });
});

describe('Auth action - reducers', () => {
  it('LOGIN Should call pending & success', () => {
    let isOnPendingCalledFlag = false;
    let isOnSuccessCalledFlag = false;
    let isOnFailureCalledFlag = false;
    const loginAction = login({
      username: 'jhon',
      password: 'doe',
      onPending: () => (isOnPendingCalledFlag = true),
      onSuccess: () => (isOnSuccessCalledFlag = true),
      onFailure: () => (isOnFailureCalledFlag = true),
      authApi: {
        login: () =>
          Promise.resolve().then(() => {
            expect(isOnPendingCalledFlag).toEqual(true);
            expect(isOnSuccessCalledFlag).toEqual(true);
            expect(isOnFailureCalledFlag).toEqual(false);
          }),
      },
    });
    loginAction(store.dispatch);
  });

  it('LOGIN Should call pending & failure', () => {
    let isOnPendingCalledFlag = false;
    let isOnSuccessCalledFlag = false;
    let isOnFailureCalledFlag = false;
    const loginAction = login({
      username: 'jhon',
      password: 'doe',
      onPending: () => (isOnPendingCalledFlag = true),
      onSuccess: () => (isOnSuccessCalledFlag = true),
      onFailure: () => (isOnFailureCalledFlag = true),
      authApi: {
        login: () =>
          Promise.reject().finally(() => {
            expect(isOnPendingCalledFlag).toEqual(true);
            expect(isOnSuccessCalledFlag).toEqual(false);
            expect(isOnFailureCalledFlag).toEqual(true);
          }),
      },
    });
    loginAction(store.dispatch);
  });

  it('LOGIN:SUCCESS Should set the user', () => {
    const noop = () => {};
    let state;
    const loginAction = login({
      username: 'jhon',
      password: 'doe',
      onPending: noop,
      onSuccess: noop,
      onFailure: noop,
      authApi: {
        login: () =>
          new Promise((resolve) =>
            setTimeout(() => resolve({ username: 'jhon' }), 50),
          ).finally(() => {
            expect(state).toEqual({
              user: { username: 'jhon' },
              error: {
                message: '',
              },
            });
          }),
      },
    });
    state = AuthReducer(
      {
        user: {},
        error: {
          message: '',
        },
      },
      loginAction(store.dispatch),
    );
  });

  it('LOGIN:FAILURE Should set the error', () => {
    const noop = () => {};
    let state;
    const loginAction = login({
      username: 'jhon',
      password: 'doe',
      onPending: noop,
      onSuccess: noop,
      onFailure: noop,
      authApi: {
        login: () =>
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('rejected')), 50),
          ).finally(() => {
            expect(state).toEqual({
              user: {},
              error: {
                message: 'rejected',
              },
            });
          }),
      },
    });
    state = AuthReducer(
      {
        user: {},
        error: {
          message: '',
        },
      },
      loginAction(store.dispatch),
    );
  });
});
