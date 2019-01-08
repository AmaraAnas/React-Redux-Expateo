import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import store from '../../redux-utils/store';
import AuthForm from './auth.loginForm.container';
import { login } from './auth.actions';
import AuthReducer from './auth.reducer';

describe('Auth render', () => {
  const noop = () => {};
  it('Should render', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AuthForm onLogin={noop} />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
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
        classicLogin: () =>
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
        classicLogin: () =>
          Promise.reject().catch(() => {
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
        classicLogin: () =>
          Promise.resolve({ username: 'jhon' }).then(() => {
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
        classicLogin: () =>
          Promise.reject(new Error('rejected')).catch(() => {
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
