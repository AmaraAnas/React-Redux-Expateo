import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import AuthReducer from '../auth/auth.reducer';
import * as baseApi from '../api/base.api';

import SubscriptionPasswordForm from './subscription.passwordForm.container';
import { setPassword } from './subscription.actions';
import { isPasswordAlreadyInitialized, subscribe } from './subscription.api';

jest.mock('../api/base.api');

describe('Subscription render', () => {
  it('Should render', () => {
    const noop = () => {};
    expect(
      shallow(
        <SubscriptionPasswordForm
          onSubscription={noop}
          userGuid="0871303E98DE4C75F959A07807A8051B"
          familyGuid="D919A6C9F9985C4C70AE8BC055981B4F"
          clGuid="D919A6C9F9985C4C70AE8BC055981B5F"
        />,
      ),
    ).toBeDefined();
  });
});

describe('Subscription API', () => {
  it('isPasswordAlreadyInitialized: Should return isPasswordAlreadyInitialized true', async () => {
    baseApi.subscribeApi.load.mockResolvedValueOnce({
      status: 'done',
    });
    const loadedValues = await isPasswordAlreadyInitialized({
      familyGuid: '1324',
      userGuid: ' 1324',
    });
    expect(loadedValues).toEqual(true);
  });

  it('isPasswordAlreadyInitialized: Should return isPasswordAlreadyInitialized false', async () => {
    baseApi.subscribeApi.load.mockResolvedValueOnce({
      status: 'todo',
    });
    const loadedValues = await isPasswordAlreadyInitialized({
      familyGuid: '1324',
      userGuid: ' 1324',
    });
    expect(loadedValues).toEqual(false);
  });
});
