import React from 'react';
import { shallow } from 'enzyme';

import store from '../../redux-utils/store';
import AuthReducer from '../auth/auth.reducer';
import * as baseApi from '../api/base.api';

import SubscriptionPasswordForm from './subscription.passwordForm.container';
import { setPassword } from './subscription.actions';
import { load, subscribe } from './subscription.api';

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
  it('Load: Should return an json with is familyFieldOptions, isMobilityAlreadyInitialized, isPasswordAlreadyInitialized', async () => {
    baseApi.subscribeApi.load.mockResolvedValueOnce({
      passwordtodo: '0',
      checklisttodo: '1',
      list: {
        familystatus: {
          value: [
            { TRN_CODE: 'FAMILLE_MARIE', TRN_LABEL: 'Couple mari\u00e9' },
            { TRN_CODE: 'FAMILLE_PACSE', TRN_LABEL: 'Couple Pacs\u00e9' },
            { TRN_CODE: 'FAMILLE_CONCUBINAGE', TRN_LABEL: 'En concubinage' },
            { TRN_CODE: 'FAMILLE_SEUL', TRN_LABEL: 'Seul' },
          ],
          default: null,
        },
      },
    });
    const loadedValues = await load({
      sessionId: '0128d',
      id: '123',
      clGuid: '123456789',
    });
    expect(loadedValues).toEqual({
      isMobilityAlreadyInitialized: false,
      isPasswordAlreadyInitialized: true,
      familyFieldOptions: [
        { TRN_CODE: 'FAMILLE_MARIE', TRN_LABEL: 'Couple mari\u00e9' },
        { TRN_CODE: 'FAMILLE_PACSE', TRN_LABEL: 'Couple Pacs\u00e9' },
        { TRN_CODE: 'FAMILLE_CONCUBINAGE', TRN_LABEL: 'En concubinage' },
        { TRN_CODE: 'FAMILLE_SEUL', TRN_LABEL: 'Seul' },
      ].map((option) => ({
        text: option.TRN_LABEL,
        value: option.TRN_CODE,
      })),
    });
  });
});
