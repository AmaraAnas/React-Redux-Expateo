import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import store from './redux-utils/store';
import appReducer from './App.reducer';

it('renders without crashing', () => {
  shallow(<App store={store} />);
});

it('reducers', () => {
  let state;
  state = appReducer(
    { title: 'Hello' },
    { type: '@APP/INIT', payload: { title: 'Expateo - pa' } },
  );
  expect(state).toEqual({ title: 'Expateo - pa' });
});
