import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import InscriptionForm from './inscription.container';
import { inscription } from './inscription.actions';
import InscriptionReducer from './inscription.reducer';

describe('Inscription render', () => {
  it('Should render', () => {
    shallow(<InscriptionForm store={store} />);
  });
});

it('INSCRIPTION:SUCCESS Should set the user', () => {
  const noop = () => {};
  let state;
  const inscriptionAction = inscription({
    userIDs: {
      guid: '0871303E98DE4C75F959A07807A8051B',
      family: 'D919A6C9F9985C4C70AE8BC055981B4F',
    },
    startDate: '03-11-2020',
    family: 'FAMILLE_PACSE',
    conjoint: 'Laura',
    password: 'Expateo2015!',
    confirmpassword: 'Expateo2015!',
    ads: '1',
    onPending: noop,
    onSuccess: noop,
    onFailure: noop,
    inscriptionApi: {
      inscription: () =>
        new Promise((resolve) =>
          setTimeout(
            () => resolve({ gUsrGuid: '0871303E98DE4C75F959A07807A8051B' }),
            50,
          ),
        ).finally(() => {
          expect(state).toEqual({
            user: { gUsrGuid: '0871303E98DE4C75F959A07807A8051B' },
            error: {
              message: '',
            },
          });
        }),
    },
  });
  state = InscriptionReducer(
    {
      user: {},
      error: {
        message: '',
      },
    },
    inscriptionAction(store.dispatch),
  );
});
