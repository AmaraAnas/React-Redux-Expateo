import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import AuthReducer from '../auth/auth.reducer';

import InscriptionForm from './inscription.container';
import { inscription } from './inscription.actions';

describe('Inscription render', () => {
  it('Should render', () => {
    const noop = () => {};
    expect(
      shallow(
        <InscriptionForm
          onInscription={noop}
          userGuid="0871303E98DE4C75F959A07807A8051B"
          familyGuid="D919A6C9F9985C4C70AE8BC055981B4F"
          clGuid="D919A6C9F9985C4C70AE8BC055981B5F"
        />,
      ),
    ).toBeDefined();
  });
});

it('INSCRIPTION:SUCCESS Should set the user', () => {
  const noop = () => {};
  let state;
  const inscriptionAction = inscription({
    userGuid: '0871303E98DE4C75F959A07807A8051B',
    familyGuid: 'D919A6C9F9985C4C70AE8BC055981B4F',
    startDate: '03-11-2020',
    family: 'FAMILLE_PACSE',
    conjoint: 'Laura',
    password: 'Expateo2015!',
    confirmpassword: 'Expateo2015!',
    allowEmail: 1,
    onPending: noop,
    onSuccess: noop,
    onFailure: noop,
    inscriptionApi: {
      subscribe: () =>
        Promise.resolve({ gUsrGuid: '0871303E98DE4C75F959A07807A8051B' }).then(
          () => {
            expect(state).toEqual({
              user: { gUsrGuid: '0871303E98DE4C75F959A07807A8051B' },
              error: {
                message: '',
              },
            });
          },
        ),
    },
  });
  state = AuthReducer(
    {
      user: {},
      error: {
        message: '',
      },
    },
    inscriptionAction(store.dispatch),
  );
});

it('INSCRIPTION:FAIL Should set the error', () => {
  const noop = () => {};
  let state;
  const inscriptionAction = inscription({
    userGuid: '0871303E98DE4C75F959A07807A8051B',
    familyGuid: 'D919A6C9F9985C4C70AE8BC055981B4F',
    startDate: '03-11-2020',
    family: 'FAMILLE_PACSE',
    conjoint: 'Laura',
    password: 'Expateo2015!',
    confirmpassword: 'Expateo2015!',
    allowEmail: 1,
    onPending: noop,
    onSuccess: noop,
    onFailure: noop,
    inscriptionApi: {
      subscribe: () =>
        Promise.reject(new Error('#exist')).catch(() => {
          expect(state).toEqual({
            user: {},
            error: {
              message: '#exist',
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
    inscriptionAction(store.dispatch),
  );
});
